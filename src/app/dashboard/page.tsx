"use client";
import SideNav from "../_components/sideNav";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from "@heroicons/react/24/outline";

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
    <main>
      <h1 className={`mb-4 text-xl md:text-2xl`}>Dashboard</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl bg-gray-50 dark:bg-neutral-900 p-2 shadow-sm">
          <div className="flex p-4">
            {<ClockIcon className="h-5 w-5 text-gray-700 dark:text-white" />}
            <h3 className="ml-2 text-sm font-medium">Jobs To Apply</h3>
          </div>
          <p
            className={`
          truncate rounded-xl bg-white dark:bg-neutral-500 px-4 py-5 text-center text-2xl`}
          >
            10
          </p>
        </div>

        <div className="rounded-xl bg-gray-50 dark:bg-neutral-900 p-2 shadow-sm">
          <div className="flex p-4">
            {<ClockIcon className="h-5 w-5 text-gray-700 dark:text-white" />}
            <h3 className="ml-2 text-sm font-medium">Job Applied</h3>
          </div>
          <p
            className={`
          truncate rounded-xl bg-white dark:bg-neutral-500 px-4 py-5 text-center text-2xl`}
          >
            98
          </p>
        </div>

        <div className="rounded-xl bg-gray-50 dark:bg-neutral-900 p-2 shadow-sm">
          <div className="flex p-4">
            {<ClockIcon className="h-5 w-5 text-gray-700 dark:text-white" />}
            <h3 className="ml-2 text-sm font-medium">Upcoming Interviews</h3>
          </div>
          <p
            className={`
          truncate rounded-xl bg-white dark:bg-neutral-500 px-4 py-5 text-center text-2xl`}
          >
            40
          </p>
        </div>

        <div className="rounded-xl bg-gray-50 dark:bg-neutral-900 p-2 shadow-sm">
          <div className="flex p-4">
            {<ClockIcon className="h-5 w-5 text-gray-700 dark:text-white" />}
            <h3 className="ml-2 text-sm font-medium">Dead Jobs</h3>
          </div>
          <p
            className={`
          truncate rounded-xl bg-white dark:bg-neutral-500 px-4 py-5 text-center text-2xl`}
          >
            20
          </p>
        </div>
      </div>
    </main>
  );
}
