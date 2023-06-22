"use client";
import React from "react";
import { useState } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

export default function Sidebar() {
  const test: Array<number> = [];

  const [workspace, setWorkspace] = useState(test);
  return (
    <Card className="fixed top-4 left-4 h-[calc(100vh-2rem)] w-full max-w-[17rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Uvumi
        </Typography>
      </div>
      <List>
        {workspace.map((e: number) => (
          <ListItem key={e}>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5 blue-400" />
            </ListItemPrefix>
            Workspace {e}
          </ListItem>
        ))}
        <ListItem
          onClick={() => {
            let index = 0;
            if (workspace.length) {
              index = workspace[workspace.length - 1] + 1;
            }
            setWorkspace([...workspace, index]);
          }}
        >
          + Add workspace
        </ListItem>
      </List>
    </Card>
  );
}
