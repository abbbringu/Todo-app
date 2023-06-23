"use client";

import { useState } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

export default function Sidebar() {
  const test: Array<number> = [];
  const { data: session } = useSession();

  const [workspace, setWorkspace] = useState(test);
  return (
    <Card className="fixed top-4 left-4 h-[calc(100vh-2rem)] w-full max-w-[17rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Uvumi TODO
        </Typography>
      </div>
      <List>
        {/* Login / Account section */}
        {session?.user ? (
          <ListItem onClick={() => signOut()}>
            <ListItemPrefix>
              <Avatar
                variant="circular"
                alt="candice"
                src={session?.user.image || ""}
              />
            </ListItemPrefix>
            {session?.user.name}
          </ListItem>
        ) : (
          <ListItem onClick={() => signIn()}>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Login
          </ListItem>
        )}

        <hr className="my-2 border-blue-gray-100" />
        {/* Render all workspaces */}
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
