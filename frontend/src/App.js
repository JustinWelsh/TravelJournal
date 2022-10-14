import logo from './logo.svg';
import './App.css';
import DestinationCard from "./components/Card/DestinationCard";
import {useEffect} from "react";
import Navbar from "./components/Navbar/Navbar";

let destinations = [];

fetch("http://localhost:8080")
    .then(res => res.json())
    .then(data => {
        destinations = data;
    })

function App() {

  useEffect(() => {}, [])

            // googleMapsUrl={"https://placeimg.com/400/400/arch"}
   return (
    <div className="App">
        <Navbar />
        <header className="App-header">

            {destinations.map(item => (
                <DestinationCard {...item} />
            ))}

        </header>
    </div>
  );
}

export default App;
