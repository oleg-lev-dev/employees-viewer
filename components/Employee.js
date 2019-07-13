import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

export default class Employee extends Component {
  static propTypes = {
    employee: PropTypes.shape({
      id: PropTypes.number.isRequired,
      firstName: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
    }).isRequired,
    onDeleteEmployee: PropTypes.func.isRequired,
    onEditEmployee: PropTypes.func.isRequired
  };

  onDeleteEmployee = () => {
    this.props.onDeleteEmployee(this.props.employee)
  };

  onEditEmployee = (event) => {
    this.props.onEditEmployee(event, this.props.employee)
  };

  render() {
    const {
      props: {
        employee
      }
    } = this;
    return (
      <tr>
        <td>{employee.id}</td>
        <td>{employee.firstName}</td>
        <td>{employee.lastName}</td>
        <td>{employee.position}</td>
        <td className="text-center">
          <Button onClick={this.onEditEmployee}>Edit</Button>
        </td>
        <td className="text-center">
          <Button
            variant="danger"
            onClick={this.onDeleteEmployee}>
            Delete
          </Button>
        </td>
      </tr>
    )
  }
}