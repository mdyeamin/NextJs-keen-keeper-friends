'use client'
import React, { createContext, useEffect, useState } from "react";

export const FriendsContext = createContext();

const FriendsProvider = ({ children }) => {
  const [friendInfo, setFriendInfo] = useState([]);
  
 const [filterType, setFilterType] = useState([]);
 const [selectedFilter, setSelectedFilter] = useState("All");
useEffect(() => {
    setFilterType(friendInfo);
    // friendInfo change হলে current filter অনুযায়ী re-filter করো
    if (selectedFilter === "All") {
      setFilterType([...friendInfo]);
    } else {
      setFilterType(
        friendInfo.filter(
          (info) => info.status === selectedFilter.toLowerCase()
        )
      );
    }
  }, [friendInfo]);
  const data = {
    friendInfo,
    setFriendInfo,
    filterType,
    setFilterType,
     selectedFilter,      // export করো
    setSelectedFilter, 
  };

  return (
      <FriendsContext.Provider value={data}>
      {children}
      </FriendsContext.Provider>
  );
};

export default FriendsProvider;
