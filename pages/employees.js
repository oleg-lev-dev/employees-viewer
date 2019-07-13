import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import {connect} from 'react-redux';

import {employeesDelete, employeesGet, employeesPost, employeesPut} from '../actions/employees';
import Employee from '../components/Employee';
import ModalAddEmployee from '../components/ModalAddEmployee';
import ModalDeleteEntity from '../components/ModalDeleteEntity';
import Page from '../components/Page';

class Employees extends Component {
  state = {
    isAddModalVisible: false,
    isDeleteModalVisible: false,
    activeEmployee: null //employee to delete or edit
  };

  async componentDidMount() {
    this.props.dispatch(employeesGet())
  }

  hideAddModal = () => {
    this.setState({
      isAddModalVisible: false,
      activeEmployee: null
    })
  };

  showAddModal = (event, activeEmployee) => {
    console.log('activeEmployee', activeEmployee);
    this.setState({
      isAddModalVisible: true,
      activeEmployee
    })
  };

  hideDeleteModal = () => {
    this.setState({
      isDeleteModalVisible: false,
      activeEmployee: null
    })
  };

  showDeleteModal = (activeEmployee) => {
    this.setState({
      activeEmployee,
      isDeleteModalVisible: true
    })
  };

  onAddEmployee = (newEmployee) => {
    this.props.dispatch(employeesPost(newEmployee));
    this.hideAddModal();
  };

  onDeleteEmployee = () => {
    this.props.dispatch(employeesDelete(this.state.activeEmployee));
    this.hideDeleteModal();
  };

  onEditEmployee = (employee) => {
    console.log('employee', employee);
    this.props.dispatch(employeesPut(employee));
    this.hideAddModal();
  };

  render() {
    const {
      props: {
        employees,
        loading
      },
      state: {
        isDeleteModalVisible,
        isAddModalVisible,
        activeEmployee
      }
    } = this;
    return (
      <Page title="Employees Page">
        <Row>
          <h2 className="mb-4">Employees List <Button onClick={this.showAddModal}>Create</Button></h2>
        </Row>
        <Row>
          {loading && <div>Loading...</div>}
          {!loading && !employees.length && <div>No data</div>}
          {!loading && employees.length > 0 && <Table striped bordered hover>
            <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Employee</th>
              <th colSpan={3}>Position</th>
            </tr>
            </thead>
            <tbody>
            {employees.map((employee) =>
              <Employee employee={employee}
                        key={employee.id}
                        onEditEmployee={this.showAddModal}
                        onDeleteEmployee={this.showDeleteModal}/>
            )}
            </tbody>
          </Table>}
        </Row>
        <ModalAddEmployee show={isAddModalVisible}
                          employee={activeEmployee}
                          onSave={activeEmployee ? this.onEditEmployee : this.onAddEmployee}
                          onHide={this.hideAddModal}/>

        <ModalDeleteEntity show={isDeleteModalVisible}
                           onDelete={this.onDeleteEmployee}
                           onHide={this.hideDeleteModal}/>

      </Page>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    employees: state.employees.payload,
    loading: state.employees.loading,
  }
};

export default connect(mapStateToProps)(Employees);

