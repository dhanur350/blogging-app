import { MongoClient } from "mongodb";

let client: MongoClient;

export async function useMongo() {
  const config = useRuntimeConfig();

  if (!client) {
    client = new MongoClient(config.mongodbUri as string);
    await client.connect();
  }

  return client.db("blog"); // database named "blog"
}
