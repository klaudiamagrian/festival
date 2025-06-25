import { useContext } from "react";
import TicketsContext from "../context/tickets";
import TicketShow from "./TicketShow";

function TicketList() {
  const { tickets } = useContext(TicketsContext);

  const ticketsByDuration = tickets.reduce((groups, ticket) => {
    const duration = (ticket.dates || []).length;
    if (!groups[duration]) {
      groups[duration] = [];
    }
    groups[duration].push(ticket);
    return groups;
  }, {});

  const renderedGroups = Object.entries(ticketsByDuration)
    .sort(([a], [b]) => Number(a) - Number(b))
    .map(([duration, tickets]) => (
      <div key={duration} className="ticket-duration-group">
        <h2 className="ticket-duration-title">🎟️ {duration}-dniowe</h2>
        <div className="ticket-list">
          {tickets.map((ticket) => (
            <TicketShow key={ticket.id} ticket={ticket} />
          ))}
        </div>
      </div>
    ));

  return <div>{renderedGroups}</div>;
}

export default TicketList;
