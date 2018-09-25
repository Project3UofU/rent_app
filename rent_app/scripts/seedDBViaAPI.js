const axios = require("axios");
const db = require("../models");
const mongoose = require("mongoose");
const utils = require("../utils")

const baseURL = "http://localhost:3001/";

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/rent_app",
    { useNewUrlParser: true }
);

// TODO: Look into how to pass back an empty array for a virtual property if it has no values. It's currently returning null.
// TODO: Figure out why 2 ids are sent down.
// EX: 
// {
//     "_id": "5ba856cea2ff4f5d1df237a7",
//     "name": "Landlord Name 8661",
//     "password": "password7535",
//     "token": "",
//     "username": "username29",
//     "created": "2018-09-24T03:15:26.209Z",
//     "__v": 0,
//     "properties": null,
//     "id": "5ba856cea2ff4f5d1df237a7"
// }

db.Property.deleteMany({})
    .then(data => {
        console.log(`Removed ${data.n} Property records`);
        return db.Unit.deleteMany({})
    })
    .then(data => {
        console.log(`Removed ${data.n} Unit records`);
        return db.Tenant.deleteMany({})
    })
    .then(data => {
        console.log(`Removed ${data.n} Tenant records`);
        return db.Landlord.deleteMany({})
    })
    .then(data => {
        console.log(`Removed ${data.n} Landlord records`);
    })
    .then(() => addNewLandlordAndPopulate())

function addNewLandlordAndPopulate() {
    console.log(`Seed Landlord`)
    let landlord = {
        name: `Landlord Name ${Math.ceil(Math.random() * 9999)}`,
        username: `username${Math.ceil(Math.random() * 9999)}`,
        password: `password${Math.ceil(Math.random() * 9999)}`,
    }

    axios.post(baseURL + 'api/landlord/', landlord)
        .then(function (response) {
            let landord = response.data.landlord;
            console.log("Landlord: " + JSON.stringify(landord, 0, 2));
            if (landord) {
                seedPropertyToLandlord(landord);
            }
        })
        .catch(function (error) {
            utils.printError(error);
            process.exit(1);
        })

}

function seedPropertyToLandlord(landlord) {
    const { _id } = landlord;
    if (!_id) {
        return
    }

    console.log(`Seeding Property to Landlord(${_id})`)
    let number = Math.ceil(Math.random() * 9999);
    let property = {
        address: `${number} Alphabet Dr`,
        name: `Alpha${number}`,
        landlordID: _id
    }

    axios.post(baseURL + 'api/landlord/addProperty', property)
        .then(function (response) {
            const property = response.data.property;
            console.log("Property: " + JSON.stringify(property, 0, 2));
            if (property) {
                seedUnitToProperty(property);
            }
        })
        .catch(function (error) {
            utils.printError(error);
            process.exit(1);
        })
}

function seedUnitToProperty(property) {
    const { _id } = property;
    if (!_id) {
        return
    }

    console.log(`Seed Unit to Property(${_id})`)

    let unit = {
        rent: Math.ceil(Math.random() * 500) + 400,
        securityDeposit: Math.ceil(Math.random() * 300) + 200,
        name: `Unit ${Math.ceil(Math.random() * 200) + 1}`,
        propertyID: _id
    }

    axios.post(baseURL + 'api/property/addUnit', unit)
        .then(function (response) {
            const unit = response.data.unit;
            console.log("Unit: " + JSON.stringify(unit, 0, 2));
            if (unit) {
                seedTenantToUnit(unit);
            }
        })
        .catch(function (error) {
            utils.printError(error);
            process.exit(1);
        })

}

function seedTenantToUnit(unit) {
    const { _id } = unit;
    if (!_id) {
        return
    }

    console.log(`Seed Tenant to Unit(${_id})`)

    let tenant = {
        name: `Name ${Math.ceil(Math.random() * 9999)}`,
        phone: `${Math.ceil(Math.random() * 8888888) + 1000000}`,
        email: `test${Math.ceil(Math.random() * 10000) + 1}@gmail.com`,
        preferredMethodOfContact: Math.ceil(Math.random() * 2) == 1 ? "emial" : "phone",
        password: `password${Math.ceil(Math.random() * 9999)}`,
        unitID: _id
    }

    axios.post(baseURL + 'api/unit/addTenant', tenant)
        .then(function (response) {
            console.log("Tenant: " + JSON.stringify(response.data, 0, 2));
            process.exit(0);
        })
        .catch(function (error) {
            utils.printError(error);
            process.exit(1);
        })

}