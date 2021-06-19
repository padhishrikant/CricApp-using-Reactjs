import { Component } from 'react';
import { Card, CardContent, Typography, Grid, Box, Button, CardActions } from '@material-ui/core';
import Logo from '../Images/vs.png';
import { withStyles } from '@material-ui/core/styles';
import { getCricketMatchDetails } from '../Service/api';

const styles = {
    date : {
        alignItems: "flex-start",
        marginBottom: 20,
        fontSize: 15
    },
    matchDetails : {
        marginLeft: "auto",
        fontSize: 15
    },
    component : {
        background : "#3f51b5",
        color: "#fff",
        alignItems: "flex-start",
        display: "flex",
        padding: 10
    }
}

//This class is used to return the card with their content present inside
class Score extends Component{

    constructor(props){
        super(props);
        this.state = {
            detail : {}
        }
    }

    //This function is used to get cricket match details and store it into one object
    getDetails(id){
        getCricketMatchDetails(id).then(data => {
            this.setState({detail : this.detail = data});
        }).catch(error => console.log(error));
    }

    render(){

        return(
            <Card style = {{marginTop: 20, width: 700}}>
                <Box className = {this.props.classes.component}>
                    <Typography>{this.props.match["team-1"]} vs {this.props.match["team-2"]}</Typography>
                    <Button onClick = {() => this.getDetails(this.props.match.unique_id)} variant = "contained" size = "small" color = "primary" style = {{marginLeft: "auto", border: '1px solid #fff'}} disabled = {this.props.match.matchStarted ? false : true}>Get Score</Button>
                </Box>
                <CardContent>
                    <Box style = {{display : "flex"}}>
                        <Typography className = {this.props.classes.date}>{new Date(this.props.match.dateTimeGMT).toLocaleString()}</Typography>
                        <Typography className = {this.props.classes.matchDetails}>{this.props.match.matchStarted ? "Match is started" : "Match is not yet started"}</Typography>
                    </Box>
                    <Grid container justify = "center" alignItems = "center">
                        <Grid>
                            <Typography variant = "h5">{this.props.match["team-1"]}</Typography>
                        </Grid>
                        <Grid>
                            <img style = {{width:100, height: 200}} src = {Logo} alt = "vs"></img>
                        </Grid>
                        <Grid>
                            <Typography variant = "h5">{this.props.match["team-2"]}</Typography>
                        </Grid> 
                    </Grid>
                </CardContent>
                <CardActions>
                    <Grid container justify = "center"  style = {{display: "block"}}>
                       <Typography>{this.state.detail.score}</Typography> 
                       <Typography style = {{fontSize: 15}}>Stay Home Stay Safe</Typography>
                    </Grid>
                </CardActions>
            </Card>
        )
    }
}

export default withStyles(styles)(Score)

