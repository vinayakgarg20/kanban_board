import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import { GroupTickets } from "../../Components/GroupTickets";
import { Navbar } from "../../Components/Navbar";
import { useAppState } from "../../Components/StateContext";

export const Board = () => {
  // State to store tickets and users data
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  
  // Get selected options from the application state using the context
  const { selectedOptions } = useAppState();
  const grouping = selectedOptions.grouping;
  const ordering = selectedOptions.ordering;

  // Create an object of users with userId as key value
  let userInfo = {};

  // Group tickets according to different categories
  let ticketInfo = {};

  // Fetching data from an API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.quicksell.co/v1/internal/frontend-assignment"
        );
        setTickets(response.data.tickets);
        setUsers(response.data.users);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Sorting the tickets based on the desired ordering.
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

  // Sorting the tickets based on the desired grouping.
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

  // Map user data to a user ID
  const userMap = () => {
    let userMapping = {};
    users.forEach((user) => {
      userMapping[user.id] = user;
    });
    return userMapping;
  };

  // Group and sort the tickets and user information
  ticketInfo = ticketsGrouping();
  userInfo = userMap();

  return (
    <div className="board-container">
      {/* Render the Navbar component */}
      <Navbar />
      <div className="ticket-orientation">
        {/* Render the GroupTickets component with grouped and sorted tickets */}
        <GroupTickets
          tickets={ticketInfo}
          userInfo={userInfo}
          groupingLabel={grouping}
        />
      </div>
    </div>
  );
};
