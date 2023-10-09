import React from "react";
import "./styles.css";
import FeatureCard from "../../Components/FeatureCard";
import { CustomLabel } from "../../Components/CustomLabel";
const ListContainer = ({ title, tickets, userInfo, groupingLabel }) => {
  return (
    <div className="list-container">
      <CustomLabel
        val={title}
        groupingLabel={groupingLabel}
        userInfo={userInfo}
        length={tickets.length}
      />
      {tickets.map((ticket) => (
        <div className="card-list">
          <FeatureCard
            ticket={ticket}
            userInfo={userInfo}
            groupingLabel={groupingLabel}
          />
        </div>
      ))}
    </div>
  );
};

export default ListContainer;
