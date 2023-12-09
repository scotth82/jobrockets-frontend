"use client";
import Link from "next/link";
import NavLinks from "@/app/_components/navLinks";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { PowerIcon } from "@heroicons/react/24/outline";

export default function SideNav(session: any) {
  const user = session.session.user;

  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-center justify-center rounded-md bg-blue-white dark:bg-black text-black dark:text-white p-4 md:h-20"
        href="/dashboard"
      >
        <Image src="/logo.png" width="40" height="40" alt="logo" />
        <p className="font-bold text-xl">Job Rockets</p>
      </Link>

      <p className="text-center">{user?.name}</p>

      <button
        className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium  hover:text-blue-600 dark:hover:text-neutral-500 md:flex-none md:justify-center md:p-2 md:px-3"
        onClick={() => signOut({ callbackUrl: "/" })}
      >
        <PowerIcon className="w-6" />
        Logout
      </button>

      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 dark:bg-neutral-900 md:block"></div>
      </div>
    </div>
  );
}
