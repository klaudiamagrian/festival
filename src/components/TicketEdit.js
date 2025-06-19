import { useState, useContext } from "react";
import TicketsContext from "../context/tickets";

function TicketEdit({ ticket, onSubmit }) {
  const { editTicketById } = useContext(TicketsContext);

  const dates = [
    { value: "2025-07-20", label: "20.07.2025" },
    { value: "2025-07-21", label: "21.07.2025" },
    { value: "2025-07-22", label: "22.07.2025" },
    { value: "2025-07-23", label: "23.07.2025" },
    { value: "2025-07-24", label: "24.07.2025" },
  ];

  const [name, setName] = useState(ticket.name);
  const [selectedDates, setSelectedDates] = useState(ticket.dates || []);
  const [price, setPrice] = useState(ticket.price);

  const handleNameChange = (e) => setName(e.target.value);

  const handleDateChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedDates([...selectedDates, value]);
    } else {
      setSelectedDates(selectedDates.filter((d) => d !== value));
    }
  };

  const handlePriceChange = (e) => setPrice(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTicketById(ticket.id, name, selectedDates, price);
    onSubmit();
  };

  return (
    <div className="ticket-create">
      <h3>Edytuj bilet</h3>
      <form onSubmit={handleSubmit}>
        <label>Nazwa</label>
        <input className="input" onChange={handleNameChange} value={name} />

        <label>Daty</label>
        <div className="checkbox-group">
          {dates.map((d) => (
            <label key={d.value} className="checkbox-item">
              <input
                type="checkbox"
                value={d.value}
                checked={selectedDates.includes(d.value)}
                onChange={handleDateChange}
              />
              {d.label}
            </label>
          ))}
        </div>
        <label>Cena</label>
        <input className="input" onChange={handlePriceChange} value={price} />

        <button className="button">Edytuj bilet</button>
      </form>
    </div>
  );
}

export default TicketEdit;
