import React from "react";
import { GroupingData } from "../GroupingData"; // Import grouping data.
import "./styles.css"; 
import { UserProfile } from "../UserProfile"; // Import the UserProfile component.

const FeatureCard = ({ ticket, userInfo, groupingLabel }) => {
  // Get Icons from group data
  const PriorityIcon = GroupingData.PriorityIcon;
  const StatusIcon = GroupingData.StatusIcon;

  return (
    <div className="outer-card">
      <div className="top-row">
        <span className="top-row-title">{ticket.id}</span>

        {/* Render UserProfile component if groupingLabel is not "user" */}
        {groupingLabel !== "user" && (
          <UserProfile userId={ticket.userId} userInfo={userInfo} />
        )}
      </div>
      <div className="middle-row">
        <div>
          {/* Render StatusIcon if groupingLabel is not "status" */}
          {groupingLabel !== "status" && (
            <img
              className="inlineblock marginright"
              src={StatusIcon[ticket.status]}
              alt=""
            />
          )}
        </div>

        <div className="middle-row-title">{ticket.title}</div>
      </div>
      <div className="bottom-row">
       
          {/* Render PriorityIcon if groupingLabel is not "priority" */}
          {groupingLabel !== "priority" && (
            <img
              className="bottom-row-icon"
              src={PriorityIcon[ticket.priority]}
              alt=""
            />
          )}
        
        <div className="bottom-row-tag">
          <div className="tag-radio"></div>
          <div className="tag-text">{ticket.tag}</div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
