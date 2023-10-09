import FeatureCard from "../../Components/FeatureCard";
import {useState} from "react";
export const GroupTickets = ({
  tickets,
  userInfo,
  groupingData,
  groupingLabel,
}) => {
  const PriorityOrder = groupingData.PriorityOrder;
  const TicketStatus = groupingData.TicketStatus;
  const [sortedTickets, setSortedTickets]= useState(tickets);
  const sorted = [...tickets].sort((a, b) => b.id - a.id);

  return (
    <div>
      {/* grouping based on priority */}
      {groupingLabel === "priority" &&
        PriorityOrder.map((item) => (
          <>
            <h1>{item.label}</h1>
            {tickets.map((ticket) => (
              <>
                {item.key === ticket.priority && (
                  <FeatureCard
                    ticket={ticket}
                    userInfo={userInfo}
                    priorityIcon={item.priorityIcon}
                  />
                )}
              </>
            ))}
          </>
        ))}

      {/* grouping based on status */}
      {groupingLabel === "status" &&
        TicketStatus.map((item) => (
          <>
            <h1>{item.status}</h1>
            {tickets.map((ticket) => (
              <>
                {item.status === ticket.status && (
                  <>
                    <FeatureCard
                      ticket={ticket}
                      userInfo={userInfo}
                      statusIcon={item.statusIcon}
                    />
                  </>
                )}
              </>
            ))}
          </>
        ))}

      {/* grouping based on user */}
      {groupingLabel === "user" &&
        userInfo.map((user) => (
          <div>
            <h1>{user.name}</h1>
            {tickets.map((ticket) => (
              <>
                {user.id === ticket.userId && (
                  <FeatureCard
                    ticket={ticket}
                    userInfo={user}
                    userAvailability={user.available}
                  />
                )}
              </>
            ))}
          </div>
        ))}
    </div>
  );
};
