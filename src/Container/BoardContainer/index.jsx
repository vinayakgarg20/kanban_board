import React, { useState, useEffect } from "react";
import axios from "axios";

import { GroupTickets } from "../GroupTickets";
import { GroupingData } from "../../Components/GroupingData";

import Dropdown from "../../Components/DropDown";
import { useAppState } from "../../Components/StateContext";
export const Board = () => {
  const [tickets, setTickets] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const { selectedOptions } = useAppState();
  const grouping = selectedOptions.grouping;
  const ordering = selectedOptions.ordering;

  // fetching data from api
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.quicksell.co/v1/internal/frontend-assignment"
        );
        setTickets(response.data.tickets);
        setUserInfo(response.data.users);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Sorting the tickets on the basis of desired ordering.
  const ticketsSorting = (tickets) => {
    Object.keys(tickets).forEach((key) => {
      tickets[key] = tickets[key].sort((a, b) => {
        if (ordering === "priority") {
          return b.priority - a.priority;
        } else {
          return a.title.localeCompare(b.title);
        }
      });
    });
  };

  // Sorting the tickets on the basis of desired grouping.
  const ticketsGrouping = () => {
    let requiredTickets = {};
    tickets.forEach((ticket) => {
      if (grouping === "user") {
        requiredTickets[ticket.userId] = requiredTickets[ticket.userId] || [];
        requiredTickets[ticket.userId].push(ticket);
      } else if (grouping === "priority") {
        requiredTickets[ticket.priority] =
          requiredTickets[ticket.priority] || [];
        requiredTickets[ticket.priority].push(ticket);
      } else {
        requiredTickets[ticket.status] = requiredTickets[ticket.status] || [];
        requiredTickets[ticket.status].push(ticket);
      }
    });
    ticketsSorting(requiredTickets);
    console.log(requiredTickets, "🥺😊 ");
    return requiredTickets;
  };
  const data = ticketsGrouping();

  return (
    <>
      <Dropdown />
      <GroupTickets
        tickets={data}
        groupingData={GroupingData}
        userInfo={userInfo}
        groupingLabel={grouping}
      />
    </>
  );
};
