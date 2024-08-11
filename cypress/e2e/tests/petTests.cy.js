import Data from "../data-helper/data";
import Params from "../data-helper/params";


const data = new Data();
const params = new Params();
var url = params.url();

describe('Pet Tests', () => {

  it('Create a new pet to the store - should return 200 for a valid pet ID', () => {
    cy.request({
      method: 'POST',
      url: url + '/v2/pet',
      body: data.bodyPayload(1187, "Doggie", "available"),
      headers: data.headerPayload()
    })
    .then((response) => {
      expect(response.status).to.eq(200);
    })
  })

  it('Find pet by status - should return 200 for a valid pet by status', () => {
    cy.request({
      method: 'GET',
      url: url + '/v2/pet/findByStatus',
      headers: data.acceptPayload(),
      qs: data.statusPayload("available")
    })
    .then((response) => {
      expect(response.status).to.eq(200);
    })
  })

  it('Find pet by ID - should return 200 for a valid pet ID', () => {
    cy.request({
      method: 'GET',
      url: url + '/v2/pet/1187',
      headers: data.acceptPayload()
    })
    .then((response) => {
      expect(response.status).to.eq(200);
    })
  })

  it('Invalid pet by ID - should return 404 for an invalid pet ID', () => {
    cy.request({
      method: 'GET',
      url: url + '/v2/pet/asdasasdasdad',
      headers: data.acceptPayload(),
      failOnStatusCode: false
    })
    .then((response) => {
      expect(response.status).to.eq(404);
    })
  })

  it('Undefined Pet by ID - should return 404 for a non-existing pet ID', () => {
    cy.request({
      method: 'GET',
      url: url + '/v2/pet/123123123123',
      headers: data.acceptPayload(),
      failOnStatusCode: false
    })
    .then((response) => {
      expect(response.status).to.eq(404);
    })
  })

  it('Update an existing pet information - should return 200 for a valid pet status', () => {
    cy.request({
      method: 'PUT',
      url: url + '/v2/pet',
      headers: data.headerPayload(),
      body: data.allUpdatePayload()
    })
    .then((response) => {
      expect(response.status).to.eq(200);
    })
  })

  it('Updates a pet in the store with form data - should return 200 for form data', () => {
    
    cy.request({
      method: 'POST',
      url: url + '/v2/pet/1187',
      headers: data.contentPayload(),
      body: data.updatePayload()
    })
    .then((response) => {
      expect(response.status).to.eq(200);
    })
  })

  it('Updates a pet in the store with form data(Undefined Pet by ID) - should return 404 for not found pet ID', () => {

    cy.request({
      
      method: 'POST',
      url: url + '/v2/pet/123123123',
      headers: data.contentPayload(),
      body: data.updatePayload(),
      failOnStatusCode: false
    })
    .then((response) => {
      expect(response.status).to.eq(404);
    })
  })

  it('Delete with PetID - should return 200 for a valid pet ID', () => {
    const petID = 1187;
    cy.request({
      method: 'DELETE',
      url: url + '/v2/pet/' + petID,
      headers: data.acceptPayload()
    })
    .then((response) => {
      expect(response.status).to.eq(200);
    })
  })

  it('Delete invalid pet ID - should return 404 for an invalid pet ID', () => {
    cy.request({
      method: 'DELETE',
      url: url + '/v2/pet/asdasasdasdad',
      headers: data.acceptPayload(),
      failOnStatusCode: false
    })
    .then((response) => {
      expect(response.status).to.eq(404);
    })
  })

  it('Delete non-existing pet ID - should return 404 for a non-existing pet ID', () => {
    cy.request({
      method: 'DELETE',
      url: url + '/v2/pet/123123123123',
      headers: data.acceptPayload(),
      failOnStatusCode: false
    })
    .then((response) => {
      expect(response.status).to.eq(404);
    })
  })

})

    


