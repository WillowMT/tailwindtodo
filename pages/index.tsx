import List from "@/components/List";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [dark, setDark] = useState(false);
  useEffect(() => {
    if (dark) {
      document.body.style.backgroundColor = "#1e293b";
    } else {
      document.body.style.backgroundColor = "white";
    }
  }, [dark]);
  return (
    <>
      <nav
        className={`${
          dark && "bg-slate-800"
        } flex justify-between items-center p-2 shadow-md mb-6`}
      >
        <button className=" ml-2" onClick={() => setDark((pre) => !pre)}>
          {dark ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="transition-all rotate-[360deg]"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className=" transition-all rotate-180"
            >
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          )}
        </button>
        <h1 className={`${dark && "text-white"} text-2xl`}>Todo</h1>
        <button className=" bg-green-500 hover:bg-green-600 px-3 py-1.5 rounded-md text-white">
          Login
        </button>
      </nav>
      <main className="w-[min(90%,500px)] mx-auto">
        <div className="rounded-md p-4 shadow-md border-[1px] border-slate-100">
          <div className="flex flex-col">
            <input
              className={`${
                dark ? "bg-slate-800 text-white" : "bg-slate-100"
              } mx-4 my-1 p-2 rounded-md border-[1px]`}
              type="text"
              placeholder="Title"
            />
            <input
              className={`${
                dark ? "bg-slate-800 text-white" : "bg-slate-100"
              } mx-4 my-1 p-2 rounded-md border-[1px]`}
              type="text"
              placeholder="Description"
            />

            <button
              className={`${
                dark
                  ? "bg-purple-700 hover:bg-purple-800"
                  : " bg-purple-500 hover:bg-purple-600"
              } mx-4 my-2 h-10 rounded-md text-white shadow-md`}
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
          className={`${
            dark && "text-white"
          } my-4 p-4 rounded-md shadow-md border-[1px]`}
          title="Test"
          desc="some testing"
        />
      </main>
    </>
  );
}
