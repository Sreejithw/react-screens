import React from 'react';
import {  makeStyles } from '@material-ui/core/styles';
import {CssBaseline, AppBar, Tabs, Tab, Box, Paper, Toolbar, Typography} from '@material-ui/core';
import PropTypes from 'prop-types';
import Content from './content/Content.js';
import Terrain from './terrain/Terrain.js';

import DetailsPage from './content/DetailsPage.js';
import QuizStore from './QuizStore';

const useStyles = makeStyles(theme => ({ 
    appBar: {
        position: 'relative',
      },
      paperContainer: {
        backgroundImage: `url(${Image})`
      },
      layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
          width: 1800,
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      },
      paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
          marginTop: theme.spacing(6),
          marginBottom: theme.spacing(6),
          padding: theme.spacing(3),
        },
      }
}));


//-----------------Tabs Panel---------------------//
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  //---------------Tabs Panel End---------------//

export default function DashBoard(){
    const classes = useStyles();
    //UseStates for Tabs
    const [value, setValue] = React.useState(0);
    
    //Handle Changes for Tabs
    const handleTabChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="absolute" color="default" className={classes.appBar}>
                <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>
                    Company name
                </Typography>
                </Toolbar>
            </AppBar>
            <main className={classes.layout} >
                <Paper className={classes.paper}>
                <AppBar position="static">
                    <Tabs value={value} onChange={handleTabChange} aria-label="simple tabs example">
                        <Tab label="Details" {...a11yProps(0)} />
                        <Tab label="Terrain" {...a11yProps(1)} />
                        <Tab label="Content" {...a11yProps(2)} />
                        <Tab label="Deploy" {...a11yProps(3)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                    <DetailsPage/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Terrain />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <QuizStore>
                      <Content />
                    </QuizStore>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    Content 4
                </TabPanel>
                </Paper>   
            </main>
        </React.Fragment>
    );
}