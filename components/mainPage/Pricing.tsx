"use client";
import React from "react";
import { Typography } from "@material-tailwind/react";
import PriceCard from "./PriceCard";

const benefits = {
	free: ["5 Workspaces", "20 todo items", "Crossplatform", "1 Team Member"],
	plus: ["30 Workspaces", "100 todo items", "Crossplatform", "5 Team Members"],
	business: [
		"50 Workspaces",
		"200 todo items",
		"Crossplatform",
		"20 Team Members",
	],
};

const Pricing = () => {
	return (
		<div id="pricing" className="w-full flex flex-col pt-5">
			<div className="text-center">
				<Typography variant="h2">
					One tool for your whole company. <br />
					Free for teams to try. (not real)
				</Typography>
			</div>
			<div className="flex flex-col md:flex-row  items-center justify-center gap-5 pt-5">
				<PriceCard
					variant="Free"
					price="0"
					color="gray"
					benefits={benefits.free}
				/>
				<PriceCard
					variant="Plus"
					price="8"
					color="blue"
					benefits={benefits.plus}
				/>
				<PriceCard
					variant="Business"
					price="15"
					color="deep-purple"
					benefits={benefits.business}
				/>
			</div>
		</div>
	);
};

export default Pricing;
