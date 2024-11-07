import {React, Button} from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'
import logo from '../CSS/Assets/Catnap_icon.png'

function Footer() {
    return (
        <Navbar className="justify-content-center mt-5" style={{ backgroundColor: '#d1c3a7', color: '#5b4636' }}>
            <p>© 2024 Catnap Cafe & Rescue | A place for cats and coffee lovers alike</p>
        </Navbar>
    );
}

export default Footer;