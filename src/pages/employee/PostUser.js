import { useState } from "react";
import "./PostUser.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router"
console.log("PostUser loaded")
const PostUser = () => {
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

  

  const navigate = useNavigate();
  const handelSubmit = async (e) =>{
    e.preventDefault();
    console.log(formData);

    try{
        const respons =await fetch("http://localhost:8080/api/employee",{
            methode : "POST",
            header : {"Content-Type": "application/json"},
            body: JSON.stringify(formaData)
        });

        const data = await Response.json();
        console.log("Employee created: ",data); 
        navigate("/") 
    } catch (error){
        console.log("Error creating cmpolyee:",error.message);
    }
  }

  return (
     
    <div className="centre-form">
      <h1>Post New Employee</h1>
      <Form onSubmit={handelSubmit}>
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
          Post Employee
        </Button>
      </Form>
    </div>
  );
};

export default PostUser;
