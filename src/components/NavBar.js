import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";

/**
 *
 * Renders top navbar and shows the current signed in user.
 */
export default class NavBar extends Component {
  state = {};
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Chat</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Navbar.Text>
            Signed in as:&nbsp;
            <span className="signed-in-user">{(this.props.signedInUser || {}).name}</span>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
