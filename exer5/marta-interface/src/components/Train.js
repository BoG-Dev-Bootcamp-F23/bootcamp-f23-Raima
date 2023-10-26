import martaLogo from '../Marta.png';
import arrow from '../arrow.png';

export default function Train(props) {
    const { trainData } = props;
    const LINE = trainData["LINE"];
    const StartStation = trainData["STATION"];
    const DestStation = trainData["DESTINATION"];
    const TimeLeft = trainData["WAITING_TIME"];

    return (
        <div className="train-container">
            <div className='left'>
                <div className='left-in-left'>
                    <img src={martaLogo} alt="MARTA logo" className="marta-logo" />
                </div>
                <div className='right-in-left'>
                    <div className='source-dest-container'>
                        <span className='station'>{StartStation}</span>
                        <span className='arrow-icon'>→</span>
                        <span className='station'>{DestStation}</span>
                    </div>
                    <div className='line-status-container'>
                        <button className="line-button" style={{backgroundColor: LINE.toLowerCase(), color: "white"}}>{LINE}</button>
                        <div className="status">
                            {
                                trainData["DELAY"] === "T0S" ?
                                <p className="on-time" style={{color: "green"}}>On time</p> :
                                <p className="on-time" style={{color: "red"}}>Delayed</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='right'>
                <span className='time-left'>{TimeLeft}</span>
            </div>
        </div>
    )
}