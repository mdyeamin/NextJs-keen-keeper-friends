"use client";
import { FriendsContext } from "@/app/contexts/FriendsProvider";
import React, { useContext } from "react";
import { FiMessageSquare, FiPhone, FiVideo } from "react-icons/fi";
import { toast } from "react-toastify";

const QuickButton = ({ name }) => {
  const { friendInfo, setFriendInfo } = useContext(FriendsContext);
  console.log(friendInfo);

  const handleCall = () => {
    const today = new Date();
    const fullDate = today.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const info = {
      status: "call",
      icon: <FiPhone className="text-xl" />,
      name,
      fullDate,
    };
    const isExistFriend = friendInfo.find((a) => a.status == "call");
    const isExistFriendWithName = friendInfo.find((a) => a.name == name);

    if (!isExistFriend || !isExistFriendWithName) {
      setFriendInfo([...friendInfo, info]);
      toast.success(`${name} added to the timeline`, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        icon: <FiPhone className="text-xl" />,
      });
    } else {
      toast.warning(`${name} already added in the timeline`, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        icon: <FiPhone className="text-xl" />,
      });
    }
  };
  const handleText = () => {
    const today = new Date();
    const fullDate = today.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
    const info = {
      status: "text",
      icon: <FiMessageSquare className="text-xl" />,
      name,
      fullDate,
    };
    const isExistFriend = friendInfo.find((a) => a.status == "text");
    const isExistFriendWithName = friendInfo.find((a) => a.name == name);
    if (!isExistFriend || !isExistFriendWithName) {
      setFriendInfo([...friendInfo, info]);
      toast.success(`${name} added to the timeline`, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        icon: <FiMessageSquare className="text-xl" />,
      });
    } else {
      toast.warning(`${name} already added in the timeline`, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        icon: <FiMessageSquare className="text-xl" />,
      });
    }
  };
  const handleVideo = () => {
    const today = new Date();
    const fullDate = today.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
    const info = {
      status: "video",
      icon: <FiVideo className="text-xl" />,
      name,
      fullDate,
    };
    const isExistFriend = friendInfo.find((a) => a.status == "video");
    const isExistFriendWithName = friendInfo.find((a) => a.name == name);
    if (!isExistFriend || !isExistFriendWithName) {
      setFriendInfo([...friendInfo, info]);
      toast.success(`${name} added to the timeline`, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        icon: <FiVideo className="text-xl" />,
      });
    } else {
      toast.warning(`${name} already added in the timeline`, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        icon: <FiVideo className="text-xl" />,
      });
    }
  };
  console.log(friendInfo, "info");

  return (
    <>
      <button
        onClick={handleCall}
        className="bg-[#f8fafc] hover:bg-slate-100 border border-slate-100 p-6 rounded-lg flex flex-col items-center gap-3 transition-all group"
      >
        <div className="p-3 bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform">
          <FiPhone className="text-xl" />
        </div>
        <span className="font-semibold text-sm">Call</span>
      </button>

      <button
        onClick={handleText}
        className="bg-[#f8fafc] hover:bg-slate-100 border border-slate-100 p-6 rounded-lg flex flex-col items-center gap-3 transition-all group"
      >
        <div className="p-3 bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform">
          <FiMessageSquare className="text-xl" />
        </div>
        <span className="font-semibold text-sm">Text</span>
      </button>

      <button
        onClick={handleVideo}
        className="bg-[#f8fafc] hover:bg-slate-100 border border-slate-100 p-6 rounded-lg flex flex-col items-center gap-3 transition-all group"
      >
        <div className="p-3 bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform">
          <FiVideo className="text-xl" />
        </div>
        <span className="font-semibold text-sm">Video</span>
      </button>
    </>
  );
};

export default QuickButton;
