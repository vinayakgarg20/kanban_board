import FeatureCard from "../../Components/FeatureCard";
export const GroupTicketByUser = ({ tickets, userInfo }) => {
  return (
    <div>
      {userInfo.map((user) => (
        <div>
          <h1>{user.name}</h1>
          {tickets.map((ticket) => (
            <>
              {user.id === ticket.userId && (
                <FeatureCard ticket={ticket} userInfo={user} />
              )}
            </>
          ))}
        </div>
      ))}
    </div>
  );
};
