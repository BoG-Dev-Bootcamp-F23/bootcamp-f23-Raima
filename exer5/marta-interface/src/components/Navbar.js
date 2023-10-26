export default function Navbar(props) {
    const { currColor, stationData } = props;
    const listOfStations = stationData[currColor.toLowerCase()];

    return (
        <div className="navbar-container">
            <p className="select-station">Select your starting station</p>
            <div className="options">All stations</div>
            {listOfStations.map((station) =>
                <div className="options">{station}</div>
            )}
        </div>
    )
}