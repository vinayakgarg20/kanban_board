import ListContainer from "../../Container/ListContainer";

// GroupTickets component to render lists of grouped tickets.
export const GroupTickets = ({ tickets, userInfo, groupingLabel }) => {
  return (
    <>
      {/* Iterate through each ticket list */}
      {Object.keys(tickets).map((ticketList) => (
        <ListContainer
          key={ticketList} // Provide a unique key for each list
          title={ticketList}
          tickets={tickets[ticketList]}
          userInfo={userInfo}
          groupingLabel={groupingLabel}
        />
      ))}
    </>
  );
};

