"use client";

import { useState, useEffect } from "react";
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
import Link from "next/link";

export default function Sidebar() {
  const test: Array<number> = [];
  const { data: session } = useSession();

  useEffect(() => {
    const fetchPosts = async () => {
      // const response = await fetch(`/api/users/${session?.user.id}/workspaces`);
      // const data = await response.json();
      // setWorkspaces(data);
    };
    // if (session?.user.id) fetchPosts();
  }, []);
  const [workspaces, setWorkspaces] = useState([]);
  return (
    <Card className="fixed top-4 left-4 h-[calc(100vh-2rem)] w-full max-w-[17rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <Link href="/">
        <div className="mb-2 p-4 cursor-pointer" onClick={() => {}}>
          <Typography variant="h5" color="blue-gray">
            Uvumi TODO
          </Typography>
        </div>
      </Link>
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
        {workspaces.map((e: number) => (
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
            if (workspaces.length) {
              index = workspaces[workspaces.length - 1] + 1;
            }
            setWorkspace([...workspaces, index]);
          }}
        >
          + Add workspace
        </ListItem>
      </List>
    </Card>
  );
}
