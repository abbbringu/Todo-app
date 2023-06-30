"use client";
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Button,
} from "@material-tailwind/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const colors = ["text-blue-500", "text-deep-purple-500", "text-orange-500"];

interface PriceCardOption {
	variant: String;
	price: String;
	benefits: String[];
	color: "blue" | "deep-orange" | "deep-purple" | "orange";
}

export default function PriceCard({
	variant,
	price,
	benefits,
	color,
}: PriceCardOption) {
	return (
		<Card color={color} variant="gradient" className="w-full max-w-[20rem] p-8">
			<CardHeader
				floated={false}
				shadow={false}
				color="transparent"
				className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
			>
				<Typography
					variant="small"
					color="white"
					className="font-normal uppercase"
				>
					{variant}
				</Typography>
				<Typography
					variant="h1"
					color="white"
					className="mt-6 flex justify-center gap-1 text-7xl font-normal"
				>
					<span className="mt-2 text-4xl">$</span>
					{price} <span className="self-end text-4xl">/mo</span>
				</Typography>
			</CardHeader>
			<CardBody className="p-0">
				<ul className="flex flex-col gap-4">
					{benefits.map((e) => (
						<li className="flex items-center gap-4">
							<span className="rounded-full border border-white/20 bg-white/20 p-1">
								<CheckIcon strokeWidth={2} className="h-3 w-3" />
							</span>
							<Typography className="font-normal">{e}</Typography>
						</li>
					))}
				</ul>
			</CardBody>
			<CardFooter className="mt-12 p-0">
				<Link href="/board">
					<Button
						size="lg"
						color="white"
						className={`text-${color}-500 hover:scale-[1.02] focus:scale-[1.02] active:scale-100`}
						ripple={false}
						fullWidth={true}
					>
						Get started
					</Button>
				</Link>
			</CardFooter>
		</Card>
	);
}
