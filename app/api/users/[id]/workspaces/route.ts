import Workspace from "@/models/workspace";
import { connectToDB } from "@/utils/database";

export const GET = async (request, { params }) => {
	try {
		await connectToDB();
		console.log("Trying to update database");
		const workspaces = await Workspace.find({ creator: params.id }).populate(
			"creator"
		);

		return new Response(JSON.stringify(workspaces), { status: 200 });
	} catch (error) {
		return new Response("Failed to fetch prompts created by user", {
			status: 500,
		});
	}
};
