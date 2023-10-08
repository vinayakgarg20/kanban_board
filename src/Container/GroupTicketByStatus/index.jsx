import FeatureCard from "../../Components/FeatureCard";
export const GroupTicketByStatus = ({ tickets, userInfo }) => {
  // 4 - Urgent
  // 3 - High
  // 2 - Medium
  // 1 - Low
  // 0 - No priority
  const statusOrder = [
    { key: 0, status: "Todo" },
    { key: 1, status: "In progress" },
    { key: 2, status: "Backlog" },
  ];
  return (
    <div>
      {statusOrder.map((item) => (
        <div>
          <h1>{item.status}</h1>
          {tickets.map((ticket) => (
            <>
              {item.status === ticket.status && (
                <>
                  <FeatureCard ticket={ticket} userInfo={userInfo} />
                </>
              )}
            </>
          ))}
        </div>
      ))}
    </div>
  );
};
