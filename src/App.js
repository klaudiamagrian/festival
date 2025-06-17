import { useEffect, useContext } from "react";
import ConcertCreate from "./components/ConcertCreate";
import ConcertList from "./components/ConcertList";
import ConcertsContext from "./context/concerts";

function App() {
  const { fetchConcerts } = useContext(ConcertsContext);

  useEffect(() => {
    fetchConcerts();
  }, []);

  return (
    <div className="app">
      <h1 className="header">FESTIVAL 20–24.07</h1>
      <ConcertList />
      <ConcertCreate />
    </div>
  );
}

export default App;
