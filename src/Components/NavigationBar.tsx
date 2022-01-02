import { Container, Nav, Navbar } from "react-bootstrap";

function NavigationBar(){
    return(
        <Navbar bg="light" expand="lg" className="bg-secondary bg-opacity-10">
            <Container className="text-white">
                <Navbar.Brand href="#home" className="text-white">ViggoLagerstedtEkholm</Navbar.Brand>
                <Nav.Link href="https://viggolagerstedtekholm.github.io/Personal-Website/" className="text-white bg-primary rounded">Go to alternative portfolio</Nav.Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Container>
        </Navbar>
    )
}

export default NavigationBar;