import React from "react";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import {Divider, Button, Card} from "@material-ui/core";

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
  <div>
   <div style={{border: "10px solid", borderColor: "#ff6666"}}>
    <div
     className={classes.display}
     style={{paddingLeft: "20px", marginTop: "10px"}}
    >
     <div className={classes.align1}>
      <Typography>
       Bill Gates <br /> 2
      </Typography>
     </div>
     <div
      className={classes.align2}
      style={{marginLeft: "auto", paddingRight: "30px"}}
     >
      <Typography style={{fontSize: "12px"}}>
       Face Value Rp. 300.000{" "}
      </Typography>{" "}
      <Typography style={{textAlign: "start"}}>-</Typography>
     </div>
    </div>
    <div className={classes.display} style={{paddingLeft: "20px"}}>
     <div style={{textAlign: "start"}}>
      <Typography variant='h4' className={classes.text1}>
       Raisa Live in Concert
      </Typography>
      <Typography variant='body1'>Fri, 13 Des 2019 at 18:00</Typography>
      <Typography variant='body2'>
       Jl. pintu seratus gelora washington
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
        image='https://www.jakpost.travel/imgfiles/full/133/1333811/dazai-osamu-wallpaper.jpg'
       />
      </div>
     </div>
    </div>
   </div>

   <div
    className={classes.display}
    style={{paddingLeft: "100px", marginTop: "20px"}}
   >
    <div className={classes.align1}>
     <Typography variant='h5' style={{color: "grey", fontWeight: "bold"}}>
      Shopping summary
     </Typography>
     <Typography variant='body2'>Total Price (2 Item)</Typography>
    </div>
    <div
     className={classes.align2}
     style={{marginLeft: "auto", paddingRight: "30px"}}
    >
     <Typography variant='body2' style={{color: "grey", paddingTop: "20px"}}>
      Rp. 600.000
     </Typography>
    </div>
   </div>
   <div style={{marginTop: "20px", marginBottom: "20px"}}>
    <Divider style={{color: "grey", height: "4px"}} />
   </div>

   <div className={classes.display}>
    <div className={classes.align1}>
     <div
      style={{display: "block", justifyContent: "center", paddingLeft: "100px"}}
     >
      <Typography variant='h5' style={{color: "grey"}}>
       Prove of payment
      </Typography>
      <div style={{paddingLeft: "30px", marginTop: "20px"}}>
       <CardMedia
        style={{paddingLeft: "20px"}}
        className={classes.image}
        image='https://www.jakpost.travel/imgfiles/full/133/1333811/dazai-osamu-wallpaper.jpg'
       />
      </div>
     </div>
    </div>
    <div
     style={{
      paddingTop: "20px",
      marginLeft: "auto",
      paddingRight: "20px",
      display: "block"
     }}
    >
     <Button
      variant='contained'
      style={{backgroundColor: "#ff6666", color: "white"}}
     >
      Confirm
     </Button>
     <p style={{paddingLeft: "12px", fontSize: "20px"}}> Pending</p>
    </div>
   </div>
  </div>
 );
};
