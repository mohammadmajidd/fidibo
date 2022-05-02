import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";

export default function ProductCard({item}) {
    return (
        <Box >
            <Card elevation={0} sx={{
                width: '255px',
                height: '355px',
                // paddingTop:'50px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: "center",
            }}>
                <CardMedia sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: "flex-start",justifyItems:'flex-end',alignContent:'flex-start'}}>
                    <img width={'165px'} height={item.isPodcast ? '165px' : '260px'} alt={item.author}
                         src={item.imageSrc}/>
                </CardMedia>
                <CardContent component={'div'} sx={{
                    width:'155px',
                    height:'75px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                }}>
                    <Typography sx={{overflow:"clip"}}>
                        {item.title.length>20?item.title.substring(0,33).padEnd(35,'.'):item.title}
                    </Typography>
                    <Typography sx={{fontSize:'0.8rem'}} color="text.secondary">
                        {item.author}
                    </Typography>
                </CardContent>
            </Card>
        </Box>

    );
}
