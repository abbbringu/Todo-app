"use client";
import {
	Menu,
	MenuHandler,
	MenuList,
	MenuItem,
	Input,
	IconButton,
	Button,
} from "@material-tailwind/react";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

export default function SettingsIconButton({ workspace }) {
	const { data: session } = useSession();
	const [input, setInput] = useState("");
	const [color, setColor] = useState("cyan");

	const saveHandler = async () => {
		try {
			const fetchPosts = async () => {
				const response = await fetch(
					`/api/users/${session?.user?.id}/${workspace._id}/workspace`,
					{
						method: "PATCH",
						body: JSON.stringify({
							title: input,
							color: color,
						}),
					}
				);
				const data = await response.json();
				window.location.reload();
			};
			if (session?.user) fetchPosts();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Menu
			placement="bottom-end"
			dismiss={{
				itemPress: false,
			}}
		>
			<MenuHandler>
				<IconButton
					variant="text"
					className="rounded-full"
					color="gray"
					size="md"
				>
					<Cog6ToothIcon color="gray" className="w-5 h-5" />
				</IconButton>
			</MenuHandler>
			<MenuList>
				<Input
					variant="standard"
					label="Title"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					className="py-3"
				/>
				<MenuItem>
					<Menu placement="left-start" offset={15}>
						<MenuHandler>
							<MenuItem>{color}</MenuItem>
						</MenuHandler>
						<MenuList>
							<MenuItem onClick={() => setColor("cyan")}>Cyan</MenuItem>
							<MenuItem onClick={() => setColor("amber")}>Amber</MenuItem>
							<MenuItem onClick={() => setColor("indigo")}>Indigo</MenuItem>
						</MenuList>
					</Menu>
				</MenuItem>
				<MenuItem>
					<Button fullWidth onClick={saveHandler}>
						Save
					</Button>
				</MenuItem>
			</MenuList>
		</Menu>
	);
}
