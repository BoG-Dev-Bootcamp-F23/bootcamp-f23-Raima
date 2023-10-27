import { useNavigate } from "react-router-dom";
import martaMap from '../marta-map.jpg';
import './About.css';

function About() {
    const navigate = useNavigate();

    return (
        <div className="About-page">
            <div className="header-container">
                <h1 className="about-title">About MARTA</h1>
                <button className="back" onClick={() => navigate('/')}>Back to Home</button>
            </div>
            <p className="about-body">The Metropolitan Atlanta Rapid Transit Authority (MARTA) was established with a clear vision: to provide a reliable and efficient public transportation system for the residents and visitors of the Atlanta metropolitan area. As one of the largest transit systems in the United States, MARTA plays a pivotal role in reducing traffic congestion, minimizing environmental impact, and promoting sustainable urban growth.</p>
            <p className="about-body">MARTA's purpose extends beyond just transportation. It aims to:</p>
            <div className="content-section">
                <img src={martaMap} alt="MARTA map" className="marta-map"/>
                <ol>
                    <li>Connect Communities: By bridging neighborhoods, MARTA fosters community growth, ensuring that residents can easily access work, education, healthcare, and recreational facilities.</li>
                    <li>Drive Economic Growth: MARTA stations often become hubs of commercial and residential activity, spurring economic development and job creation in their vicinities.</li>
                    <li>Promote Sustainability: By offering an alternative to personal vehicles, MARTA helps reduce the carbon footprint, contributing to a cleaner and greener Atlanta.</li>
                    <li>Enhance Accessibility: MARTA ensures that all residents, including those without personal vehicles or with disabilities, have access to safe and reliable transportation.</li>
                    <li>Support Tourism: For visitors to Atlanta, MARTA provides a convenient way to explore the city's landmarks, cultural institutions, and entertainment venues.</li>
                </ol>
            </div>
            <p className="about-body">MARTA remains committed to its mission of making Atlanta more connected, accessible, and sustainable.</p>
        </div>
    )
}

export default About;