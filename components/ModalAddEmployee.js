import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {Field as FinalField, Form as FinalForm} from 'react-final-form'

const emptyEmployee = {
  firstName: '',
  lastName: '',
  position: '',
  description: '',
};


export default class ModalAddEmployee extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    onHide: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    employee: PropTypes.shape({
      id: PropTypes.number.isRequired,
      firstName: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  };

  onSave = () => {
    this.props.onSave(this.state.newEmployee);
  };

  get title() {
    if (this.isEditing) {
      return `Edit "${this.props.employee.firstName}"`
    }
    return 'Add New Employee';
  };

  get isEditing() {
    return !!this.props.employee;
  }

  render() {
    const {
      props: {
        show,
        onHide,
        employee = emptyEmployee
      }
    } = this;
    return (
      <FinalForm
        initialValues={employee}
        onSubmit={this.props.onSave}
        render={({handleSubmit, pristine, invalid}) => (
          <Modal show={show}
                 onHide={onHide}
                 aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
              <Modal.Title>
                {this.title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>

              <FinalField name="firstName">
                {({input, meta}) => (
                  <Form.Group controlId="formGroupFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text"
                                  placeholder="Enter First Name"
                                  {...input}/>
                  </Form.Group>
                )}
              </FinalField>

              <FinalField name="lastName">
                {({input, meta}) => (
                  <Form.Group controlId="formGroupLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text"
                                  placeholder="Enter Last Name"
                                  {...input}/>
                  </Form.Group>
                )}
              </FinalField>

              <FinalField name="position">
                {({input, meta}) => (
                  <Form.Group controlId="formGroupPosition">
                    <Form.Label>Position</Form.Label>
                    <Form.Control type="text"
                                  placeholder="Enter Position"
                                  {...input}/>
                  </Form.Group>
                )}
              </FinalField>

              <FinalField name="description">
                {({input, meta}) => (
                  <Form.Group controlId="formGroupDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea"
                                  rows="3"
                                  placeholder="Enter Description"
                                  {...input}/>
                  </Form.Group>
                )}
              </FinalField>

            </Modal.Body>
            <Modal.Footer>
              <Button onClick={handleSubmit}>
                {this.isEditing ? 'Save' : 'Submit'}
              </Button>
            </Modal.Footer>
          </Modal>
        )}/>
    );
  }
}
