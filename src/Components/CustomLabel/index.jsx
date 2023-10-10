import { GroupingData } from "../GroupingData";
import AddIcon from "@mui/icons-material/Add";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { UserProfile } from "../UserProfile";
import "./styles.css";

export const CustomLabel = ({ groupingLabel, userInfo, val, length }) => {
  const PriorityLabel = GroupingData.PriorityLabel;
  const PriorityIcon = GroupingData.PriorityIcon;
  const StatusIcon = GroupingData.StatusIcon;
  let iconURL, title;

  // Determine the title and icon URL based on the groupingLabel.
  if (groupingLabel === "user") {
    title = userInfo[val].name;
  } else if (groupingLabel === "priority") {
    iconURL = PriorityIcon[Number(val)];
    title = PriorityLabel[Number(val)];
  } else {
    iconURL = StatusIcon[val];
    title = val;
  }

  return (
    <div className="custom-label-main">
      <div className="custom-label-left">
        <div className="custom-label-title">
          {/* Render user profile or icon based on the groupingLabel. */}
          {groupingLabel === "user" ? (
            <UserProfile userInfo={userInfo} userId={val} />
          ) : (
            <img className="custom-label-icon" src={iconURL} alt="" />
          )}
          <span className="columnDisplayText"> {title} </span>
          <span className="columnDisplaySize">{length}</span>
        </div>
      </div>
      <div className="custom-label-right">
        {/* AddIcon for adding functionality. */}
        <AddIcon
          sx={{
            color: "#4C5159",
            fontSize: "16px",
            cursor: "pointer",
          }}
        />
        {/* MoreHorizIcon for additional options. */}
        <MoreHorizIcon
          sx={{
            color: "#4C5159",
            fontSize: "16px",
            cursor: "pointer",
          }}
        />
      </div>
    </div>
  );
};
