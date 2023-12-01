import SideNav from "../_components/sidenav";

export default function Page() {
  return (
    <main className="flex w-screen">
      <div className="text-center w-10/100 justify-center p-5 bg-indigo-500 dark:bg-slate-800">
        <SideNav />
      </div>
      <div className="text-center items-center w-screen p-10">
        Welcome to your Dashboard!
      </div>
    </main>
  );
}
