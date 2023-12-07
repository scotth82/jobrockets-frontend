"use client";
import Link from "next/link";
import NavLinks from "@/app/_components/navLinks";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function SideNav(session: any) {
  const user = session.session.user;
  return (
    <>
      <p>This is the SideNav</p>

      <Image src={user?.image!} width="100" height="100" alt="profile" />
      <p>Logo/ProfilePic</p>
      <button
        className="rounded-full mx-50 py-1 hover:text-sky-600"
        onClick={() => signOut({ callbackUrl: "/" })}
      >
        Logout
      </button>
      <NavLinks />
    </>
  );
}
