"use client";
import React from "react";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

const DividingTodo = () => {
	return (
		<div className="h-[40vh] md:h-[80vh] flex flex-col p-10 space-y-5">
			{/* Header */}
			<div className="flex flex-row justify-center">
				<Typography variant="h2">
					Finally, all your work in one place
				</Typography>
			</div>
			{/* Image and text area */}
			<div className="flex flex-row justify-between pt-10 gap-5">
				<div className="flex flex-col">
					<Typography variant="h4">Categorise your work</Typography>
					<Typography variant="pharagraph">
						It’s hard to move fast if you can’t find anything. Centralize all
						your knowledge.
					</Typography>
				</div>
				<div className="rounded-lg overflow-hidden drop-shadow-lg">
					<Image
						src="https://cdn.discordapp.com/attachments/945421661577044051/1124046607344750743/image.png"
						width={800}
						height={300}
						alt="screen-shot"
					/>
				</div>
			</div>
		</div>
	);
};

export default DividingTodo;
