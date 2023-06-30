"use client";
import React from "react";
import Image from "next/image";
import { Typography, Button } from "@material-tailwind/react";
import { ArrowLongRightIcon, ArrowPathIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const HeroSection = () => {
	return (
		<div className="flex flex-col space-y-20  md:flex-row justify-between items-center gap-10 py-16 px-8">
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
					<Link href="/board">
						<Button
							size="sm"
							color="blue-gray"
							className="flex items-center gap-2"
						>
							Get Juvumi Free <ArrowLongRightIcon className="h-5 w-5" />
						</Button>
					</Link>
				</div>
			</div>
			<div className="group relative w-64 h-64 md:pt-0">
				<div
					className="
				absolute 
				transition
				w-64 h-64 
				bg-cyan-500 
				rounded-xl 
				rotate-45 
				overflow-hidden 
				group-hover:-translate-y-10
				group-hover:translate-x-10
				duration-300 ease-in-out
				"
				>
					<Image
						src="/Homepage/hero.svg"
						alt="Landing page image"
						width={300}
						height={300}
						className="-rotate-45 scale-150"
						priority
					/>
				</div>
				<div
					className="absolute w-32 h-32 
				bg-cyan-500 
				rounded-xl 
				rotate-45 
				overflow-hidden 
				-left-10 
				-top-16
				group-hover:-translate-y-12
				group-hover:-translate-x-12
				duration-300 ease-in-out
				"
				>
					<Image
						src="https://cdn.discordapp.com/attachments/945421661577044051/1124281857433948250/hand-drawn-community-spirit-illustration_52683-109031.png"
						alt="Landing page image"
						fill
						style={{ objectFit: "cover" }}
						className="-rotate-45 scale-150"
						priority
					/>
				</div>
				<div
					className="absolute 
				w-32 
				h-32 
				bg-cyan-500 
				rounded-xl 
				rotate-45 
				overflow-hidden 
				-left-20 
				-bottom-8
				group-hover:translate-y-2
				group-hover:-translate-x-2
				duration-300 ease-in-out
				"
				>
					<Image
						src="https://cdn.discordapp.com/attachments/945421661577044051/1124282038502035506/group-business-woman-running_24911-69725.png"
						alt="Landing page image"
						width={150}
						height={150}
						className="-rotate-45 scale-150"
						priority
					/>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
