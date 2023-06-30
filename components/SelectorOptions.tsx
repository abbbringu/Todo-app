"use client";

import { Select, Option } from "@material-tailwind/react";

interface selectorSettings {
	title: string;
	options: string[];
}

export default function SelectorOptions({ title, options }: selectorSettings) {
	return (
		<div className="w-full">
			<Select label={title}>
				{options.map((option) => (
					<Option key={option}>{option}</Option>
				))}
			</Select>
		</div>
	);
}
