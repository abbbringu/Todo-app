import {
	Menu,
	MenuHandler,
	MenuList,
	MenuItem,
	Input,
	IconButton,
	Button,
} from "@material-tailwind/react";
import { ArrowLeftIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";

export default function SettingsIconButton() {
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
				<Input variant="standard" label="Workspace Name" />
				<MenuItem>
					<Menu placement="left-start" offset={15}>
						<MenuHandler>
							<MenuItem>Color</MenuItem>
						</MenuHandler>
						<MenuList>
							<MenuItem>Color 1</MenuItem>
							<MenuItem>Color 2</MenuItem>
							<MenuItem>Color 3</MenuItem>
						</MenuList>
					</Menu>
				</MenuItem>
				<MenuItem>
					<Button fullWidth>Save</Button>
				</MenuItem>
			</MenuList>
		</Menu>
	);
}
