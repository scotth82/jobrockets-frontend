"use client";

import Link from "next/link";
import Image from "next/image";
import { signIn } from "next-auth/react";

export default function SignInPage() {
  return (
    <main>
      <header>
        <Link href="/" className="flex justify-start items-center px-20 py-10">
          <Image src="/logo.png" width="40" height="40" alt="logo" />
          <p className="font-bold text-xl">Job Rockets</p>
        </Link>
      </header>

      <div className="flex justify-center py-5">
        <p className="font-bold text-4xl">Launch Job Rockets!</p>
        <br />
      </div>

      <div className="flex justify-center gap-2 py-2 items-center">
        <p className="text-slate-500 dark:text-slate-300">
          New to Job Rockets?
        </p>
        <Link
          href="/auth/signup"
          className="rounded-full mx-50 py-1 hover:text-sky-600"
        >
          Sign up for free
        </Link>
      </div>

      <div className="flex justify-center mt-12">
        <button
          onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          className="flex justify-center gap-4 items-center shadow-sm 
             bg-neutral-100 hover:bg-neutral-200 px-12 py-2 rounded-md border-neutral-300 border dark:bg-neutral-700 dark:hover:bg-neutral-600"
        >
          <Image
            src="/google_logo.png"
            height="30"
            width="30"
            alt="google logo"
          />
          <span>Sign in with Google</span>
        </button>
      </div>

      <div className="flex justify-center py-5">
        <button
          className="flex justify-center gap-4 items-center shadow-sm 
             bg-neutral-100 hover:bg-neutral-200 px-10 py-2 rounded-md border-neutral-300 border dark:bg-neutral-700 dark:hover:bg-neutral-600"
        >
          <Image
            src="/microsoft_logo.png"
            height="30"
            width="30"
            alt="msft logo"
          />
          <span>Sign in with Microsoft</span>
        </button>
      </div>
    </main>
  );
}
