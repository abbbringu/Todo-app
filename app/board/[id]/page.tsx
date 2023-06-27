"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import DashboardHeader from "@/components/dashboardHeader";

const board = ({ params }) => {
  const { data: session } = useSession();
  const [workspace, setWorkspace] = useState(null);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        `/api/users/${session?.user.id}/${params?.id}/workspace`
      );
      const data = await response.json();
      console.log(data[0]);
      setWorkspace(data[0]);
    };

    if (session?.user.id) fetchPosts();
  }, []);

  return (
    <div className="flex min-h-screen flex-col w-full items-center">
      <DashboardHeader title={workspace?.title || ""} />
      {params?.id}
    </div>
  );
};

export default board;
