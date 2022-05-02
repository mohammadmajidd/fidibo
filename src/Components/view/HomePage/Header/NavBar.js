import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import FeedIcon from '@mui/icons-material/Feed';
import StarIcon from '@mui/icons-material/Star';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import TabContent from "./TabContent";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{width: '100%'}}>
            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab icon={<HomeIcon/>} label="خانه" {...a11yProps(0)} />
                    <Tab icon={<MenuBookIcon/>} label="کتاب الکترونیکی و صوتی" {...a11yProps(1)} />
                    <Tab icon={<PodcastsIcon/>} label="پادکست" {...a11yProps(2)} />
                    <Tab icon={<FeedIcon/>} label="مجله" {...a11yProps(2)} />
                    <Tab icon={<StarIcon/>} label="فیدی پلاس" {...a11yProps(2)} />
                </Tabs>
            </Box>
        </Box>
    );
}
