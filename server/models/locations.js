const { getDatabase } = require("../config/mongoConnection");

const getLocationCollection = () => {
  const db = getDatabase();
  const locationCollection = db.collection("Locations");

  return locationCollection;
};

const findAllLocations = async () => {
  const agg = [
    {
      $lookup: {
        from: "Coachs",
        localField: "_id",
        foreignField: "locationId",
        as: "Coach",
      },
    },
  
  ];

  const locations = await getLocationCollection().aggregate(agg).toArray();

  return locations;
};

const addLocation = async (payload) => {
  const locationCollection = await getLocationCollection()
  const newLocation = await locationCollection.insertOne(payload)

  const locations = await locationCollection.findOne(
    {
      _id: newLocation.insertedId
    }
  )

  return locations
}



module.exports = {
  getLocationCollection,
  findAllLocations,
  addLocation
};
