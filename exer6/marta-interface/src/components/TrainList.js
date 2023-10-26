import Train from './Train';
import { useState } from 'react';

export default function TrainList(props) {
    const { currColor, trainData, selectedStation } = props;
    console.log(currColor);
    const [arrivingFilter, setArrivingFilter] = useState(false);
    const [scheduledFilter, setScheduledFilter] = useState(false);
    const [northboundFilter, setNorthboundFilter] = useState(false);
    const [southboundFilter, setSouthboundFilter] = useState(false);
    const [eastboundFilter, setEastboundFilter] = useState(false);
    const [westboundFilter, setWestboundFilter] = useState(false);

    const filteredArrivals = trainData.filter(arrival => {
        const stationYes = selectedStation === "All Stations" || arrival["STATION"] === `${selectedStation.toUpperCase()} STATION`;
        const arrivingYes = !arrivingFilter || arrival["WAITING_TIME"] === "Arriving";
        const scheduledYes = !scheduledFilter || arrival["WAITING_TIME"] !== "Arriving";
        const directionYes = (currColor === "GREEN" || currColor === "BLUE")
            ? (!eastboundFilter || arrival["DIRECTION"] === "E") && (!westboundFilter || arrival["DIRECTION"] === "W")
            : (!northboundFilter || arrival["DIRECTION"] === "N") && (!southboundFilter || arrival["DIRECTION"] === "S");

        return stationYes && arrivingYes && scheduledYes && directionYes;
    });

    return (
        <div className="features">
            <div className="buttons-container">
            <button className={arrivingFilter ? "selected-btn" : "not-selected-btn"}
                        onClick={() => setArrivingFilter(!arrivingFilter)}>Arriving</button>
                <button className={scheduledFilter ? "selected-btn" : "not-selected-btn"}
                        onClick={() => setScheduledFilter(!scheduledFilter)}>Scheduled</button>
                {currColor === "GREEN" || currColor === "BLUE" ?
                    <>
                    <button className={eastboundFilter ? "selected-btn" : "not-selected-btn"}
                            onClick={() => setEastboundFilter(!eastboundFilter)}>Eastbound</button>
                    <button className={westboundFilter ? "selected-btn" : "not-selected-btn"}
                            onClick={() => setWestboundFilter(!westboundFilter)}>Westbound</button>
                    </>
                    :
                    <>
                    <button className={northboundFilter ? "selected-btn" : "not-selected-btn"}
                            onClick={() => setNorthboundFilter(!northboundFilter)}>Northbound</button>
                    <button className={southboundFilter ? "selected-btn" : "not-selected-btn"}
                            onClick={() => setSouthboundFilter(!southboundFilter)}>Southbound</button>
                    </>
                }
            </div>
            <div className="trains-container">
                {
                    filteredArrivals.length > 0 ?
                    filteredArrivals.map((arrival) => {
                        return <Train trainData={arrival}/>
                    }) : <p>No current trains match filters!</p>
                }
            </div>
        </div>
    )
}