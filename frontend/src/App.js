import logo from './logo.svg';
import './App.css';
import DestinationCard from "./components/Card/DestinationCard";
import {useEffect} from "react";
import Navbar from "./components/Navbar/Navbar";

let destinations = [];

function App() {

  useEffect(() => {
      // fetch call
            // put that's return in fetch call -> destinations
            // window.reload();
      fetch("http://localhost:8080")
          .then(res => res.json())
          .then(data => console.log(data))
  }, [])

            // googleMapsUrl={"https://placeimg.com/400/400/arch"}
   return (
    <div className="App">
        <Navbar />
        <header className="App-header">{}

            <DestinationCard
                title={"Mount Fuji"}
                location={"Japan"}
                googleMapsUrl={""}
                startDate={"12 Jan, 2021"}
                endDate={"24 Jan, 2021"}
                description={"Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."}
                imageUrl={"https://cdn.britannica.com/96/196396-050-13758154/Chureito-Pagoda-Arakura-Sengen-Shrine-Mount-Fuji.jpg"}
            />
        </header>
    </div>
  );
}

export default App;
