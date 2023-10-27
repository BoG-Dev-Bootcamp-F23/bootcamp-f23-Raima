import { useNavigate } from "react-router-dom";
import './Home.css';
import martaLogo from '../Marta.png';
import martaImg from '../image.png';

function Home() {
    const navigate = useNavigate();

    return (
        <div className="Home">
            <h1 className="marta-head">
                <img src={martaLogo} alt="MARTA logo" className="marta-logo-home" />
                MARTA
            </h1>
            <div className="button-and-pic-and-info">
                <nav className="line-nav">
                    <button className="gold-nav" onClick={() => navigate('/lines/gold')}>Gold Line</button>
                    <button className="red-nav" onClick={() => navigate('/lines/red')}>Red Line</button>
                    <button className="blue-nav" onClick={() => navigate('/lines/blue')}>Blue Line</button>
                    <button className="green-nav" onClick={() => navigate('/lines/green')}>Green Line</button>
                    <div className="about" onClick={() => navigate('/about')}>About MARTA</div>
                </nav>
                <div className="pic-and-info">
                    <img src={martaImg} alt="MARTA img" className="about" id="trainImg" />
                    <div className="lol-talk">
                        <h2>Travel with us, anywhere, anytime. MARTA.</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;