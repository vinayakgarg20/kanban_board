import React from "react";
import {PiCellSignalLowBold} from "react-icons/pi";
import "./styles.css";
import { UserProfile } from "../UserProfile";


const FeatureCard = ({ ticket, userInfo, statusIcon, priorityIcon, userAvailability }) => {

  // Extract ticket properties from props
  const ticketId = ticket.id;
  const userId = ticket.userId;
  const title = ticket.title;
  const status = ticket.status;
  
  return (
    <div className="frame">
      {/* Section 1: Ticket ID and User Information */}
      <div className="div-2">
        <div className="text-wrapper">{ticketId}</div>
        <div>
          {/* Render the UserProfile component with user information */}
          <UserProfile userInfo={userInfo} userId={userId} userAvailability />
        </div>
      </div>

      {/* Section 2: Title */}
      <div className="div-2">
        <div className="text-wrapper-2">{title}</div>
      </div>

      {/* Section 3: Additional Options */}
      <div className="div-3">
        {/* More options or actions can be added here */}
        <PiCellSignalLowBold/>
        <div className="frame-wrapper">
          <div className="div-4">
            {/* Icon or indicator can be added here */}
            <div className="ellipse" />
            <div className="text-wrapper-3">Feature Request</div>
          </div>
        </div>
      </div>

      {/* Section 4: Additional Styling Element */}
      <div className="ellipse-2" />
    </div>
  );
};

export default FeatureCard;
