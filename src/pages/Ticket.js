import { useEffect, useContext } from "react";
import TicketCreate from "../components/TicketCreate";
import TicketList from "../components/TicketList.";
import TicketsContext from "../context/tickets";

function Ticket() {
  const { fetchTickets } = useContext(TicketsContext);

  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <>
      <h1 className="header">BILETY</h1>
      <TicketList />
      <TicketCreate />
    </>
  );
}

export default Ticket;
