import FeatureCard from "../../Components/FeatureCard"
export const GroupTicketByPriority=({tickets,userInfo,priorityLabels})=>{
 
    return (
        <div>
          {priorityLabels.map((item) => (
            <div>
              <h1>{item.label}</h1>
              {tickets.map((ticket) => (
                <>
                  {item.key === ticket.priority && (
                    <FeatureCard ticket={ticket} userInfo={userInfo} />
                  )}
                </>
              ))}
            </div>
          ))}
        </div>
      );
}