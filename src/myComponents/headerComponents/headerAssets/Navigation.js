import React from 'react';

// Bootstrap Module
import { Nav, Navbar } from "react-bootstrap";

import MaterialIcon from 'react-google-material-icons';
import "@fontsource/roboto-slab";


import Logo from "./Logo";

// React Router Dom
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Route page Dclaration
import Landing from "../../../routePage/Landing";
import Company from "../../../routePage/Company";
import Portfolio from "../../../routePage/Portfolio";
import Products from "../../../routePage/Products";
import Services from "../../../routePage/Services";
import Blog from "../../../routePage/Blog";
import Contact from "../../../routePage/Contact";


function Navigation() {
  return (
    <div className="top_nav">
      <Router>
        <Navbar collapseOnSelect expand="lg" className='justify-content-between'>
          <Navbar.Brand as={Link} to={"/Landing"}>
            <Logo></Logo>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
            <Nav className="">
              {/* <NavDropdown title="Products" id="nav-dropdown">
                <NavDropdown.Item eventKey="1.1">Action</NavDropdown.Item>
                <NavDropdown.Item eventKey="1.2">Another action</NavDropdown.Item>
                <NavDropdown.Item eventKey="1.3">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Services" id="nav-dropdown">
                <NavDropdown.Item eventKey="2.1">Action</NavDropdown.Item>
                <NavDropdown.Item eventKey="2.2">Another action</NavDropdown.Item>
                <NavDropdown.Item eventKey="2.3">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Company" id="nav-dropdown">
                <NavDropdown.Item eventKey="3.1">Action</NavDropdown.Item>
                <NavDropdown.Item eventKey="3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item eventKey="3.3">
                  Something else here
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Portfolio" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">
                  Something else here
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
              </NavDropdown> */}
              <Nav.Item>
                <Nav.Link as={Link} to={"/Landing"}>Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to={"/Company"}>Company</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to={"/Portfolio"}>Portfolio</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to={"/Products"}>Products</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to={"/Services"}>Services</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to={"/Blog"}>Blog</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to={"/Contact"}>Contact</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <MaterialIcon icon="sort" size={24} />
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div>
          <Switch>
            <Route path="/Landing">
              <Landing />
            </Route>
            <Route path="/Company">
              <Company />
            </Route>
            <Route path="/Portfolio">
              <Portfolio />
            </Route>
            <Route path="/Products">
              <Products />
            </Route>
            <Route path="/Services">
              <Services />
            </Route>
            <Route path="/Blog">
              <Blog />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default Navigation
