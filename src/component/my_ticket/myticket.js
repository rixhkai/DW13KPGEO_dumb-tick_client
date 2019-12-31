import React from "react";
import Grid from "@material-ui/core/Grid";
import {PrimaryAppBar} from "../navbar/navhome";
import {AppBar} from "@material-ui/core";
import Body from "./Body";

export const MyTicket = () => {
 return (
  <div>
   <div style={{align: "center"}}>
    {/** NavBar */}
    <AppBar style={{backgroundColor: "#ff6666"}}>
     <PrimaryAppBar />
    </AppBar>
   </div>

   <div style={{marginTop: "120px"}}>
    <Grid>
     <Body />
    </Grid>
   </div>
  </div>
 );
};
