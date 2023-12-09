import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <main>
      <form className="flex flex-col items-center gap-5 ">
        <div className="p-10 text-2xl font-bold">
          Please invite a friend to Job Rockets!
        </div>

        <div className="space-x-5 border-neutral-800 justify-right w-50">
          <label>Name</label>
          <input
            className="border border-neutral-800 px-1 dark:text-black"
            type="text"
            name="name"
            size={25}
          ></input>
        </div>

        <div className="space-x-6 justify-between border-neutral-800">
          <label>Email</label>
          <input
            className="border border-neutral-800 px-1 dark:text-black"
            type="text"
            name="email"
            size={25}
          ></input>
        </div>

        <button
          className="flex gap-2 w-40 justify-center items-center rounded-md p-2 bg-neutral-200 hover:bg-neutral-300 dark:text-black"
          type="submit"
        >
          Send Invite
          <PaperAirplaneIcon className="w-6" />
        </button>
      </form>
    </main>
  );
}
