"use client";
import { useContext } from "react";
import { FriendsContext } from "../contexts/FriendsProvider";

const States = () => {
  const { filterType } = useContext(FriendsContext);

  const call = filterType.filter((call) => call.status === "call");
  const text = filterType.filter((call) => call.status === "text");
  const video = filterType.filter((call) => call.status === "video");
//   console.log(call.length, "call data");
  // console.log(text, "text data");
  // console.log(video, "video data");

  const cartData = {
    call: call.length,
    text: text.length,
    video: video.length,
  };
  console.log(cartData);

  return (
    <div>
      <h2 className="text-3xl">States</h2>
    </div>
  );
};

export default States;
