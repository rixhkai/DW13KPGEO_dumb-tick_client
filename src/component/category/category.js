import React from "react";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import {PrimaryAppBar} from "../navbar/navhome";
import {AppBar, Container, Divider, Typography} from "@material-ui/core";
import Body from "./Body";
import "../home/homes.css";

const useStyles = makeStyles(theme => ({
 text: {
  marginTop: "30px",
  marginRight: "30px",
  textAlign: "start"
 }
}));

export const Category = props => {
 const classes = useStyles();

 return (
  <div>
   <div className='primarys'>
    {/** NavBar */}
    <PrimaryAppBar />
   </div>

   <div style={{marginTop: "100px"}}>
    <Grid>
     <Body id={props.match.params} />
    </Grid>
   </div>
  </div>
 );
};
