import { useState, useContext, useMemo } from "react";
import ConcertsContext from "../context/concerts";

function ConcertEdit({ concert, onSubmit }) {
  const { editConcertById } = useContext(ConcertsContext);

  const dates = useMemo(
    () => [
      { value: "2025-07-20", label: "20.07.2025" },
      { value: "2025-07-21", label: "21.07.2025" },
      { value: "2025-07-22", label: "22.07.2025" },
      { value: "2025-07-23", label: "23.07.2025" },
      { value: "2025-07-24", label: "24.07.2025" },
    ],
    []
  );

  const initialDate = dates.some((d) => d.value === concert.date)
    ? concert.date
    : dates[0].value;
  const initialImage = concert.image || "";

  const [artist, setArtist] = useState(concert.artist);
  const [date, setDate] = useState(initialDate);
  const [image, setImage] = useState(initialImage);

  const handleArtistChange = (e) => setArtist(e.target.value);
  const handleDateChange = (e) => setDate(e.target.value);
  const handleImageChange = (e) => setImage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!artist.trim() || !date.trim() || !image.trim()) {
      alert("Wszystkie pola muszą być wypełnione.");
      return;
    }
    editConcertById(concert.id, artist, date, image);
    onSubmit();
  };

  return (
    <div className="concert-create">
      <h3>Edytuj koncert</h3>
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
        <button className="button">Edytuj koncert</button>
      </form>
    </div>
  );
}

export default ConcertEdit;
