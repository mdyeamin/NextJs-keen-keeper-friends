"use client";
import { FriendsContext } from "@/app/contexts/FriendsProvider";
import Link from "next/link";
import { useContext } from "react";
import {
  HiChevronDown,
  HiOutlineChatAlt2,
  HiOutlineSearch,
} from "react-icons/hi";

const TimeLineCard = () => {
  const {
    friendInfo,
    filterType,
    setFilterType,
    selectedFilter,
    setSelectedFilter,
  } = useContext(FriendsContext);

  const handleTimelineByType = (e) => {
    const value = e.target.value;
    setSelectedFilter(value);
    if (value === "All") {
      setFilterType([...friendInfo]);
    } else {
      setFilterType(
        friendInfo.filter((info) => info.status === value.toLowerCase()),
      );
    }
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    // console.log(value);
    if(value.length>1){

      const searchByName = friendInfo.filter((search) =>
        search.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilterType(searchByName)
      console.log(searchByName);
    }else{
      setFilterType([...friendInfo])
    }
  };

  return (
    <>
      {
        <div className="div">
          {/* Filter Dropdown */}
          <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Left Side: Filter Dropdown */}
            <div className="relative w-full md:w-64">
              <select
                value={selectedFilter}
                onChange={handleTimelineByType}
                className="w-full p-3 bg-white border border-slate-200 rounded-xl text-slate-700 font-medium text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-emerald-500/10 focus:border-emerald-500 shadow-sm transition-all duration-300 cursor-pointer"
              >
                <option>All</option>
                <option>Call</option>
                <option>Text</option>
                <option>Video</option>
              </select>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <HiChevronDown className="text-lg" />
              </span>
            </div>

            {/* Right Side: Search Box */}
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search by name..."
                onChange={handleSearch}
                className="w-full p-3 pl-10 bg-white border border-slate-200 rounded-xl text-slate-700 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/10 focus:border-emerald-500 shadow-sm transition-all duration-300"
              />
              {/* Search Icon */}
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                <HiOutlineSearch className="text-lg" />
              </span>
            </div>
          </div>
          {filterType.length < 1 ? (
            <div className="w-full flex flex-col items-center justify-center p-16 bg-white rounded-xl border border-dashed border-slate-200 shadow-sm">
              <div className="flex items-center justify-center w-20 h-20 bg-emerald-50 rounded-full mb-5 transition-transform hover:scale-110 duration-300">
                <HiOutlineChatAlt2 className="text-emerald-600 text-4xl" />
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  No interactions yet
                </h3>
                <p className="text-slate-500 max-w-[280px] leading-relaxed">
                  Your call, text, and video history will appear here once you
                  start communicating.
                </p>
              </div>

              <Link
                href="/"
                className="mt-6 text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors"
              >
                Start a conversation →
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {filterType.map((timeline, i) => (
                <div
                  key={i}
                  className="group relative flex items-center p-5 bg-white border border-slate-100 rounded-2xl shadow-sm transition-all duration-500 hover:shadow-xl overflow-hidden cursor-pointer"
                >
                  {/* Left Accent Bar - Dynamic Color */}
                  <div
                    className="absolute left-0 top-0 h-full w-1.5 z-20 transition-all duration-300 group-hover:w-2"
                    style={{ backgroundColor: timeline.fill }}
                  ></div>

                  {/* Right Side Rounded Shape - Dynamic Glow */}
                  <div
                    className="absolute -right-12 -top-12 w-32 h-32 rounded-full transition-all duration-700 ease-in-out group-hover:scale-[10] group-hover:-translate-x-full z-0 opacity-10 group-hover:opacity-5"
                    style={{ backgroundColor: timeline.fill }}
                  ></div>

                  {/* Icon Container - Dynamic Light Background */}
                  <div
                    className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center mr-4 text-2xl transition-all duration-500 group-hover:bg-white group-hover:shadow-md group-hover:scale-110"
                    style={{
                      backgroundColor: `${timeline.fill}15`, // ১৬% ট্রান্সপারেন্সি যোগ করা হয়েছে
                      color: timeline.fill,
                    }}
                  >
                    {timeline.icon}
                  </div>

                  {/* Content Area */}
                  <div className="relative z-10 flex flex-col flex-grow">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-bold text-slate-800 text-lg transition-colors duration-300 group-hover:text-black">
                        {timeline.status}
                      </span>
                      <span className="text-slate-500 text-sm font-medium">
                        • With {timeline.name}
                      </span>
                    </div>

                    <div className="text-slate-400 text-xs font-semibold mt-1 flex items-center gap-1 uppercase tracking-wider">
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: timeline.fill }}
                      ></span>
                      {timeline.fullDate}
                    </div>
                  </div>

                  {/* Hover Arrow - Dynamic Color */}
                  <div
                    className="relative z-10 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                    style={{ color: timeline.fill }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      }
    </>
  );
};

export default TimeLineCard;
