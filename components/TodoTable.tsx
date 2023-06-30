import {
	MinusIcon,
	ChevronUpDownIcon,
	Cog8ToothIcon,
	CheckBadgeIcon,
} from "@heroicons/react/24/outline";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import DialogAdd from "./DialogAdd";
import {
	Card,
	Checkbox,
	Input,
	Typography,
	Button,
	CardBody,
	CardFooter,
	Chip,
	Avatar,
	IconButton,
	Tooltip,
} from "@material-tailwind/react";
import { stat } from "fs";
import { Number } from "mongoose";

const TABLE_HEAD = ["Todo", "Tag", "Status", "Priority", ""];

const statusTitle = ["Todo", "In Progress", "Completed"];
const statusColor = ["gray", "amber", "green"];
const statusIcon = [<MinusIcon />, <Cog8ToothIcon />, <CheckBadgeIcon />];

const priorityTitle = ["Low", "Medium", "High"];
const priorityColor = ["gray", "yellow", "red"];

interface todoItem {
	title: String;
	tag?: number;
	status: number;
	priority: number;
	done: Boolean;
}

export default function TodoTable({ list }) {
	const handleAdd = () => {};

	return (
		<Card shadow={false} className="h-full w-full">
			<CardBody className="overflow-scroll px-0">
				<table className="mt-4 w-full min-w-max table-auto text-left">
					<thead>
						<tr>
							{TABLE_HEAD.map((head, index) => (
								<th
									key={head}
									className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
								>
									<Typography
										variant="small"
										color="blue-gray"
										className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
									>
										{head}{" "}
										{index !== TABLE_HEAD.length - 1 && (
											<ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
										)}
									</Typography>
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{list.map(
							(
								{ title, tag, status, priority, done }: todoItem,
								index: number
							) => {
								const isLast = index === list.length - 1;
								const classes = isLast
									? "p-4"
									: "p-4 border-b border-blue-gray-50";

								return (
									<tr key={title}>
										{/* Todo and label */}
										<td className={classes}>
											<div className="flex items-center gap-3">
												<Checkbox
													defaultChecked={done || false}
													id={title}
													label={title}
													ripple={false}
													className="rounded-full w-5 h-5 hover:before:opacity-0 hover:scale-105 bg-blue-300/25 border-blue-500/50 transition-all"
												/>
											</div>
										</td>
										{/* Tag */}
										<td className={classes}>
											<div className="flex flex-row">
												<Chip
													variant="ghost"
													value={tag}
													size="sm"
													color="amber"
													className="rounded-full"
												/>
											</div>
										</td>
										{/* Status */}
										<td className={classes}>
											<div className="w-max">
												<Chip
													variant="gradient"
													size="sm"
													value={statusTitle[status]}
													color={statusColor[status]}
													icon={statusIcon[status]}
												/>
											</div>
										</td>
										{/* Priority */}
										<td className={classes}>
											<div className="flex">
												<Chip
													value={priorityTitle[priority]}
													color={priorityColor[priority]}
													variant="outlined"
												/>
											</div>
										</td>
										<td className={classes}>
											<Tooltip content="Edit todo">
												<IconButton variant="text" color="blue-gray">
													<PencilIcon className="h-4 w-4" />
												</IconButton>
											</Tooltip>
											<IconButton variant="text" color="blue-gray">
												<TrashIcon className="h-4 w-4" />
											</IconButton>
										</td>
									</tr>
								);
							}
						)}
					</tbody>
				</table>
			</CardBody>
			<CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
				<div className="flex gap-2">
					<DialogAdd />
				</div>
			</CardFooter>
		</Card>
	);
}
