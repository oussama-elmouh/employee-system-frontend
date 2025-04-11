// src/components/Dashboard.js

import React from 'react';
import {useState,useEffect} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const Dashboard = () => {

    const [employees,setEmployees] = useState([]);
    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/employees");
                const data = await response.json();
    
                setEmployees(data);
            } catch (error) {
                console.error("Error fetching employees:", error.message);
            }
        };
    
        fetchEmployees();
    }, []);
    const handleDelete = async (employeeId) => {
        try {
          const response = await fetch(`http://localhost:8080/api/employee/${employeeId}`, {
            method: "DELETE", // ✅ correct spelling
          });
      
          if (response.ok) {
            // Mettre à jour la liste après suppression
            setEmployees(prevEmployees =>
              prevEmployees.filter(emp => emp.id !== employeeId)
            );
            console.log(`Employee with ID ${employeeId} deleted successfully`);
          } else {
            console.error("Failed to delete employee. Server returned", response.status);
          }
        } catch (error) {
          console.error("Error deleting employee:", error.message);
        }
      };
      
    
  return (
    <>
    <Container className = "mt-5">
        <Row>
            <Col>
            <h1 className = "text-conter">Employees</h1>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Departement</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee)=>(
                        <tr key={employee.id} >
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.phone}</td>
                            <td>{employee.departement}</td>

                            <td>
                                
                                <Button variant="outline-secondary">Update</Button>{" "}
                                <Button variant="outline-danger" onClick={()=>handleDelete(employee.id)}>Delete</Button>
                              
                            </td>
                        </tr>    
                    ))}
                </tbody>
            </Table>
            </Col>
        </Row>
    </Container>
    </>
 

  );
};

export default Dashboard;
