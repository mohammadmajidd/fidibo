import React from 'react';
import NavBar from "./NavBar";
import {Button} from "@mui/material";
import Box from "@mui/material/Box";

const NavData = () => {
    return (
        <Box sx={{display: 'flex', alignItems: 'baseline', alignContent: 'center',justifyContent:'space-between'}}>
            <NavBar/>
            <Button sx={{backgroundColor: '#28c5cc', color: '#ffffff',width:'150px',fontSize:'16px'}}>دانلود اپلیکیشن</Button>
        </Box>
    );
};

export default NavData;