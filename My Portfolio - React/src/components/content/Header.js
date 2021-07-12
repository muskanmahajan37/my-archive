import 'bootstrap/dist/css/bootstrap.css'
import { Container } from 'react-bootstrap'
import './Header.css'
import heroheader from '../../images/hero-header.png';
import ViewProject from './ViewProject';

import FixedSideBar from '../navbar/FixedSideBar'

const Header = () => {
    return (
            
            <Container className="hero-header mt-5" id="home">
                <FixedSideBar />
                <div className="d-flex flex-wrap justify-content-center align-items-center">
                    <div>
                        <p style={{ color: '#CBCBCB' }}>Hello,</p>
                        <h1 style={{ color: '#FFFFFF' }}>I'm Christian Lumapay</h1>
                        <div className="d-flex">
                            <p style={{ color: '#CBCBCB' }}>Web Developer | Web Designer</p>
                            <a href="#contact"><button className="mx-3 hire-btn">Hire me</button></a>
                        </div>
                    </div>
                    <div>
                        <img src={heroheader} className="hero-image" width="500" height="500" />
                    </div>

                </div>
                <ViewProject />
            </Container>
    )
}

export default Header;