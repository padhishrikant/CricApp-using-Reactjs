/* eslint-disable */
import { Component } from 'react'; 
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import SportsCricketIcon from '@material-ui/icons/SportsCricket';
import { amber } from '@material-ui/core/colors'

export default class NavBar extends Component{
    render(){
        return(
            <AppBar position = "static">
                <Toolbar>
                    <IconButton>
                        <SportsCricketIcon style = {{color : amber[500]}}></SportsCricketIcon>
                    </IconButton>
                    <Typography>CricApp</Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

/* eslint-enable */