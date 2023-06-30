"use client";

import {
	Card,
	Typography,
	List,
	ListItem,
	ListItemPrefix,
	Avatar,
	ListItemSuffix,
	IconButton,
} from "@material-tailwind/react";
import { UserCircleIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import Link from "next/link";

export default function Sidebar() {
	const { data: session } = useSession();
	const possibleColors = ["bg-cyan-800", "bg-amber-800", "bg-indigo-800"];

	const createWorkspace = async () => {
		const newItem = [
			{
				title: "New workspace",
				userId: session?.user?.id,
				color: "cyan",
				list: [
					{
						title: "Finish devlopment",
						done: false,
						status: 0,
						priority: 0,
						tag: 0,
					},
				],
			},
		];
		try {
			const response = await fetch("/api/workspace/new", {
				method: "POST",
				body: JSON.stringify(newItem[0]),
			});
			const fetchPosts = async () => {
				const response = await fetch(
					`/api/users/${session?.user?.id}/workspaces`
				);
				const data = await response.json();
				setWorkspaces(data);
			};
			if (session?.user) fetchPosts();
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		const fetchPosts = async () => {
			const response = await fetch(
				`/api/users/${session?.user?.id}/workspaces`
			);
			const data = await response.json();
			setWorkspaces(data);
		};
		if (session?.user) fetchPosts();
	}, [session?.user.id]);
	const [updateWorkspace, setUpdateWorkspace] = useState(false);
	const [workspaces, setWorkspaces] = useState([]);
	return (
		<Card className="fixed top-4 left-4 h-[calc(100vh-2rem)] w-full max-w-[17rem] p-4 shadow-xl shadow-blue-gray-900/5">
			<Link href="/">
				<div className="mb-2 p-4 cursor-pointer" onClick={() => {}}>
					<Typography variant="h5" color="blue-gray">
						Juvumi Todo
					</Typography>
				</div>
			</Link>
			<List>
				{/* Login / Account section */}
				{session?.user ? (
					<ListItem onClick={() => signOut()}>
						<ListItemPrefix>
							<Avatar
								variant="circular"
								alt="candice"
								src={session?.user.image || ""}
							/>
						</ListItemPrefix>
						{session?.user.name}
					</ListItem>
				) : (
					<ListItem onClick={() => signIn()}>
						<ListItemPrefix>
							<UserCircleIcon className="h-5 w-5" />
						</ListItemPrefix>
						Login
					</ListItem>
				)}

				<hr className="my-2 border-blue-gray-100" />
				{/* Render all workspaces */}
				{workspaces.map((e: any) => (
					<Link key={e._id} href={`/board/${e._id}`}>
						<ListItem>
							<ListItemPrefix>
								<div className={`w-2 h-2 bg-${e.color}-800 rounded-full`} />
							</ListItemPrefix>
							{e.title}
						</ListItem>
					</Link>
				))}
				<ListItem onClick={createWorkspace}>+ Add workspace</ListItem>
			</List>
		</Card>
	);
}
