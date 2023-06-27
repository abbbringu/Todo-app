import Workspace from "@/models/workspace";
import { connectToDB } from "@/utils/database";

export const POST = async (request: any) => {
  const { userId, title, color, list } = await request.json();

  try {
    await connectToDB();
    const newWorkspace = new Workspace({ creator: userId, title, color, list });

    await newWorkspace.save();
    return new Response(JSON.stringify(newWorkspace), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new workspace", { status: 500 });
  }
};
