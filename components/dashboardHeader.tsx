"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Typography, IconButton } from "@material-tailwind/react";

import { ArrowLeftIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";
import SettingsIconButton from "./SettingsIconButton";

export default function DashboardHeader({ workspace }) {
	const router = useRouter();
	return (
		<div className="mx-auto w-full px-6 py-3 flex flex-row justify-between items-center bg-white">
			{/* Right side of the navbar */}
			<div className="flex flex-row gap-5">
				<IconButton
					variant="outlined"
					className="rounded-full"
					color="gray"
					onClick={() => router.back()}
					size="sm"
				>
					<ArrowLeftIcon color="gray" className="w-4 h-4" />
				</IconButton>
				<div className="flex items-center justify-between text-blue-gray-500">
					<Typography variant="h6" className="mr-4 py-1.5">
						{workspace.title}
					</Typography>
					<div className="hidden lg:block"></div>
				</div>
			</div>
			{/* Settings icon */}
			<div>
				<SettingsIconButton workspace={workspace} />
			</div>
		</div>
	);
}
