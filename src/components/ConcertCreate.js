import { useState, useContext } from "react";
import ConcertsContext from "../context/concerts";

function ConcertCreate() {
  const { createConcert } = useContext(ConcertsContext);

  const dates = [
    { value: "2025-07-20", label: "20.07.2025" },
    { value: "2025-07-21", label: "21.07.2025" },
    { value: "2025-07-22", label: "22.07.2025" },
    { value: "2025-07-23", label: "23.07.2025" },
    { value: "2025-07-24", label: "24.07.2025" },
  ];

  const [artist, setArtist] = useState("");
  const [date, setDate] = useState(dates[0].value);
  const [image, setImage] = useState("");

  const handleArtistChange = (e) => setArtist(e.target.value);
  const handleDateChange = (e) => setDate(e.target.value);
  const handleImageChange = (e) => setImage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!artist.trim() || !date.trim() || !image.trim()) {
      alert("Wszystkie pola muszą być wypełnione.");
      return;
    }
    createConcert(artist, date, image);
    setArtist("");
    setDate(dates[0].value);
    setImage("");
  };

  return (
    <div className="concert-create">
      <h3>Dodaj koncert</h3>
      <form onSubmit={handleSubmit}>
        <label>Artysta</label>
        <input className="input" onChange={handleArtistChange} value={artist} />
        <label>Data</label>
        <select className="input" onChange={handleDateChange} value={date}>
          {dates.map((d) => (
            <option key={d.value} value={d.value}>
              {d.label}
            </option>
          ))}
        </select>
        <label>Zdjęcie (URL)</label>
        <input
          className="input"
          placeholder="Wklej link do zdjęcia"
          onChange={handleImageChange}
          value={image}
        />
        <button className="button">Dodaj koncert</button>
      </form>
    </div>
  );
}

export default ConcertCreate;
