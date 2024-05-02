
import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


const useStyles = styled({
    root: {
      flexGrow: 1,
    },
    tab: {
      fontSize: 12,
      color: "#5f6368",
      textTransform: "none", // Set textTransform to none
      height: 10,
      fontWeight: "600",
      fontFamily: 'Google Sans, Roboto, Arial, sans-serif',
    },
    tabs: {
      height: 10
    }
  })

function CenteredTabs() {
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <Tabs
            className={classes.tabs}
            indicateColor='primary'
            textColor='primary'
            centered 
            >
                <Tab label="Questions" className={classes.tab} >
                </Tab>
                <Tab label="Response" className={classes.tab} >
                </Tab>
            </Tabs>
        </Paper>
    )
}

export default CenteredTabs;