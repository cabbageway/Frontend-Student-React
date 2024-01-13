import React, {useEffect, useState} from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Container, Paper} from "@mui/material";
import Button from "@mui/material/Button";
import {IStudent} from "../../models/interface";

const Student = () => {

    const paperStyle = {padding: `50px, 20px`, width:500, margin:"20px, auto"};
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [students, setStudents] = useState<IStudent[]>([]);

    const handleClick = (event:React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const student= {name, address};
        console.log(student);
        fetch("http://localhost:8080/student/add", {
       // fetch("http://localhost:4000/", {
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(student)
        }).then(() => {
            console.log("new student is added");

        })
    }

    useEffect(() => {
        // für die Spring Boot Geschichte
        fetch("http://localhost:8080/student/getAll")
        // fetch("http://localhost:4000/show")
            .then(res => res.json()
                .then(data=>{
                    console.log(data);
                    setStudents(data);
                }))
    },[])

    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
            <Box component="form" sx={{
            '& > :not(style)': { m: 1},
        }} noValidate autoComplete="off">
                <h1 style={{color: "blue"}}>Student add</h1>
        <TextField id="outlined-basic" label="StudentName" variant="outlined"
        value={name} onChange={(e)=> {
            setName(e.target.value)
        }}/>
                <TextField id="outlined-basic" label="StudentAdress" variant="outlined"
                           value={address} onChange={(e)=> {
                    setAddress(e.target.value)
                           }}/>
                {/*
                <TextField id="outlined-basic" label="inskribiert / exmatrikuliert" variant="outlined"
                           value={name} onChange={(e)=> {
                    setAddress(e.target.value)
                }}/>

                <TextField type="date" id="outlined-basic" label="Datum" variant="outlined"
                           value={address} onChange={(e)=> {
                    setAddress(e.target.value)
                }}/>

                <TextField type="password" id="outlined-basic" label="password" variant="outlined"
                           value={address} onChange={(e)=> {
                    setAddress(e.target.value)
                }}/>
                <TextField type="password" id="outlined-basic" label="password reply" variant="outlined"
                           value={name} onChange={(e)=> {
                    setAddress(e.target.value)
                }}/>
                 */}
                <Button variant="contained" color="secondary"
                onClick={(event:React.MouseEvent<HTMLButtonElement>) => {
                    handleClick(event);
                }}>Submit</Button>

            </Box>

            </Paper>

            <Paper elevation={3} style={paperStyle}>
                <h1 style={{color: "blue"}}>Studentlist</h1>
                <table>
                    <thead>
                    <tr>
                        <th>name</th>
                        <th>adress</th>
                        <th>abgelegte Prüfungen</th>
                        <th>inskribiert</th>
                        <th>seit</th>
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

export default Student;
