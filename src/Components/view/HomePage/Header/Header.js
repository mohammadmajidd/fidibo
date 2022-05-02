import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import fidibo from '../../../../assets/header-logo.svg'
import user from '../../../../assets/icons/user.svg'
import shopping from '../../../../assets/icons/shopping.svg'
import gift from '../../../../assets/icons/gift.svg'
import SearchBox from "./SearchBox";
import {Button, useScrollTrigger} from "@mui/material";
import NavData from "./navData";
import { styled } from '@mui/material/styles';
import {blue, green, red} from "@mui/material/colors";
const Root = styled('div')(({ theme }) => ({
    // [theme.breakpoints.down('xs')]: {
    //     width:'100px'
    // },
    // [theme.breakpoints.down('sm')]: {
    //     width:'100px'
    // },
    // [theme.breakpoints.down('md')]: {
    //     width:'100px'
    // },
    // [theme.breakpoints.up('lg')]: {
    //     width:'100px'
    // },
    // [theme.breakpoints.up('xl')]: {
    //     width:'1200px'
    // },
}));
function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}
export default function Header(props) {
    return (
        <ElevationScroll {...props}>
            <AppBar color={'white'} position="fixed">
                <Toolbar>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyItems: 'center',
                        justifyContent: 'center',
                        alignContent: 'center',
                        margin: 'auto',
                        //
                    }}>
                        <Root sx={{display: 'flex', alignItems: 'center'}}>
                            <img src={fidibo}/>
                            <SearchBox/>
                            <img style={{width: '1.5rem'}} src={gift}/>
                            <img style={{width: '1.65rem'}} src={shopping}/>
                            <img style={{width: '1.5rem'}} src={user}/>
                            <Button sx={{color: '#8a8a8a'}}>ورود و ثبت نام</Button>
                        </Root>
                        <NavData/>
                    </Box>
                </Toolbar>
            </AppBar>

        </ElevationScroll>
    );
}
