import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {useField, useForm} from 'react-final-form-hooks';
import PropTypes from 'prop-types';

import {TEmployee} from '../helpers/types';

const emptyEmployee = {
  firstName: '',
  lastName: '',
  position: '',
  description: '',
};

function ModalAddEmployee({onSave, onHide, show, employee}) {
  const {form, handleSubmit, values, pristine, submitting} = useForm({
    onSubmit: onSave,
    initialValues: employee || emptyEmployee
    //validate // a record-level validation function to check all form values
  });
  const isEditing = !!employee;
  const title = isEditing ? `Edit "${employee.firstName}"` : 'Add New Employee';

  const firstName = useField('firstName', form);
  const lastName = useField('lastName', form);
  const position = useField('position', form);
  const description = useField('description', form);

  return (
    <Modal show={show}
           onHide={onHide}
           aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title>
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="formGroupFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text"
                        placeholder="Enter First Name"
                        {...firstName.input}/>
        </Form.Group>

        <Form.Group controlId="formGroupLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text"
                        placeholder="Enter Last Name"
                        {...lastName.input}/>
        </Form.Group>

        <Form.Group controlId="formGroupPosition">
          <Form.Label>Position</Form.Label>
          <Form.Control type="text"
                        placeholder="Enter Position"
                        {...position.input}/>
        </Form.Group>

        <Form.Group controlId="formGroupDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea"
                        rows="3"
                        placeholder="Enter Description"
                        {...description.input}/>
        </Form.Group>
      </Modal.Body>

      <Modal.Footer>
        <Button disabled={pristine || submitting} onClick={handleSubmit}>Save</Button>
      </Modal.Footer>
    </Modal>
  )
}

ModalAddEmployee.propTypes = {
  onSave: PropTypes.func.isRequired,
  onHide: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  employee: TEmployee
};

export default ModalAddEmployee;