import List from "@/components/List";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <nav className=" flex justify-between items-center p-2 shadow-md mb-6 dark:bg-black">
        <svg
          className="ml-4 fill-purple-400 w-7 h-7 cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path d="M184.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L39 113c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L39 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM256 96c0-17.7 14.3-32 32-32H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H288c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H288c-17.7 0-32-14.3-32-32zM192 416c0-17.7 14.3-32 32-32H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32zM80 464c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48z" />
        </svg>
        <h1 className="text-2xl">Todo</h1>
        <button className=" bg-green-500 hover:bg-green-600 px-3 py-1.5 rounded-md text-white">
          Login
        </button>
      </nav>
      <main className=" w-[90%] md:w-1/2 xl:w-1/3 mx-auto">
        <div className="rounded-md p-4 shadow-md border-[1px] border-slate-100">
          <div className="flex flex-col">
            <input
              className="mx-4 my-1 p-2 bg-slate-100 rounded-md border-[1px]"
              type="text"
              placeholder="Title"
            />
            <input
              className="mx-4 my-1 p-2 bg-slate-100 rounded-md border-[1px]"
              type="text"
              placeholder="Description"
            />
            <button
              className=" bg-purple-500 hover:bg-purple-600 mx-4 my-2 h-10 rounded-md text-white shadow-md"
              onClick={() => setLoading((pre) => !pre)}
            >
              {loading ? (
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 m-auto text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="white"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="blue"
                  />
                </svg>
              ) : (
                <span>Button</span>
              )}
            </button>
          </div>
        </div>
        <List
          className=" my-4 p-4 rounded-md shadow-md border-[1px]"
          title="Test"
          desc="some testing"
        />
      </main>
    </>
  );
}
