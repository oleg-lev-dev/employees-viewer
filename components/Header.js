import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Link from '../components/Link';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    return [
      <Head key="head">
        <title>{this.props.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport"/>
      </Head>,
      <Navbar key="nav" bg="light" expand="lg">
        <Container>
          <Row>
            <Navbar.Brand href="/">Employees App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Link route="employees" title="Employees"/>
              </Nav>
            </Navbar.Collapse>
          </Row>
        </Container>
      </Navbar>
    ]
  }
}

export default Header;