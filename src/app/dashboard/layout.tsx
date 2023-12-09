"use client";
import SideNav from "@/app/_components/sideNav";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    console.log("Authentication in progress...loading...");
    return null;
  }

  if (status === "unauthenticated") {
    console.log("User is not authenticated. Redirect to SignIn page.");
    redirect("/auth/signin");
  }

  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav session={session} />
      </div>
      <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
