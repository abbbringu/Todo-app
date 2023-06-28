"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import DashboardHeader from "@/components/dashboardHeader";
import TodoTable from "@/components/TodoTable";

const board = ({ params }) => {
	const { data: session } = useSession();
	const [workspace, setWorkspace] = useState(null);

	useEffect(() => {
		const fetchPosts = async () => {
			const response = await fetch(
				`/api/users/${session?.user.id}/${params?.id}/workspace`
			);
			const data = await response.json();
			console.log(data[0].list);
			setWorkspace(data[0]);
		};

		if (session?.user.id) fetchPosts();
	}, []);

	return (
		<div className="flex min-h-screen flex-col w-full items-center">
			<DashboardHeader title={workspace?.title || ""} />
			<div className="w-full max-w-screen-xl pt-5">
				<TodoTable list={workspace?.list || []} />
			</div>
		</div>
	);
};

export default board;
