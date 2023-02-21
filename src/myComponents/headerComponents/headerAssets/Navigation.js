import React from 'react';

// Bootstrap Module
import { Nav, Navbar } from "react-bootstrap";

import MaterialIcon from 'react-google-material-icons';
import "@fontsource/roboto-slab";

import Logo from "./Logo";

// React Router Dom
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

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
          <Navbar.Brand as={Link} to={"/"}>
            <Logo></Logo>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
            <Nav className="">
              <Nav.Item>
                <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to={"/company"}>Company</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to={"/portfolio"}>Portfolio</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to={"/products"}>Products</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to={"/services"}>Services</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to={"/blog"}>Blog</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
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
            <Route exact path="/" component={Landing} />
            <Route exact path="/Company" component={Company} />
            <Route exact path="/Portfolio" component={Portfolio} />
            <Route exact path="/Products" component={Products} />
            <Route exact path="/Services" component={Services} />
            <Route exact path="/Blog" component={Blog} />
            <Route exact path="/Contact" component={Contact} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default Navigation
