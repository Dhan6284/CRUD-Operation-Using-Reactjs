import { React, useState } from "react";
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from "./Employees";
import { v4 as uuid } from "uuid";
import { useNavigate } from 'react-router-dom'
function Add(){
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [mobileno, setMobileNo] = useState('');
    const [email, setEmail] = useState('');

    let history = useNavigate();
    const handleSubmit= (e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0,8);

        let a = name,
        b = age,
        c = gender,
        d = mobileno,
        f = email;

        Employees.push({id: uniqueId, Name: a, Age: b, Gender: c, MobileNo: d, Email: f});

        history("/");
    }
    console.log(handleSubmit);
    return(
        <>
        <div className="text-center">
            <h1>Add To The List</h1>
        </div>
        <div>
            <Form className="container mt-5 d-grid gap-2">
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control type="text" placeholder="Enter Name" required onChange = {(e) => setName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAge">
                    <Form.Control type="number" placeholder="Enter Age" required onChange = {(e) => setAge(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGender">
                <Form.Select className="text-muted" type="text" value={gender} required onChange = {(e) => setGender(e.target.value)}>
                <option>Enter Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Transgender</option>
                </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMobileNo">
                    <Form.Control type="number" placeholder="Enter MobileNo" required onChange = {(e) => setMobileNo(e.target.value)} />
                </Form.Group> 
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" required onChange = {(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Button onClick={(e)=> handleSubmit(e)} type="submit">Submit</Button>
            </Form>
        </div>

        </>
    )
}
export default Add