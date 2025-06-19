import { useState, useContext } from "react";
import TicketsContext from "../context/tickets";

function TicketCreate() {
  const { createTicket } = useContext(TicketsContext);

  const dates = [
    { value: "2025-07-20", label: "20.07.2025" },
    { value: "2025-07-21", label: "21.07.2025" },
    { value: "2025-07-22", label: "22.07.2025" },
    { value: "2025-07-23", label: "23.07.2025" },
    { value: "2025-07-24", label: "24.07.2025" },
  ];

  const [name, setName] = useState("");
  const [selectedDates, setSelectedDates] = useState([]);
  const [price, setPrice] = useState("");

  const handleNameChange = (e) => setName(e.target.value);

  const handleDateChange = (e) => {
    const value = e.target.value;
    setSelectedDates((prevDates) =>
      e.target.checked
        ? [...prevDates, value]
        : prevDates.filter((d) => d !== value)
    );
  };

  const handlePriceChange = (e) => setPrice(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || selectedDates.length === 0 || !price) return;

    createTicket(name, selectedDates, price);
    setName("");
    setSelectedDates([]);
    setPrice("");
  };

  return (
    <div className="ticket-create">
      <h3>Dodaj bilet</h3>
      <form onSubmit={handleSubmit}>
        <label>Nazwa</label>
        <input className="input" onChange={handleNameChange} value={name} />

        <label>Daty</label>
        <div className="input">
          {dates.map((d) => (
            <label key={d.value}>
              <input
                type="checkbox"
                value={d.value}
                checked={selectedDates.includes(d.value)}
                onChange={handleDateChange}
              />{" "}
              {d.label}
            </label>
          ))}
        </div>
        <label>Cena</label>
        <input className="input" onChange={handlePriceChange} value={price} />

        <button className="button" type="submit">
          Dodaj bilet
        </button>
      </form>
    </div>
  );
}

export default TicketCreate;
