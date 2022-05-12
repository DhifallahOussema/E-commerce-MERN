import React from 'react'

import {Nav, Navbar,Container,Form,FormControl,Button} from 'react-bootstrap';
import {Link } from 'react-router-dom'
const Navbarre=()=>{

  return(
<Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand >Gestion Commerciale</Navbar.Brand>
    <Nav className="me-auto">


      
      
    </Nav>
    <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="success">Chercher</Button>
      </Form>
      <Nav >
        <Nav.Link as={Link} to="/signin">Sign in/Sign up</Nav.Link>
      </Nav>
    </Container>
    

  </Navbar>
  )

}
export default Navbarre
