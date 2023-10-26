import Train from './Train';
import { useState } from 'react';

export default function TrainList(props) {
    const { currColor, trainData } = props;
    const [ button, setButton ] = useState("Arriving");
    const arrivals = trainData["RailArrivals"];

    function createButton(currButton) {
        return (
            <button className='button-top' style= {{
                background: button === currButton ? 'black' : 'white',
                border: "2px solid black",
                color: button === currButton ? 'white' : 'black'
            }}>{currButton}</button>
        )
    }

    return (
        <div className="features">
            <div className="buttons-container">
                {createButton("Arriving")}
                {createButton("Scheduled")}
                {currColor === "GREEN" || currColor === "BLUE" ?
                    <>{createButton("Eastbound")}
                    {createButton("Westbound")}</> :
                    <>{createButton("Northbound")}
                    {createButton("Southbound")}</>
                }
            </div>
            <div className="trains-container">
                {arrivals.map((arrival) => {
                    if (arrival["LINE"] === currColor) {
                        return <Train trainData={arrival}/>
                    }
                    return null;
                })}
            </div>
        </div>
    )
}