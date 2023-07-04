import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../componets/Imags/logo.png'
import '../componets/styles/navbar.css';

export default function Navbars() {

  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    // console.log(window.pageYOffset)
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
     
     <Navbar bg="light" expand="lg"  className={isNavbarFixed ? 'fixed-navbar' : ''}>
      <Container fluid>
        <Navbar.Brand href="#">
          <img className='logo' src={logo} alt="Marbles Egypt"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
          
            className="me-auto my-2 my-lg-0"
            style={{ Height: 'fitContent' }}
          >
              <Nav.Link href="#Home" onClick={handleHomeClick}>HOME</Nav.Link>
            <Nav.Link href="#OURVISION">OUR VISION</Nav.Link>
            <Nav.Link href="#EVENT">EVENT & CATERING</Nav.Link>
            <Nav.Link href="#MENU">MENU</Nav.Link>
            <Nav.Link href="#Contact">CONTACT</Nav.Link>
            <Nav.Link href="#CommingSoon" disabled alt="comming Soon">OUR BRANCH</Nav.Link>
       
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}
