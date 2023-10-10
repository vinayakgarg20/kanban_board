import { Urgent, NoPriority } from "../../Assets";
import { Done, Cancelled, Backlog, InProgress, ToDo } from "../../Assets";
import SignalCellularAlt1BarIcon from '@mui/icons-material/SignalCellularAlt1Bar';
import SignalCellularAlt2BarIcon from "@mui/icons-material/SignalCellularAlt2Bar";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
// 4 - Urgent
// 3 - High
// 2 - Medium
// 1 - Low
// 0 - No priority
export const GroupingData = {
  PriorityIcon: {
    0: NoPriority,
    1: SignalCellularAlt1BarIcon,
    2: SignalCellularAlt2BarIcon,
    3: SignalCellularAltIcon,
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


