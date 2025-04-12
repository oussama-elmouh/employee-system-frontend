import './UpdateUser.css';
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useParams } from 'react-router-dom';




const UpdateUser = ()=>{
    const{id} = useParams();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        departement: "",
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      useEffect(()=>{
        const fetchEmployee = async () =>{
            try{
                const response = await fetch(`http://localhost:8080/api/employee/${id}`);
                const data = await response.json();
                setFormData(data);
            }catch(error){
                console.error("Error fetching user:", error.message);
            }
            
        }
        fetchEmployee();
      },[id])

return (
    <div className="centre-form">
    <h1>Edit Employee</h1>
    <Form >
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group controlId="formPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="text"
          name="phone"
          placeholder="Enter phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group controlId="formDepartement">
        <Form.Label>Departement</Form.Label>
        <Form.Control
          type="text"
          name="departement"
          placeholder="Enter departement"
          value={formData.departement}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="w-100 mt-3">
        Edit Employee
      </Button>
    </Form>
  </div>
)
}
export default UpdateUser;
