import React from "react";
import Grid from "@material-ui/core/Grid";
import {PrimaryAppBar} from "../navbar/navhome";
import {AppBar} from "@material-ui/core";
import Body from "./Body";
import "../home/homes.css";

//prettier-ignore
export const Details = (props) => {
 return (
  <div>
   <div className="primarys" style={{align: 'center'}}>
    {/** NavBar */}
     <PrimaryAppBar />
   </div>

   <div style={{marginTop: "100px"}}>
    <Grid>
        {console.log(props.match.params.id)}
     <Body id={props.match.params} />
    </Grid>
   </div>
  </div>
 );
};
