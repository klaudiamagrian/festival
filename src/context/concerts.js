import { createContext, useState } from "react";
import axios from "axios";

const ConcertsContext = createContext();

function Provider({ children }) {
  const [concerts, setConcerts] = useState([]);

  const fetchConcerts = async () => {
    const response = await axios.get("http://localhost:3001/concerts");

    setConcerts(response.data);
  };

  const createConcert = async (artist, date, image) => {
    const response = await axios.post("http://localhost:3001/concerts", {
      artist: artist,
      date: date,
      image: image,
    });
    console.log(response);

    const updatedConcerts = [
      ...concerts,
      { id: response.data.id, artist: artist, date: date, image: image },
    ];
    setConcerts(updatedConcerts);
  };

  const deleteConcertById = async (id) => {
    console.log(id);
    await axios.delete(`http://localhost:3001/concerts/${id}`);

    const updatedConcerts = concerts.filter((concert) => concert.id !== id);
    setConcerts(updatedConcerts);
  };

  const editConcertById = async (id, newArtist, newDate, newImage) => {
    const response = await axios.put(`http://localhost:3001/concerts/${id}`, {
      artist: newArtist,
      date: newDate,
      image: newImage,
    });
    console.log(response);

    const updateConcerts = concerts.map((concert) => {
      if (concert.id === id) {
        return { ...concert, ...response.data };
      }
      return concert;
    });
    setConcerts(updateConcerts);
  };

  const valueToShare = {
    concerts,
    deleteConcertById,
    editConcertById,
    createConcert,
    fetchConcerts,
  };

  return (
    <ConcertsContext.Provider value={valueToShare}>
      {children}
    </ConcertsContext.Provider>
  );
}

export { Provider };
export default ConcertsContext;
