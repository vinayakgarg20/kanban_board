import ListContainer from "../../Container/ListContainer";
export const GroupTickets = ({
  tickets,
  userInfo,
  groupingLabel,
}) => {
  return (
    <div>
      {Object.keys(tickets).map((ticketList) => (
        <ListContainer
          title={ticketList}
          tickets={tickets[ticketList]}
          userInfo={userInfo}
          groupingLabel={groupingLabel}
        />
      ))}
    </div>
  );
};
