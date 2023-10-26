import TrainList from '../components/TrainList';
import NavBar from '../components/Navbar';
import { useState } from "react";
import { useEffect } from 'react';

export default function LinesPage() {
  const [currColor, setColor] = useState("GOLD");
  const [loading, setLoading] = useState(true);
  const [trainData, setTrainData] = useState(null);
  const [stationData, setStationData] = useState(null);
  const [selectedStation, setSelectedStation] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const stationResponse = await fetch("http://13.59.196.129:3001/stations/" + currColor);
      const stationData = await stationResponse.json();
      const trainResponse = await fetch("http://13.59.196.129:3001/arrivals/" + currColor);
      const trainData = await trainResponse.json();
      setStationData(stationData);
      setTrainData(trainData);
      setLoading(false);
    }
    
    setSelectedStation("All Stations");
    fetchData();
  }, [currColor]);

  if (loading) {
    return <h1 className="loading-text">Loading...</h1>
  }

  return (
    <div className='linesPage'>
      <div className="line-buttons">
        <button className="line-b" style={{backgroundColor: "gold", color: "white", border: "none"}} onClick={() => setColor("GOLD")}>Gold</button>
        <button className="line-b" style={{backgroundColor: "red", color: "white", border: "none"}} onClick={() => setColor("RED")}>Red</button>
        <button className="line-b" style={{backgroundColor: "blue", color: "white", border: "none"}} onClick={() => setColor("BLUE")}>Blue</button>
        <button className="line-b" style={{backgroundColor: "green", color: "white", border: "none"}} onClick={() => setColor("GREEN")}>Green</button>
      </div>
      <h1 className='lineHeading'>{currColor.toUpperCase()}</h1>
      <div className='mainInfo'>
        <NavBar stationData={stationData} selectedStation={selectedStation} setSelectedStation={setSelectedStation} />
        <TrainList currColor={currColor} trainData={trainData} selectedStation={selectedStation} />
      </div>
    </div>
  )
}