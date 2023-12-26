"use client";
import Datepicker from "react-tailwindcss-datepicker";
import React from "react";
import { useRouter } from "next/navigation";
export default function Searchbar() {
  const [startDate, setStartDate] = React.useState("17-09-2023");
  const [endDate, setEndDate] = React.useState("17-10-2024");
  const [location, setLocation] = React.useState("");
  const [state, setState] = React.useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);
  const router = useRouter();

  function handleSubmit() {
    if (location && location.length !== 0) {
      router.push(
        `/Hotels?location=${location}&startDate=${startDate}&endDate=${endDate}`
      );
    }
  }

  return (
    <div>
      <div className="relative mt-2 rounded-3xl pl-14 shadow-sm flex items-center border">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>

        <div className="relative text-gray-600 items-center flex">
          <input
            type="search"
            name="serch"
            placeholder="Search"
            className="bg-white h-10 px-5 pr-10 border-0 focus:outline-none"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          {/* className="bg-white h-10 px-5 pr-10 rounded-full border-0 text-sm ring-1 ring-inset ring-gray-300 focus:outline-none" */}
          <button className="p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
              />
            </svg>
          </button>
          

          <button onClick={handleSubmit} className="p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
