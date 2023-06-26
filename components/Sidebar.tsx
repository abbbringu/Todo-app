"use client";

import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  ListItemSuffix,
  IconButton,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  UserCircleIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import Link from "next/link";

export default function Sidebar() {
  const test: Array<number> = [];
  const { data: session } = useSession();

  const createWorkspace = async () => {
    // setIsSubmitting(true);
    const newItem = [
      {
        title: "New workspace",
        userId: session?.user?.id,
        color: "cyan",
        list: [],
      },
    ];
    try {
      const response = await fetch("/api/workspace/new", {
        method: "POST",
        body: JSON.stringify(newItem[0]),
      });
      const fetchPosts = async () => {
        const response = await fetch(
          `/api/users/${session?.user?.id}/workspaces`
        );
        const data = await response.json();
        setWorkspaces(data);
      };
      if (session?.user) fetchPosts();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        `/api/users/${session?.user?.id}/workspaces`
      );
      const data = await response.json();
      setWorkspaces(data);
    };
    if (session?.user) fetchPosts();
  }, [session?.user.id]);
  const [updateWorkspace, setUpdateWorkspace] = useState(false);
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
        {workspaces.map((e: any) => (
          <ListItem key={e._id} className="group">
            <ListItemPrefix>
              <div className={`w-2 h-2 bg-${e.color}-800 rounded-full`} />
            </ListItemPrefix>
            {e.title}
          </ListItem>
        ))}
        <ListItem onClick={createWorkspace}>+ Add workspace</ListItem>
      </List>
    </Card>
  );
}
