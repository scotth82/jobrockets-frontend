import SideNav from "../_components/sideNav";

export default function Page() {
  return (
    <main className="flex w-full md:w-64">
      <div>
        <SideNav />
      </div>
      <div className="text-center items-center">Welcome TEST!</div>
    </main>
  );
}
