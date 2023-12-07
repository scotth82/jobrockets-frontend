import Image from "next/image";
export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="flex h-screen items-center justify-center text-2xl">
      <Image src="/logo.png" width="128" height="128" alt="loading..." />
      <p>Loading......</p>
    </div>
  );
}
