import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../CSS/Assets/Draft_icon.png'

function Header() {
    return (
        <Navbar expand="lg" style={{ backgroundColor: '#d1c3a7' }}>
            <Container>
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        alt="Catnap Cafe Logo"
                        width="50"
                        height="50"
                        className="d-inline-block align-top rounded-circle"
                    />
                    <span className="ms-2">Catnap Cafe & Rescue</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/" style={{ color: '#5b4636' }}>Home</Nav.Link>
                        <Nav.Link href="/about" style={{ color: '#5b4636' }}>About</Nav.Link>
                        <Nav.Link href="/adopt" style={{ color: '#5b4636' }}>Adopt</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header