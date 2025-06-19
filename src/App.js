import { useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConcertCreate from "./components/ConcertCreate";
import ConcertList from "./components/ConcertList";
import ConcertsContext from "./context/concerts";
import Menu from "./components/Menu";
import Tickets from "./pages/Ticket";

function Home() {
  return (
    <>
      <h1 className="header">FESTIVAL 20–24.07</h1>
      <ConcertList />
      <ConcertCreate />
    </>
  );
}

function App() {
  const { fetchConcerts } = useContext(ConcertsContext);

  useEffect(() => {
    fetchConcerts();
  }, []);

  return (
    <Router>
      <div className="app">
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bilety" element={<Tickets />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
