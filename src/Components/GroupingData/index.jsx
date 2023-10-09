import { Urgent, Low, High, Medium, NoPriority } from "../../Assets";
import { Done, Cancelled, Backlog, InProgress, ToDo } from "../../Assets";
// 4 - Urgent
// 3 - High
// 2 - Medium
// 1 - Low
// 0 - No priority
export const GroupingData = {
  PriorityIcon: {
    0: NoPriority,
    1: Low,
    2: Medium,
    3: High,
    4: Urgent,
  },
  PriorityLabel: {
    0: "No priority",
    1: "Low",
    2: "Medium",
    3: "High",
    4: "Urgent",
  },
  StatusIcon: {
    "Todo": ToDo,
    "In progress": InProgress,
    "Backlog": Backlog,
    "Done": Done,
    "Cancelled": Cancelled,
  },

};


