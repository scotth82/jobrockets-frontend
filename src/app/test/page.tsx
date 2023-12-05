"use client";
import SideNav from "../_components/sideNav";
import { useSession } from "next-auth/react";

export default function TestPage() {
  const { data: session, status } = useSession();

  if (session && status === "authenticated") {
    // redirect("/test");
    console.log(session);
    console.log(session.user?.email);
  }

  return (
    <main className="p-10 flex w-full gap-10">
      <div>
        <SideNav />
      </div>
      <div className="text-center justfiy-center items-center">
        Welcome {session?.user?.name!} TEST!
      </div>
    </main>
  );
}
