const axios = require("axios");
const baseURL = "http://localhost:3001/";

// TODO: Look into how to pass back an empty array for a virtual property if it has no values. It's currently returning null.
// TODO: Figure out why 2 ids are sent down.
// EX: 
//   {
//     "_id": "5ba5e8d88a8219810eba315b",
//     "username": "tom",
//     "properties": null,
//     "id": "5ba5e8d88a8219810eba315b"
//   }
axios.get(baseURL + 'api/landlord/')
    .then(function (response) {
        if (response.data.length == 0) {
            return;
        }

        console.log(JSON.stringify(response.data, 0, 2));
        for (landLord of response.data) {
            seedPropertyToLandlord(landLord);
        }
        // let landLord = response.data[0];
    })
    .catch(function (error) {
        console.log(error);
    })

function seedPropertyToLandlord(landLord) {
    const { _id } = landLord;
    if (!_id) {
        return
    }

    let property = {
        address: "123 Alphabet Dr",
        name: "Alpha",
        landlordID: _id
    }

    axios.post(baseURL + 'api/landlord/addProperty', property)
        .then(function (response) {
            console.log(JSON.stringify(response.data, 0, 2));
        })
        .catch(function (error) {
            console.log("Error: " + error);
        })

}