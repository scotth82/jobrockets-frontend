"use client";
import SideNav from "../_components/sideNav";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Page() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    console.log("Authentication in progress...loading...");
    return null;
  }

  if (status === "unauthenticated") {
    console.log("User is not authenticated. Redirect to SignIn page.");
    redirect("/auth/signin");
  }

  console.log("User is authenticated.");

  return (
    <main className="flex">
      <div className="text-center items-center w-screen p-10">
        Welcome to your {session?.user?.name} Dashboard!
      </div>
    </main>
  );
}
