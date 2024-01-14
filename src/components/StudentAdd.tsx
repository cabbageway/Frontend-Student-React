import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Container, Paper} from "@mui/material";
import Button from "@mui/material/Button";
import {IStudent} from "../../models/interface";

const StudentAdd = () => {

    const paperStyle = {padding: `50px, 20px`, width:500, margin:"20px, auto"};
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [students, setStudents] = useState<IStudent[]>([]);
    const navigate = useNavigate();
    const handleClick = (event:React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const student= {name, address};
        console.log(student);
      //   fetch("http://localhost:8080/student/add", {
        fetch("http://localhost:4000/", {
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(student)
        }).then(() => {
            console.log("new student is added");

        })
        navigate("/showStudents"); //Refresh
    }



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

                <Button variant="contained" color="secondary"
                onClick={(event:React.MouseEvent<HTMLButtonElement>) => {
                    handleClick(event);
                }}>Submit</Button>

            </Box>
            </Paper>

        </Container>
    );
    }

export default StudentAdd;
