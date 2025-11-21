import { MongoClient } from "mongodb"

export default defineEventHandler(async (event:any) => {
  const config = useRuntimeConfig()

  const client = new MongoClient(config.mongodbUri as string);
  await client.connect()

  const posts = await client.db("blog").collection("posts").find().toArray()
  return posts
})