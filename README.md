# Petstore API Test Automation
This project creates automated test scenarios using Postman and Cypress to test various methods of the Petstore API. 
Tests have been conducted on the GET, POST, PUT, and DELETE methods of the API.

**Postman Collection:** [PetSwaggerPet.postman_collection.json](https://github.com/hasankselek/SwaggerPetStore/blob/main/PetSwaggerPet.postman_collection.json)

## Installation

1. Clone this repository:
    ```bash
    git clone https://github.com/hasankselek/SwaggerPetStore
    ```

2. Install the required dependencies:
    ```bash
    npm install
    ```

3. Run the Cypress tests:
    ```bash
    npx cypress run
    ```
## Test Scenario

### Pet API Tests
1. **POST - Create a new pet to the store - should return 200 for a valid pet ID**
2. **GET - Find pet by status - should return 200 for a valid pet by status**
3. **GET - Find pet by ID - should return 200 for a valid pet ID**
4. **GET - Invalid pet by ID - should return 404 for an invalid pet ID**
4. **GET - Undefined Pet by ID - should return 404 for a non-existing pet ID**
5. **PUT - Update an existing pet information - should return 200 for a valid pet status**
6. **POST - Updates a pet in the store with form data - should return 200 for form data**
7. **POST - Updates a pet in the store with form data(Undefined Pet by ID) - should return 404 for not found pet ID**
8. **DELETE - Delete with PetID - should return 200 for a valid pet ID**
9. **DELETE - Delete invalid pet ID - should return 404 for an invalid pet ID**
10. **DELETE - Delete non-existing pet ID - should return 404 for a non-existing pet ID**

## Test Sonuçları

Tüm test senaryoları başarıyla çalışmıştır. Aşağıda her testin başarılı olup olmadığını gösteren sonuçlar bulunmaktadır:

- **Pet API Tests**: Başarılı
    - POST - Create a new pet to the store : Successful(200)
    - GET - Find pet by status : Successful(200)
    - GET - Find pet by ID : Successful(200)
    - GET - Invalid pet by ID : Successful(404)
    - GET - Undefined Pet by ID : Successful(404)
    - PUT - Update an existing pet information : Successful(404)
    - POST - Updates a pet in the store with form data : Successful(200)
    - POST - Updates a pet in the store with form data(Undefined Pet by ID) : Successful(404)
    - DELETE - Delete with PetID : Successful (200)
    - DELETE - Delete invalid pet ID : Successful (404)
    - DELETE - Delete non-existing pet ID : Successful (404)





