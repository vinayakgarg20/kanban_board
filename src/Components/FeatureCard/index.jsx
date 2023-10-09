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
        {ticket.id}
        {groupingLabel !== "user" && (
          <UserProfile userId={ticket.userId} userInfo={userInfo} />
        )}
      </div>
      <div style={{ display: "flex" }}>
        <div>
          {groupingLabel !== "status" && (
            <img
              className="inlineblock marginright"
              src={StatusIcon[ticket.status]}
              alt=""
            />
          )}
        </div>

        <div className="ticket-title">{ticket.title}</div>
      </div>
      <div style={{ display: "flex" }}>
        <span>
          {groupingLabel !== "priority" && (
            <img
              className="feature-request-left-icon"
              src={PriorityIcon[ticket.priority]}
              alt=""
            />
          )}
        </span>
        <div className="feature-request-button feature">
          <div className="feature-request-icon"></div>
          <div className="inlineblock">Feature Request</div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
