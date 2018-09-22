const mongoose = require("mongoose");
const db = require("../models");
const landlordController = require("../controllers/landlordController");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/rent_app",
  { useNewUrlParser: true }
);

const landlordSeed = [
  {
    created: new Date(Date.now()),
    username: "tom",
    password: "tompass",
  },
  {
    created: new Date(Date.now()),
    username: "jack",
    password: "jackpass",
  }
];

function propertySeed(landlord) {
  return [
    {
      created: new Date(Date.now()),
      name: "place1",
      landlord: landlord._id,
    },
    {
      created: new Date(Date.now()),
      name: "place2",
      landlord: landlord._id,
    }
  ];
}

function unitSeed(property) {
  return [
    {
      created: new Date(Date.now()),
      name: "unit1",
      property: property._id,
    },
    {
      created: new Date(Date.now()),
      name: "unit2",
      property: property._id,
    }
  ];
}

function tenantSeed(unit) {
  return [
    {
      created: new Date(Date.now()),
      name: "name1",
      password: "name1pass",
      unit: unit._id
    },
    {
      created: new Date(Date.now()),
      name: "name2",
      password: "name2pass",
      unit: unit._id
    }
  ];
}

// Clear old data
// db.Landlord.deleteMany({});
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
  .then(() => db.Landlord.collection.insertMany(landlordSeed))
  .then(data => {
    // data contains newly created landlords
    console.log("Created Landlords");

    let promises = [];
    for (let landlord of data.ops) {
      // console.log(JSON.stringify(landlord, 0, 2));
      // Create new properties tied to landlord
      let promise = db.Property.collection.insertMany(propertySeed(landlord))
      promises.push(promise);
    }
    return Promise.all(promises);
  })
  .then(data => {
    // data contains newly created properties
    console.log("Created Properties");
    let promises = [];
    for (let result of data) {
      let properties = [];
      for (let property of result.ops) {
        properties.push(property._id);
        // console.log(JSON.stringify(property, 0, 2));
        // Create new units tied to property
        let promise = db.Unit.collection.insertMany(unitSeed(property))
        promises.push(promise);
      }
    }

    return Promise.all(promises) // Add new properties
  })
  .then(data => {
    console.log("Created Units");
    let promises = [];
    for (let result of data) {
      let units = [];
      for (let unit of result.ops) {
        units.push(unit._id);
        // console.log(JSON.stringify(unit, 0, 2));
        // Create new units tied to property
        let promise = db.Tenant.collection.insertMany(tenantSeed(unit))
        promises.push(promise);
      }
    }

    return Promise.all(promises) // Add new tenants
  })
  .then(data => {
    console.log("Created Tenants");
    // for (let result of data) {
    //   for (let tenant of result.ops) {
    //     console.log(JSON.stringify(tenant, 0, 2));
    //   }
    // }

    console.log("Completed seeding data!");
    process.exit(0);

    console.log("Fetching Landlord info:");
    // return db.Landlord.find({}).then(data => {
    //   // Find all landlords
    //   // console.log(JSON.stringify(data, 0, 2));
    //   var promises = [];
    //   for (let landlord of data) {
    //     let promise = landlordController.info(landlord._id) // Promise to get all the landlord data
    //     promises.push(promise);
    //   }
    //   return Promise.all(promises) // Execute promises getting all landlord data
    // })
  })
  // .then(data => {
  //   console.log("*****Landlord data (landlord/properties/units/tenants)*****");
  //   console.log(JSON.stringify(data, 0, 2));
  //   process.exit(0);
  // })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
