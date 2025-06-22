import { useState, useContext, useCallback } from "react";
import ConcertEdit from "./ConcertEdit";
import ConcertsContext from "../context/concerts";

function ConcertShow({ concert }) {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteConcertById } = useContext(ConcertsContext);

  const handleEditClick = useCallback(() => {
    setShowEdit((prev) => !prev);
  }, []);

  const handleSubmit = useCallback(() => {
    setShowEdit(false);
  }, []);

  const handleDeleteClick = useCallback(() => {
    deleteConcertById(concert.id);
  }, [deleteConcertById, concert.id]);

  let content = (
    <h3>
      {concert.artist} <br />
      {concert.date}
    </h3>
  );

  if (showEdit)
    content = <ConcertEdit concert={concert} onSubmit={handleSubmit} />;

  return (
    <div className="concert-show">
      <img
        alt={concert.artist}
        src={
          concert.image || "https://via.placeholder.com/300x200?text=No+Image"
        }
        style={{ borderRadius: "8px", marginBottom: "10px", maxWidth: "100%" }}
      />
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

export default ConcertShow;
