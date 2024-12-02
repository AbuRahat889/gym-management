import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
let client;
let clientPromise;

if (!uri) {
  throw new Error("MongoDB URI is not defined in the environment variables.");
}

const connectDB = async () => {
  if (!clientPromise) {
    client = new MongoClient(uri);
    clientPromise = client.connect();
  }
  const connection = await clientPromise;
  return connection.db("GymSync");
};

export { connectDB };
