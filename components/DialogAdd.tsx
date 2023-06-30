"use client";
import React from "react";
import {
	Button,
	Dialog,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Input,
	Checkbox,
} from "@material-tailwind/react";
import SelectorOptions from "./SelectorOptions";

const options = {
	colors: ["cyan", "amber", "indigo"],
	tag: ["School", "Work", "Free time"],
	status: ["Todo", "In Progress", "Completed"],
	priority: ["Low", "Medium", "High"],
};

export default function DialogAdd() {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen((cur) => !cur);

	return (
		<React.Fragment>
			<Button variant="filled" color="blue-gray" size="sm" onClick={handleOpen}>
				+ Add
			</Button>
			<Dialog
				size="xs"
				open={open}
				handler={handleOpen}
				className="bg-transparent shadow-none"
			>
				<Card className="mx-auto w-full max-w-[24rem]">
					<CardHeader
						variant="gradient"
						color="blue"
						className="mb-4 grid h-28 place-items-center"
					>
						<Typography variant="h3" color="white">
							Create Todo
						</Typography>
					</CardHeader>
					<CardBody className="flex flex-col gap-4">
						<Input label="Title" size="lg" />
						<SelectorOptions title="Color" options={options.colors} />
						<SelectorOptions title="Tag" options={options.tag} />
						<SelectorOptions title="Status" options={options.status} />
						<SelectorOptions title="Priority" options={options.priority} />
					</CardBody>
					<CardFooter className="pt-0">
						<Button variant="gradient" onClick={handleOpen} fullWidth>
							Submit
						</Button>
					</CardFooter>
				</Card>
			</Dialog>
		</React.Fragment>
	);
}
