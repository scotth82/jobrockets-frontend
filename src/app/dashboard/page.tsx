"use client";
import SideNav from "../_components/sideNav";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
  RocketLaunchIcon,
  TrophyIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

export default function DashboardPage() {
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

  let data = [
    {
      name: "Job 1",
      total: 10,
    },
    {
      name: "Job 2",
      total: 12,
    },
    {
      name: "Job 3",
      total: 3,
    },
    {
      name: "Job 4",
      total: 40,
    },
    {
      name: "Job 5",
      total: 23,
    },
  ];

  data.sort((a, b) => {
    return b.total - a.total;
  });

  let strokeColor = "black";
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    strokeColor = "white";
  }
  return (
    <main>
      <h1 className={`mb-4 text-xl md:text-2xl`}>Dashboard</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl bg-gray-50 dark:bg-neutral-900 p-2 shadow-sm">
          <div className="flex p-4">
            {
              <RocketLaunchIcon className="h-5 w-5 text-gray-700 dark:text-white" />
            }
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
            {<TrophyIcon className="h-5 w-5 text-gray-700 dark:text-white" />}
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
            {<XMarkIcon className="h-5 w-5 text-gray-700 dark:text-white" />}
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

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <div className="py-10 w-full md:col-span-4">
          <h3 className={`mb-4 text-xl md:text-xl`}>
            Days Since Last Follow Up
          </h3>
          <ResponsiveContainer
            width="100%"
            height={350}
            className="rounded-xl bg-gray-50 dark:bg-neutral-900 p-2 shadow-sm"
          >
            <BarChart
              data={data}
              layout="vertical"
              className="text-black dark:stroke-white"
            >
              <XAxis
                className="text-black dark:text-white"
                // dataKey="name"
                stroke={strokeColor}
                type="number"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value} Days`}
              />
              <YAxis
                type="category"
                dataKey="name"
                stroke={strokeColor}
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </main>
  );
}
