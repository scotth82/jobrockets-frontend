import Link from "next/link";
import NavLinks from "@/app/_components/navLinks";

export default function TopNav() {
  return (
    <ul className="flex space-x-8">
      <li>
        <Link href="">
          <button className="rounded-full hover:text-sky-600">About</button>
        </Link>
      </li>
      <li>
        <Link href="">
          <button className="rounded-full hover:text-sky-600">Product</button>
        </Link>
      </li>
      <li>
        <Link href="">
          <button className="rounded-full hover:text-sky-600">Price</button>
        </Link>
      </li>
    </ul>
  );
}
