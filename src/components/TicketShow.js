import { useState, useContext } from "react";
import TicketEdit from "./TicketEdit";
import TicketsContext from "../context/tickets";

function TicketShow({ ticket }) {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteTicketById } = useContext(TicketsContext);

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  const handleDeleteClick = () => {
    deleteTicketById(ticket.id);
  };

  let content = (
    <h3>
      {ticket.name} <br />
      <ul>
        {ticket.dates.map((date) => (
          <li key={date}>{date}</li>
        ))}
      </ul>
      <br />
      {ticket.price}
    </h3>
  );

  if (showEdit)
    content = <TicketEdit ticket={ticket} onSubmit={handleSubmit} />;

  return (
    <div className="ticket-show">
      {content}
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edytuj
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Usuń
        </button>
      </div>
    </div>
  );
}

export default TicketShow;
