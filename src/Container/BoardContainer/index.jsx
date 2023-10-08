import React, { useState, useEffect } from "react";
import axios from "axios";
import { GroupTicketByUser } from "../GroupTicketByUser";
import { GroupTicketByStatus } from "../GroupTicketByStatus";
import { GroupTicketByPriority } from "../GroupTicketByPriority";

// 4 - Urgent
// 3 - High
// 2 - Medium
// 1 - Low
// 0 - No priority
const priorityLabels = [
    {key:0, label:"No priority"},
    {key:1, label:"Low"},
    {key:2, label:"Medium"},
    {key:3, label:"High"},
    {key:4, label:"Urgent"}
];
export const Board = () => {
  const [tickets, setTickets] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  // fetching data from api
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.quicksell.co/v1/internal/frontend-assignment"
        );
        setTickets(response.data.tickets);
        setUserInfo(response.data.users);
        console.log(userInfo);
        setIsDataLoaded(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <GroupTicketByPriority
        tickets={tickets}
        priorityLabels={priorityLabels}
        userInfo={userInfo}
      />
      <GroupTicketByUser tickets={tickets} userInfo={userInfo} />
      <GroupTicketByStatus tickets={tickets} userInfo={userInfo} />
    </>
  );
};
