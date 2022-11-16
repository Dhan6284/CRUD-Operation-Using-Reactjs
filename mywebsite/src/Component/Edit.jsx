import { React, useState, useEffect } from "react";
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from "./Employees";
import { useNavigate } from 'react-router-dom'

function Edit(){
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [mobileno, setMobileNo] = useState("");
    const [email, setEmail] = useState("");
    const [id, setId] = useState("");

    let history = useNavigate();

    var index = Employees.map(function(e){
        return e.id
    }).indexOf(id);

    const handleSubmit= (e) => {
        e.preventDefault();
        let a = Employees[index];
        a.Name = name;
        a.Age = age;
        a.Gender = gender;
        a.MobileNo = mobileno;
        a.Email = email;

        history("/");
    }

    useEffect(() =>{
        setName(localStorage.getItem('Name'))
        setAge(localStorage.getItem('Age'))
        setGender(localStorage.getItem('Gender'))
        setMobileNo(localStorage.getItem('MobileNo'))
        setEmail(localStorage.getItem('Email'))
        setId(localStorage.getItem('Id'))
    },[])

    return(
        <>
        <div className="text-center">
            <h1>Edit The Person List</h1>
        </div>
        <div>
            <Form className="container mt-5 d-grid gap-2">
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control type="text" placeholder="Enter Name" value={name} required onChange = {(e) => setName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAge">
                    <Form.Control type="text" placeholder="Enter Age" value={age} required onChange = {(e) => setAge(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGender">
                <Form.Select className="text-muted" type="text" placeholder="Enter Gender" value={gender} required onChange = {(e) => setGender(e.target.value)}>
                <option>Enter Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Transgender</option>
                </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMobileNo">
                    <Form.Control type="text" placeholder="Enter MobileNo" value={mobileno} required onChange = {(e) => setMobileNo(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail formBasicEmail">
                    <Form.Control type="text" placeholder="Enter Email" value={email} required onChange = {(e) => setEmail(e.target.value)} />
                </Form.Group> 
                <Button onClick={(e)=> handleSubmit(e)} type="submit">Update</Button>
            </Form>
        </div>

        </>
    )
}
export default Edit