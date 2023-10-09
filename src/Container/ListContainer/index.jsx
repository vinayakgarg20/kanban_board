import React from "react";
import FeatureCard from "../../Components/FeatureCard";

const ListContainer = ({
  title,
  tickets,
  userInfo,
  groupingData,
  groupingLabel,
}) => {
  const PriorityOrder = groupingData.PriorityOrder;
  const TicketStatus = groupingData.TicketStatus;

  return (
    <div>
      {/* grouping based on priority */}
      {groupingLabel === "priority" && (
        <div>
          {PriorityOrder.map((item) => (
            <>
              {item.key === Number(title) && (
                <>
                  <h1>{item.label}</h1>
                  {tickets.map((ticket) => (
                    <>
                      <FeatureCard
                        ticket={ticket}
                        userInfo={userInfo}
                        priorityIcon={item.priorityIcon}
                      />
                    </>
                  ))}
                </>
              )}
            </>
          ))}
        </div>
      )}

      {/* grouping based on status */}
      {groupingLabel === "status" && (
        <div>
          {TicketStatus.map((item) => (
            <>
              {item.status === title && (
                <>
                  <h1>{item.status}</h1>
                  {tickets.map((ticket) => (
                    <>
                      <FeatureCard
                        ticket={ticket}
                        userInfo={userInfo}
                        statusIcon={item.statusIcon}
                      />
                    </>
                  ))}
                </>
              )}
            </>
          ))}
        </div>
      )}

      {/* grouping based on user */}
      {groupingLabel === "user" && (
        <div>
          {userInfo.map((user) => (
            <>
              {user.id === title && (
                <>
                  <h1>{user.name}</h1>
                  {tickets.map((ticket) => (
                    <>
                      <FeatureCard
                        ticket={ticket}
                        userInfo={user}
                        userAvailability={user.available}
                      />
                    </>
                  ))}
                </>
              )}
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListContainer;
