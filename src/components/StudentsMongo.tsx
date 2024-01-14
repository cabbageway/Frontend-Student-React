import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Container, Paper} from "@mui/material";
import Button from "@mui/material/Button";
import {IStudent} from "../../models/interface";

const StudentMongo = () => {

    const paperStyle = {padding: `50px, 20px`, width:500, margin:"20px, auto"};
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [students, setStudents] = useState<IStudent[]>([]);
    const navigate = useNavigate();


    useEffect(() => {
        // für die Spring Boot Geschichte
        //fetch("http://localhost:8080/student/getAll")
        // für die MongoDB
        fetch("http://localhost:4000/show")
            .then(res => res.json()
                .then(data=>{
                    console.log(data);
                    setStudents(data);
                }))
    },[])

    return (
        <Container>


            <Paper elevation={3} style={paperStyle}>
                <h1 style={{color: "blue"}}>Studentlist</h1>
                <table>
                    <thead>
                    <tr>
                        <th>name</th>
                        <th>adress</th>

                    </tr>
                </thead>
                    <tbody>
                {students.map ((student, index)=> {
                    return <tr key={`key + ${index}`}><td>{student.name}</td><td>{student.address}</td>
                        {/*   <td><u>use password</u></td>true<td></td><td>01.10.22</td>
                        */}
                        </tr>

                })}
                </tbody></table>
            </Paper>
        </Container>
    );
    }

export default StudentMongo;
