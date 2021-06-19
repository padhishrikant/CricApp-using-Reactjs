/* eslint-disable */
import { useEffect, useState } from 'react';
import { Tabs, Tab } from '@material-ui/core';
import { Typography, Box } from '@material-ui/core';
import { getCricketMatches } from '../Service/api.js';
import  Score  from '../Component/Score.js';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


function TabComponent(){

    const [value, setValue] = useState(0);
    const [matches, setMatches] = useState([]);

    //This is React hook type which is use dto call only once when page reload
    useEffect(() => {
        getCricketMatches().then(data => {
            setMatches(data.matches);
            console.log(matches);
        }).catch(error => console.log(error));
    }, []);

    const useStyles = makeStyles({
        table: {
          minWidth: 650,
          marginTop: 20,
          marginBottom: 20,
          alignItems: "center",
          justify: "center"
        },
    });
    
    //This function is used to create data objects
    function createData(name) {
        return { name };
    }
      
    const rows = [
        createData('India'),
        createData('England'),
        createData('New Zealand'),
        createData('Australia'),
        createData('South Africa'),
        createData('West Indies'),
        createData('Pakistan'),
        createData('Sri Lanka'),
        createData('bangladesh'),
        createData('Afganistan'),
        createData('Ireland'),
        createData('Zimbabwe')
    ];

    //This function is used to create Teams table
    function BasicTable() {
        const classes = useStyles();
      
        return (
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align = "center" style = {{fontSize: 20}}>International Teams</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row" align = "center">
                      {row.name}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        );
    }

    //This function is used to change the value of tabs
    const handleChange = (e, value) => {
        setValue(value);
    };

    //This function is used to append particular Cricket API data to different tabs which belongs to them
    function TabPanel(props){
        return (
            <Box>
                {props.value === props.index && (
                    <Box>
                        <Typography>{props.children}</Typography>
                    </Box>
                )}
            </Box>
        );
    };

    //This function is used to get API data and seperate this by One day Matches, T20 Matches and Test Matches
    function getData(type){
        return (
            matches.map(match => {
                return(
                    <> 
                        {match.type === type ? 
                            <Box alignItems = "Center" display = "flex" justifyContent = "Center">
                                <Score match = {match} key = {match.unique_id} />
                            </Box>
                        : ""}
                    </>
                )
            })
        );
    }


    //This is return the DOM elements
    return (
        <>
            <Tabs value = {value} onChange = {handleChange} indicatorColor = "primary" centered>
                <Tab label = "One Day"/>
                <Tab label = "Twenty20"/>
                <Tab label = "Test"/>
                <Tab label = "Teams"/>
                <Tab label = "Players"/>
            </Tabs>
            <TabPanel index = {0} value = {value}>
                { getData("") }
            </TabPanel>
            <TabPanel index = {1} value = {value}>
                { getData("Twenty20") }
            </TabPanel>
            <TabPanel index = {2} value = {value}>
                { getData("Tests") }
            </TabPanel>
            <TabPanel index = {3} value = {value}>
                { BasicTable() }
            </TabPanel>
            <TabPanel index = {4} value = {value}>
                
            </TabPanel>
        </>
    );
}

export default TabComponent