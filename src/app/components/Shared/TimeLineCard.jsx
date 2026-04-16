"use client";
import { FriendsContext } from "@/app/contexts/FriendsProvider";
import React, { useContext } from "react";
import { HiChevronDown } from "react-icons/hi";

const TimeLineCard = () => {
  const { friendInfo ,filterType, setFilterType,selectedFilter, setSelectedFilter } = useContext(FriendsContext);
 console.log(friendInfo,"friend");
 
  console.log(filterType);

  const handleTimelineByType = (e) => {
    const value = e.target.value;
    setSelectedFilter(value); 
    if (value === "All") {
      setFilterType([...friendInfo]);
    } else {
      setFilterType(
        friendInfo.filter((info) => info.status === value.toLowerCase())
      );
    }
    // if (e.target.value === "All") {
    //   setFilterType([...friendInfo]);
    // }
    // if (e.target.value === "Call") {
    //   const call = friendInfo.filter((info) => info.status === "call");
    //   console.log(call, "call log");
    //   setFilterType(call);
    // }
    // if (e.target.value === "Text") {
    //   const text = friendInfo.filter((info) => info.status === "text");
    //   console.log(text, "text log");
    //   setFilterType(text);
    // }
    // if (e.target.value === "Video") {
    //   const video = friendInfo.filter((info) => info.status === "video");
    //   console.log(video, "video log");
    //   setFilterType(video);
    // }
  };

  console.log(filterType);

  return (
    <>
      {
        <div className="div">
          {/* Filter Dropdown */}
          <div className="mb-8">
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

              {/* React Icon - Custom Arrow */}
              <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <HiChevronDown className="text-lg" />
              </span>
            </div>
          </div>
          <div className="space-y-4">
            {filterType.map((timeline, i) => (
              <div
                key={i}
                className="group relative flex items-center p-5 bg-white rounded-xl shadow-sm overflow-hidden border border-slate-100"
              >
                {/* Gravity Border SVG */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none rounded-xl"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <rect
                    x="0"
                    y="0"
                    width="100"
                    height="100"
                    rx="4"
                    fill="none"
                    stroke="url(#gravityGradient)"
                    strokeWidth="2"
                    strokeDasharray="20 80"
                    className="animate-gravity-border group-hover:pause"
                    style={{
                      vectorEffect: "non-scaling-stroke",
                    }}
                  />
                  <defs>
                    <linearGradient
                      id="gravityGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#059669" />
                      <stop offset="100%" stopColor="#34d399" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Content */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 flex items-center justify-center bg-slate-50 rounded-full text-2xl">
                  {timeline.icon}
                </div>

                <div className="relative z-10 ml-4 flex-grow">
                  <div className="flex flex-wrap items-center gap-1">
                    <span className="font-bold text-emerald-800 text-lg">
                      {timeline.status}
                    </span>
                    <span className="text-slate-500">With {timeline.name}</span>
                  </div>
                  <div className="text-slate-400 text-sm font-medium">
                    {timeline.fullDate}
                  </div>
                </div>

                {/* Custom Styles for Gravity Animation */}
                <style jsx global>{`
                  .animate-gravity-border {
                    animation: gravityMove 3s infinite;
                  }

                  @keyframes gravityMove {
                    /* Top Right to Top Left (আস্তে উঠবে) */
                    0% {
                      stroke-dashoffset: 0;
                      animation-timing-function: ease-out;
                    }

                    /* Left Side Down (জোরে পড়বে - Gravity) */
                    25% {
                      stroke-dashoffset: -25;
                      animation-timing-function: ease-in;
                    }

                    /* Bottom Left to Bottom Right (গতি বজায় থাকবে) */
                    50% {
                      stroke-dashoffset: -50;
                      animation-timing-function: ease-out;
                    }

                    /* Right Side Up (আস্তে উঠবে - Against Gravity) */
                    75% {
                      stroke-dashoffset: -75;
                      animation-timing-function: ease-in;
                    }

                    100% {
                      stroke-dashoffset: -100;
                    }
                  }

                  .group:hover .animate-gravity-border {
                    animation-direction: reverse;
                    stroke-color: #10b981;
                  }
                `}</style>
              </div>
            ))}
          </div>
        </div>
      }
    </>
  );
};

export default TimeLineCard;
