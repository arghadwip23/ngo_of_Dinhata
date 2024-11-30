import { MongoClient } from "mongodb";

let client;
let clientPromise;

// Check if the environment variable is defined
const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("Please add your MongoDB URI to .env.local");
}

// Check if a global variable is defined for MongoDB connection
if (!global._mongoClientPromise) {
  client = new MongoClient(uri);
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export default clientPromise;