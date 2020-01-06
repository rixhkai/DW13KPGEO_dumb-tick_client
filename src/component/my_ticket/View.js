import React from "react";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import {Divider, Button, Card} from "@material-ui/core";
import "../home/homes.css";

const useStyles = makeStyles(theme => ({
 largeCardPost: {
  display: "block",
  marginLeft: "5px",
  "& h1": {
   lineHeight: "20pt",
   fontSize: "15pt",
   variant: "",
   textAlign: "start"
  },
  "& p": {
   lineHeight: "-20pt",
   fontSize: "10pt",
   color: "grey",
   textAlign: "start"
  }
 },
 imageLargeCard: {
  flex: "0 1 auto",
  position: "relative",
  height: "150px",
  width: "100%",
  marginBottom: "16px",
  backgroundOrigin: "border-box!important",
  backgroundSize: "cover!important",
  display: "block!important"
 },
 image: {
  flex: "0 1 auto",
  position: "relative",
  height: "100px",
  width: "100px",
  marginBottom: "16px"
 },
 display: {
  display: "flex"
 },
 align1: {
  textAlign: "start"
 },
 align2: {
  textAlign: "end"
 },
 alignLeft: {
  align: "right"
 },
 text1: {
  fontWeight: "bold"
 }
}));

export const LargeCard = props => {
 const classes = useStyles();
 return (
  <CardActionArea>
   <div
    style={{
     borderLeft: "45px solid",
     borderRight: "45px solid",
     borderTop: "20px solid",
     borderBottom: "20px solid",
     borderColor: "rgb(100, 32, 163)"
    }}
   >
    <div
     className={classes.display}
     style={{paddingLeft: "20px", marginTop: "10px"}}
    >
     <div className={classes.align1}>
      <text className='texts1' style={{color: "black"}}>
       {props.event.createdBy.name} <br /> {props.event.category.id}
      </text>
     </div>
     <div
      className={classes.align2}
      style={{marginLeft: "auto", paddingRight: "30px"}}
     >
      <text className='texts1' style={{fontSize: "12px", color: "black"}}>
       Face Value Rp. {props.total}
      </text>
      <Typography style={{textAlign: "start"}}>-</Typography>
     </div>
    </div>
    <div className={classes.display} style={{paddingLeft: "20px"}}>
     <div style={{textAlign: "start"}}>
      <text
       className='texts1'
       style={{fontSize: "30px", fontWeight: "bolder", color: "black"}}
      >
       {props.event.title}
      </text>
      <Typography variant='body1' style={{color: "black"}}>
       {props.event.start_time} at 18:00
      </Typography>
      <Typography variant='body2' style={{color: "black"}}>
       {props.event.address}
      </Typography>
     </div>
     <div
      className={classes.alignLeft}
      style={{marginLeft: "auto", paddingTop: "20px", paddingRight: "30px"}}
     >
      <div style={{alignItems: "center"}}>
       <CardMedia
        style={{paddingLeft: "20px"}}
        className={classes.image}
        image={props.event.img}
       />
      </div>
     </div>
    </div>
   </div>
  </CardActionArea>
 );
};
