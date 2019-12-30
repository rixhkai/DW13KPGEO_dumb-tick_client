import React from "react";
import Grid from "@material-ui/core/Grid";
import {PrimaryAppBar} from "../navbar/navhome";
import {AppBar} from "@material-ui/core";
import Body from "./Body";

export const Category = () => {
 return (
  <div>
   <div>
    {/** NavBar */}
    <AppBar style={{backgroundColor: "#ff6666"}}>
     <PrimaryAppBar />
    </AppBar>
   </div>

   <div style={{marginTop: "100px"}}>
    <Grid>
     <Body />
    </Grid>
   </div>
  </div>
 );
};
