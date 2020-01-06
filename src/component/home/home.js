import React from "react";
import Grid from "@material-ui/core/Grid";
import {PrimaryAppBar} from "../navbar/navhome";
import {AppBar} from "@material-ui/core";
import Body from "./Body";
import "./homes.css";

export const Home = () => {
 return (
  <div>
   <div className='primarys' style={{align: "center"}}>
    {/** NavBar */}
    <PrimaryAppBar />
   </div>

   <div style={{marginTop: "100px"}}>
    <Grid>
     <Body />
    </Grid>
   </div>
  </div>
 );
};
