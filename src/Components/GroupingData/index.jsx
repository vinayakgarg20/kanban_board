import { Urgent, Low, High, Medium, NoPriority } from "../../Assets";
import { Done, Cancelled, Backlog, InProgress, ToDo } from "../../Assets";
// 4 - Urgent
// 3 - High
// 2 - Medium
// 1 - Low
// 0 - No priority
export const GroupingData = {
    PriorityOrder: [
        { key: 0, label: "No priority", priorityIcon: NoPriority },
        { key: 1, label: "Low", priorityIcon: Low },
        { key: 2, label: "Medium", priorityIcon: Medium },
        { key: 3, label: "High", priorityIcon: High },
        { key: 4, label: "Urgent", priorityIcon: Urgent },
      ],
      TicketStatus : [
        { key: 0, status: "Todo", statusIcon:ToDo },
        { key: 1, status: "In progress",statusIcon:InProgress },
        { key: 2, status: "Backlog" ,statusIcon:Backlog},
        { key: 3, status: "Done", statusIcon:Done },
        { key: 4, status: "Cancelled", statusIcon:Cancelled },
      ]
  }