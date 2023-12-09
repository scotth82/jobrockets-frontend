"use clients";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  PresentationChartBarIcon,
  ChartBarSquareIcon,
  UserPlusIcon,
  IdentificationIcon,
  FolderOpenIcon,
} from "@heroicons/react/24/outline";

const links = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: ChartBarSquareIcon,
  },
  {
    name: "Invite a Friend",
    href: "/dashboard/invite",
    icon: UserPlusIcon,
  },
  {
    name: "Contacts",
    href: "/dashboard/contacts",
    icon: IdentificationIcon,
  },
  {
    name: "My Resumes",
    href: "/dashboard/myfiles",
    icon: DocumentDuplicateIcon,
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm text-black dark:text-slate-100 dark:bg-neutral-900 dark:hover:bg-neutral-500 dark:hover:text-white font-medium hover:bg-gray-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-gray-100 dark:bg-neutral-500 text-blue-600":
                  pathname === link.href,
              }
            )}
          >
            <link.icon className="w-6" />
            <p className="md-block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
