import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Logo from '../assets/img/logo.png'

const NavBar = () => {
    const SLeft = '<'
    const SRight = ' />'
    return (
        <div>
            <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img className="logoImg" src={Logo} alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto navLinks">
                        <Nav.Link href="#home">{SLeft}Inicio{SRight}</Nav.Link>
                        <Nav.Link href="#skills">{SLeft}Habilidades{SRight}</Nav.Link>
                        <Nav.Link href="#projects">{SLeft}Proyectos{SRight}</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar