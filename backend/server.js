const cors = require("cors");
const express = require("express");
const app = express();
const mongoose = require("mongoose")
//const connection = require("./db");
const tasks = require("./routes/tasks.js");

// mongoDB connection
//const MONGO_URI = "mongodb+srv://kahro:admin@cluster0.2ngvf5k.mongodb.net/?retryWrites=true&w=majority";
const MONGO_URI = "mongodb://kahro:admin@ac-ar6mscw-shard-00-00.2ngvf5k.mongodb.net:27017,ac-ar6mscw-shard-00-01.2ngvf5k.mongodb.net:27017,ac-ar6mscw-shard-00-02.2ngvf5k.mongodb.net:27017/?ssl=true&replicaSet=atlas-ro6xpx-shard-0&authSource=admin&retryWrites=true&w=majority";
const connect = () => {
    mongoose.connect(MONGO_URI).then(() => {
        console.log("Connected to DB")
    }).catch((e) => {
        console.log(e)
    })
}

app.use(cors());
app.use(express.json());
app.use("/api/tasks", tasks);

const port = process.env.PORT || 8080;

app.listen(port, () => {
    mongoose.set('strictQuery', false);
    connect();
    console.log(`Listening on port ${port}...`);
})
    
