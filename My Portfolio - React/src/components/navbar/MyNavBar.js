import 'bootstrap/dist/css/bootstrap.css'
import { Container, Nav, Navbar } from 'react-bootstrap'
import './MyNavBar.css'
import myLogo from "../../images/my-logo.png"


const MyNavbar = () => {

    return (
        <Navbar collapseOnSelect className="nav-bg" variant="dark" expand="lg">
            <Container className="justify-content-between" style={{ Height: '30px' }} >
                <Navbar.Brand href="/"><img class="my-logo" src={myLogo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                    <Nav className="justify-content-center">
                        <Nav.Link href="#home"><span className="text-hover">Home</span></Nav.Link>
                        <Nav.Link href="#about"><span className="text-hover">About</span></Nav.Link>
                        <Nav.Link href="#project"><span className="text-hover">Project</span></Nav.Link>
                        <Nav.Link href="#contact"><span className="text-hover">Contact</span></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container >
        </Navbar >
    )
}

export default MyNavbar;