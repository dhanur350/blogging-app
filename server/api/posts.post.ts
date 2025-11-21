import { useMongo } from "../utils/db";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    if (!body.title || !body.content) {
      throw createError({
        statusCode: 400,
        statusMessage: "Title and content are required",
      });
    }

    const db = await useMongo();

    const newPost = {
      title: body.title,
      content: body.content,
      createdAt: new Date()
    };

    const result = await db.collection("posts").insertOne(newPost);

    return {
      success: true,
      post: { ...newPost, _id: result.insertedId }
    };
  } catch (err: any) {
    console.error(err);

    throw createError({
      statusCode: 500,
      statusMessage: err?.message || "Failed to create post",
    });
  }
});
