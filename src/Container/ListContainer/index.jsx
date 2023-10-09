import React from "react";
import FeatureCard from "../../Components/FeatureCard";
import { GroupingData } from "../../Components/GroupingData";
const ListContainer = ({ title, tickets, userInfo, groupingLabel }) => {
  const PriorityLabel = GroupingData.PriorityLabel;

  return (
    <div>
         {groupingLabel === "priority" &&  <h1>{PriorityLabel[Number(title)]}</h1> }
         {groupingLabel === "status" &&  <h1>{title}</h1>}
         {groupingLabel === "user" &&  <h1>{userInfo[title].name}</h1>}
          {tickets.map((ticket) => (
            <>
              <FeatureCard
                ticket={ticket}
                userInfo={userInfo}
                groupingLabel={groupingLabel}
              />
            </>
          ))}
    </div>
  );
};

export default ListContainer;
