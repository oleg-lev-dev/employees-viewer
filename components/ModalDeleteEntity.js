import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropTypes from "prop-types";

export default class ModalDeleteEntity extends Component {
  static propTypes = {
    onDelete: PropTypes.func.isRequired,
    onHide: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
  };

  render() {
    return (
      <Modal show={this.props.show}
             onHide={this.props.onHide}
             aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title>
            Are You sure you want to delete
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <Button variant="danger" onClick={this.props.onDelete}>Delete</Button>
            </Col>
            <Col md="auto">
              <Button variant="secondary" onClick={this.props.onHide}>Cancel</Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    );
  }
}