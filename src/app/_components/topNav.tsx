import Link from "next/link";
import NavLinks from "@/app/_components/navLinks";

export default function TopNav() {
  return (
    <>
      <Link href="/auth/signin">
        <button className="rounded-full hover:text-sky-600">About</button>
      </Link>
      <Link href="/auth/signin">
        <button className="rounded-full hover:text-sky-600">Product</button>
      </Link>
      <Link href="/auth/signin">
        <button className="rounded-full hover:text-sky-600">Price</button>
      </Link>
    </>
  );
}
