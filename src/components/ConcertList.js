import { useContext } from "react";
import ConcertsContext from "../context/concerts";
import ConcertShow from "./ConcertShow";

function ConcertList() {
  const { concerts } = useContext(ConcertsContext);

  const concertsByDate = concerts.reduce((groups, concert) => {
    if (!groups[concert.date]) {
      groups[concert.date] = [];
    }
    groups[concert.date].push(concert);
    return groups;
  }, {});

  const renderedGroups = Object.entries(concertsByDate)
    .sort(([dateA], [dateB]) => new Date(dateA) - new Date(dateB))
    .map(([date, concerts]) => (
      <div key={date} className="concert-day">
        <h2 className="concert-date">📅 {formatDate(date)}</h2>
        <div className="concert-list">
          {concerts.map((concert) => (
            <ConcertShow key={concert.id} concert={concert} />
          ))}
        </div>
      </div>
    ));

  return <div>{renderedGroups}</div>;
}

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("pl-PL", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export default ConcertList;
