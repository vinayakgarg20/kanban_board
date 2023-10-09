import ListContainer from "../ListContainer";
export const GroupTickets = ({
  tickets,
  userInfo,
  groupingData,
  groupingLabel,
}) => {
  return (
    <div>
      {Object.keys(tickets).map((ticketList) => (
        <ListContainer
          title={ticketList}
          tickets={tickets[ticketList]}
          userInfo={userInfo}
          groupingData={groupingData}
          groupingLabel={groupingLabel}
        />
      ))}
    </div>
  );
};
