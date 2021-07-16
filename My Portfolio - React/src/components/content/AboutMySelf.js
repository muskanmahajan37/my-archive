import { Container } from 'react-bootstrap'

import './AboutMySelf.css';
import aboutPhoto from '../../images/EP1.png';

const AboutMySelf = () => {
    return (
        <Container id="about" className="d-flex flex-wrap justify-content-center align-items-center">
            <div className="about-container">
                <h2>A little about my self</h2>
                <p>Hello! My name is Christian and I'm a virtual assistant and a self-taught web developer. I enjoy building and creating modern websites with HTML, CSS, and JavaScript. My interest in web development started in January this year (2021) when I saw a post on the internet about building a website and it caught my interest.</p>
                <p>Fast-forward to today. I have done with my Udemy course and currently studying data science. I'm also starting building projects.</p>
            </div>
            <div>
                <img className="aboutPhoto" src={aboutPhoto} alt=""/>
            </div>
        </Container>
    )
}

export default AboutMySelf;