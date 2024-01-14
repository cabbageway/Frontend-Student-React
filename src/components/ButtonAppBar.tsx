import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {AppBar} from "@mui/material";
import "./ButtonApp.css"




export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Spring / Mongo Backend mit React Frontend
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
                <div id="flex">
                    <Link to="/addStudents">Add Students (Spring)</Link>

                    <Link to="/showStudents">Show Students (Spring)</Link>

                    <Link to="/addStudentsMongo">Add Students (Mongo)</Link>

                    <Link to="/showStudentsMongo">Show Students (Mongo)</Link>

                </div>
            </AppBar>
        </Box>
        )
}