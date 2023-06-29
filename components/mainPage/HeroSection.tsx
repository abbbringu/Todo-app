"use client";
import React from "react";
import Image from "next/image";
import { Typography, Button } from "@material-tailwind/react";
import { ArrowLongRightIcon, ArrowPathIcon } from "@heroicons/react/24/outline";

const HeroSection = () => {
	return (
		<div className="flex flex-col space-y-5  md:flex-row justify-between items-center gap-10 py-16 px-8">
			<div className="flex flex-col">
				<Typography variant="h1">
					Your{" "}
					<span className=" bg-gradient-to-r from-amber-700 via-cyan-500 to-green-400 text-transparent bg-clip-text animate-gradient">
						Only
					</span>{" "}
					Todo list
				</Typography>
				<Typography variant="pharagraph">
					Juvumi Todo is the smart todo app where easier, simpler tasks are
					done. <br />
					Now with categories, status and priority.
				</Typography>
				<div className="pt-3">
					<Button
						size="sm"
						color="blue-gray"
						className="flex items-center gap-2"
					>
						Get Juvumi Free <ArrowLongRightIcon className="h-5 w-5" />
					</Button>
				</div>
			</div>
			<div className="w-64 h-64 bg-cyan-500 rounded-xl rotate-45 overflow-hidden">
				<Image
					src="/Homepage/hero.svg"
					alt="Landing page image"
					width={300}
					height={300}
					className="-rotate-45 scale-150"
					priority
				/>
			</div>
		</div>
	);
};

export default HeroSection;
