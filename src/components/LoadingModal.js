import React, { Component } from "react";
import { FiRefreshCcw } from "react-icons/fi";
import Modal from "react-bootstrap/Modal";

/**
 *
 * Renders a loader modal.
 */

export default class LoadingModal extends Component {
  state = {};
  render() {
    return (
      <Modal show={this.props.show}>
        <Modal.Body>
          <h1 className="text-center">
            <FiRefreshCcw glyph="refresh" />
          </h1>
          <h5 className="text-center">Loading...</h5>
        </Modal.Body>
      </Modal>
    );
  }
}
