"use client";
import { FriendsContext } from "@/app/contexts/FriendsProvider";
import React, { useContext } from "react";

const TimeLineCard = () => {
  const { friendInfo } = useContext(FriendsContext);
  console.log(friendInfo.length);

  return (
    <>
      {friendInfo.map((timeline, i) => {
        console.log(timeline.fullDate);

        return (
          <div
            key={i}
            className="flex items-center p-5 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-slate-50 rounded-full text-2xl">
              {timeline.icon}
            </div>

            <div className="ml-4 flex-grow">
              <div className="flex flex-wrap items-center gap-1">
                <span className="font-bold text-emerald-800 text-lg">{timeline.status}</span>
                <span className="text-slate-500">With {timeline.name}</span>
              </div>
              <div className="text-slate-400 text-sm font-medium">{timeline.fullDate}</div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TimeLineCard;
