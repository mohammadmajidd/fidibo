import React from 'react';
import radioGooshe from '../../../../../../assets/singleBanners/radioGooshe.jpg'
import Box from "@mui/material/Box";

const ShingleBanner = ({src}) => {
    return (
        <Box sx={{display:'flex',justifyContent:'center'}}>
            <img src={src}/>
        </Box>
    );
};

export default ShingleBanner;