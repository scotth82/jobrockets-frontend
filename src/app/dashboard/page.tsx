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
    <main className="flex w-screen">
      <div className="text-center w-10/100 justify-center p-5 bg-indigo-500 dark:bg-slate-800">
        <SideNav session={session} />
      </div>
      <div className="text-center items-center w-screen p-10">
        Welcome to your {session?.user?.name} Dashboard!
      </div>
    </main>
  );
}
