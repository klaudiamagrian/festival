import { createContext, useState } from "react";
import axios from "axios";

const TicketsContext = createContext();

function TicketProvider({ children }) {
  const [tickets, setTickets] = useState([]);

  const fetchTickets = async () => {
    const response = await axios.get("http://localhost:3001/tickets");

    setTickets(response.data);
  };

  const createTicket = async (name, dates, price) => {
    const response = await axios.post("http://localhost:3001/tickets", {
      name: name,
      dates: dates,
      price: price,
    });
    console.log(response);

    const updatedTickets = [
      ...tickets,
      { id: response.data.id, name: name, dates: dates, price: price },
    ];
    setTickets(updatedTickets);
  };

  const deleteTicketById = async (id) => {
    console.log(id);
    await axios.delete(`http://localhost:3001/tickets/${id}`);

    const updatedTickets = tickets.filter((ticket) => ticket.id !== id);
    setTickets(updatedTickets);
  };

  const editTicketById = async (id, newName, newDate, newPrice) => {
    const response = await axios.put(`http://localhost:3001/tickets/${id}`, {
      name: newName,
      dates: newDate,
      price: newPrice,
    });
    console.log(response);

    const updateTickets = tickets.map((ticket) => {
      if (ticket.id === id) {
        return { ...ticket, ...response.data };
      }
      return ticket;
    });
    setTickets(updateTickets);
  };

  const valueToShare = {
    tickets,
    deleteTicketById,
    editTicketById,
    createTicket,
    fetchTickets,
  };

  return (
    <TicketsContext.Provider value={valueToShare}>
      {children}
    </TicketsContext.Provider>
  );
}

export { TicketProvider };
export default TicketsContext;
