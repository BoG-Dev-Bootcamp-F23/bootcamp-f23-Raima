import stationData from '../server/stationData';
import trainData from '../server/trainData';
import TrainList from '../components/TrainList';
import NavBar from '../components/Navbar';
import { useState } from "react";

export default function LinesPage() {
  const [currColor, setColor] = useState("GOLD");
  return (
    <div className='linesPage'>
      <h1 className='lineHeading'>{currColor}</h1>
      <div className='mainInfo'>
        <NavBar currColor={currColor} stationData={stationData} />
        <TrainList currColor={currColor} trainData={trainData} />
      </div>
    </div>
  )
}