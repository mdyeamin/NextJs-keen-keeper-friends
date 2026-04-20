"use client";
import React, { createContext, useEffect, useState } from "react";

export const FriendsContext = createContext();

const FriendsProvider = ({ children }) => {
  const [friendInfo, setFriendInfo] = useState([]);

  const [filterType, setFilterType] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    setFilterType(friendInfo);

    if (selectedFilter === "All") {
      setFilterType([...friendInfo]);
    } else {
      setFilterType(
        friendInfo.filter(
          (info) => info.status === selectedFilter.toLowerCase(),
        ),
      );
    }
  }, [friendInfo]);
  const data = {
    friendInfo,
    setFriendInfo,
    filterType,
    setFilterType,
    selectedFilter,
    setSelectedFilter,
    searchText,
    setSearchText,
  };

  return (
    <FriendsContext.Provider value={data}>{children}</FriendsContext.Provider>
  );
};

export default FriendsProvider;
