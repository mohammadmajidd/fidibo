import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import {styled} from '@mui/material/styles';
import {TextField} from "@mui/material";

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: 'green',
    },
})
export default function InputWithIcon() {
    return (
        <Box sx={{'& > :not(style)': {m: 1}}}>
            <FormControl variant="standard">

                <Input
                    disableUnderline={true}
                    color="warning"
                    sx={{
                        backgroundColor: '#f0f0f0',
                        width: '45rem',
                        height:'3rem',
                        marginRight: '1rem',
                        marginLeft: '5rem',
                        borderRadius: '10px',
                        padding:'10px'
                    }}
                    placeholder={'جستجو کتاب الکترونیکی و صوتی،پادکست،نویسنده و...'}
                    id="input-with-icon-adornment"
                    endAdornment={
                        <InputAdornment position="end">
                            <SearchIcon/>
                        </InputAdornment>
                    }
                />
            </FormControl>
        </Box>
    );
}

//