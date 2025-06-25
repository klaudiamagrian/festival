import { useState, useContext, useCallback } from "react";
import TicketEdit from "./TicketEdit";
import TicketsContext from "../context/tickets";

function TicketShow({ ticket }) {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteTicketById } = useContext(TicketsContext);

  const handleEditClick = useCallback(() => {
    setShowEdit((prev) => !prev);
  }, []);

  const handleDeleteClick = useCallback(() => {
    deleteTicketById(ticket.id);
  }, [deleteTicketById, ticket.id]);

  const handleSubmit = useCallback(() => {
    setShowEdit(false);
  }, []);

  let content = (
    <h3>
      {ticket.name} <br />
      <ul>
        {ticket.dates.map((date) => (
          <li key={date}>
            <p>{new Date(date).toLocaleDateString("pl-PL")}</p>
          </li>
        ))}
      </ul>
      <br />
      <p>
        <strong>Cena:</strong> {ticket.price} zł
      </p>
    </h3>
  );

  if (showEdit) {
    content = <TicketEdit ticket={ticket} onSubmit={handleSubmit} />;
  }

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
