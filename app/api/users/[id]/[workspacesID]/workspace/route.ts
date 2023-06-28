import Workspace from "@/models/workspace";
import { connectToDB } from "@/utils/database";

export const GET = async (request, { params }) => {
	try {
		await connectToDB();

		const workspaces = await Workspace.findById(params.workspacesID)
			.find({ creator: params.id })
			.populate("creator");

		return new Response(JSON.stringify(workspaces), { status: 200 });
	} catch (error) {
		return new Response("Failed to fetch prompts created by user", {
			status: 500,
		});
	}
};

export const PATCH = async (request, { params }) => {
	const { title, color } = await request.json();

	try {
		await connectToDB();
		const existingPrompt = await Workspace.findById(
			params.workspacesID
		).findOne({ creator: params.id });
		if (!existingPrompt)
			return new Response("Prompt not found", { status: 404 });

		existingPrompt.title = title;
		existingPrompt.color = color;
		await existingPrompt.save();

		return new Response(JSON.stringify(existingPrompt), { status: 200 });
	} catch (error) {
		return new Response(JSON.stringify(error), { status: 500 });
	}
};
