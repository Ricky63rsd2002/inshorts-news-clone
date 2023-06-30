import mongoose from "mongoose";

const Connection = async (username, password) => {  
    const URL = `mongodb://${username}:${password}@ac-xrexzt2-shard-00-00.nklmusb.mongodb.net:27017,ac-xrexzt2-shard-00-01.nklmusb.mongodb.net:27017,ac-xrexzt2-shard-00-02.nklmusb.mongodb.net:27017/NEWS-CLONE?ssl=true&replicaSet=atlas-ydk03n-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {

    await mongoose.connect(URL, { useNewUrlParser: true });

    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database ", error);
  }
};
 
export default Connection;
