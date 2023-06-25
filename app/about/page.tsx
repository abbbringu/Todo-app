"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default async function Page() {
  return <p>You are not authorized to view this page! </p>;
}
