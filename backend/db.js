const mongoose = require("mongoose");

module.exports = async () => {
  try {
    const connectionParams = {
      useNewUrlParser: true,
    };
    await mongoose.connect(
      /* CREATE & CONNECT TO YOUR OWN MONGODB DATABASE */
      "",
      connectionParams,
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Could not connect to database", error);
  }
};
