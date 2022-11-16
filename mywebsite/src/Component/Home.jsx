import React from "react";
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from "./Employees";
import {Link, useNavigate} from 'react-router-dom'
function Home(){
    let history = useNavigate();
    const handleEdit = (id, name, age, gender, mobileno, email) => {
        localStorage.setItem('Name',name);
        localStorage.setItem('Age',age);
        localStorage.setItem('Gender',gender);
        localStorage.setItem('MobileNo',mobileno);
        localStorage.setItem('Email',email);
        localStorage.setItem('Id',id);
    } 
    const handleDelete = (id) => {
        var index = Employees.map(function(e){
            return e.id
        }).indexOf(id);

        Employees.splice(index, 1);

        history('/');
    }
    return(
        <>
        <div className="text-center">
            <h1>CRUD OPERATION</h1>
        </div>
        <div className="container mt-5">
            <Table className="text-center" striped bordered hover size="sm">
                <thead>
                    <tr>    
                        <th>
                            Name
                        </th>
                        <th>
                            Age
                        </th>
                        <th>
                            Gender
                        </th>
                        <th>
                            Mobile No
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Employees && Employees.length > 0
                        ?
                        Employees.map((item) => {
                            return(
                                <tr>
                                    <td>
                                        {item.Name}
                                    </td>
                                    <td>
                                        {item.Age}
                                    </td>
                                    <td>
                                        {item.Gender}
                                    </td>
                                    <td>
                                        {item.MobileNo}
                                    </td>
                                    <td>
                                        {item.Email}
                                    </td>
                                    <td>
                                        <Link to={'/edit'}>
                                        <Button onClick={() =>handleEdit(item.id, item.Name, item.Age, item.Gender, item.MobileNo, item.Email)}>
                                            Edit
                                        </Button>
                                        </Link>
                                        &nbsp;
                                        <Button onClick={() => handleDelete(item.id)}>
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            )
                        })
                        :
                        "No Data Available"
                    }
                </tbody>
            </Table>
            <br/>
            <Link className="d-grid gap-2" to="/create">
            <Button  size="lg">
                Create
            </Button> 
            </Link>
        </div>
        </>
    )
}
export default Home