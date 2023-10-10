import React from "react";
import { GroupingData } from "../GroupingData";
import "./styles.css";
import { UserProfile } from "../UserProfile";

const FeatureCard = ({ ticket, userInfo, groupingLabel }) => {
  // getting Icons from group data
  const PriorityIcon = GroupingData.PriorityIcon;
  const StatusIcon = GroupingData.StatusIcon;

  return (
    <div className="outer-card">
      <div className="top-row">
        <span className="top-row-title">{ticket.id}</span>

        {groupingLabel !== "user" && (
          <UserProfile userId={ticket.userId} userInfo={userInfo} />
        )}
      </div>
      <div className="middle-row">
        <div>
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
