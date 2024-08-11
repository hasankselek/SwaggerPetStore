class Data {

  headerPayload() {
    const headerBody = {
      "accept": "application/json",
      "Content-Type": "application/json"
    }
    return headerBody;
  }

  acceptPayload() {
    const headerBody = {
      "accept": "application/json"
    }
    return headerBody;
  }

  contentPayload(){
    const headerBody = {
      "Content-Type": "application/x-www-form-urlencoded",
        "accept" : "application/json"
    }
    return headerBody;
  }

  bodyPayload(id, nameX, statuS) {
    const postData = {
      "id": id,
      "category": {
        "id": 1,
        "name": "Dog"
      },
      "name": nameX,
      "photoUrls": [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6iOTEY9aWlNVzWjSSd_selEjSdbmDE1vePw&s"
      ],
      "tags": [
        {
          "id": 1,
          "name": "Short Legged"
        }
      ],
      "status": statuS
    }
    return postData;
  }

  allUpdatePayload() {
    const postData = {
      "id": 1939,
      "category": {
        "id": 1,
        "name": "Dog"
      },
      "name": "Chelsea",
      "photoUrls": [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6iOTEY9aWlNVzWjSSd_selEjSdbmDE1vePw&s"
      ],
      "tags": [
        {
          "id": 1,
          "name": "Short Legged"
        }
      ],
      "status": "pending"
    }
    return postData;
  }

  updatePayload() {
    const postData = {
        "name": "chelsea",
        "status": "sold"
    
    }
    return postData;
  }

  statusPayload(status){
    const postData = {
      "status" : status
    }

  }


}

export default Data;