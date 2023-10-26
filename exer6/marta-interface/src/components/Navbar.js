export default function Navbar(props) {
    const { stationData, selectedStation, setSelectedStation } = props;

    return (
        <div className="navbar-container">
            <p className="select-station">Select your starting station</p>
            <div 
                className="options"
                style={{backgroundColor: selectedStation === "All Stations" ? "yellow": "black",
                color: selectedStation === "All Stations" ? "black": "white"
                }}
                onClick={() => setSelectedStation("All Stations")}
            >
                All Stations
            </div>            
            {stationData.map((station) =>
                <div
                    className="options"
                    style={{backgroundColor: selectedStation === station ? "yellow": "black",
                    color: selectedStation === station ? "black": "white"
                    }}
                    onClick={() => setSelectedStation(station)}
                >
                    {station}
                </div>
            )}
        </div>
    )
}