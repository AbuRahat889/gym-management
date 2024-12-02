import { connectDB } from "@/lib/connectDB";

export const POST = async (request) => {
  try {
    const newUser = request.json();
    const db = await connectDB();
    const userCollection = db.collection("users");

    // Check if user already exists
    const existingUser = await userCollection.findOne({ email: newUser.email });
    if (existingUser) {
      return new Response(JSON.stringify({ message: "User already exists." }), {
        status: 409,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Insert new user into the database
    await userCollection.insertOne(newUser);

    return new Response(
      JSON.stringify({ message: "User created successfully." }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error in POST /api/signup:", error);

    return new Response(JSON.stringify({ message: "Something went wrong." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
