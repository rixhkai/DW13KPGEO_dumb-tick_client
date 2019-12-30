import React, {Component} from "react";
import {
 TextField,
 Container,
 InputAdornment,
 Typography,
 ButtonBase,
 Button
} from "@material-ui/core";
import {Grid, Divider} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import {withStyles} from "@material-ui/core/styles";
import {LargeCard} from "../home/View";

const styles = theme => ({
 margin: {
  fontSize: "30px",
  fontWeight: "bold",
  color: "grey",
  textAlign: "start"
 },
 space: {
  marginTop: "40px",
  marginBottom: "40px"
 },
 space2: {
  display: "flex",
  marginTop: "15px",
  marginBottom: "30px"
 },
 spacebot: {
  display: "flex-center",
  marginTop: "60px"
 },
 text: {
  marginTop: "30px",
  marginRight: "30px",
  textAlign: "start"
 }
});

class Body extends Component {
 render() {
  const {classes} = this.props;
  return (
   <div align='center'>
    <Grid>
     <Container maxWidth='lg'>
      <div className={classes.space}>
       <Typography className={classes.margin}>Music</Typography>
       <div className={classes.space2}>
        <Typography style={{color: "grey", marginRight: "30px"}}>
         Sort by :{" "}
        </Typography>
        <TextField
         style={{marginRight: "25px"}}
         placeholder='Choose Date'
         InputProps={{
          endAdornment: (
           <InputAdornment position='start'>
            <SearchIcon />
           </InputAdornment>
          )
         }}
        />
        <TextField
         placeholder='Choose Location'
         InputProps={{
          endAdornment: (
           <InputAdornment position='start'>
            <SearchIcon />
           </InputAdornment>
          )
         }}
        />
       </div>
       <div className={classes.space}>
        <div className={classes.space2}>
         <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={4}>
           <LargeCard />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
           <LargeCard />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
           <LargeCard />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
           <LargeCard />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
           <LargeCard />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
           <LargeCard />
          </Grid>
         </Grid>
        </div>

        <div className={classes.space2}>
         <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={4}>
           <LargeCard />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
           <LargeCard />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
           <LargeCard />
          </Grid>
         </Grid>
        </div>
       </div>
      </div>
     </Container>

     {/** footer */}

     <Grid align='start' style={{backgroundColor: "#ff6666"}}>
      <Container>
       <Container maxWidth='lg' style={{display: "flex", textAlign: "start"}}>
        <Grid
         item
         style={{
          margin: "0px auto 0px auto",
          marginRight: "30px",
          maxWidth: "400px"
         }}
        >
         <Typography className={classes.text} style={{color: "white"}}>
          Discover valve corporate
         </Typography>
         <Typography variant='body2' style={{color: "white"}}>
          Dota gameplay has massive change in late 2019... where's the whole
          gameplay change.. there's outpost and new item on jungle
         </Typography>
         <br />
         <br />
        </Grid>

        <Grid
         item
         style={{
          margin: "0px auto 0px auto",
          marginRight: "30px",
          maxWidth: "400px",
          textAlign: "start"
         }}
        >
         <Typography className={classes.text} style={{color: "white"}}>
          Discover valve corporate
         </Typography>
         <Typography variant='body2' style={{color: "white"}}>
          Dota gameplay has massive change in late 2019... where's the whole
          gameplay change.. there's outpost and new item on jungle
         </Typography>
         <br />
         <br />
        </Grid>

        <Grid
         item
         style={{
          margin: "0px auto 0px auto",
          marginRight: "30px",
          maxWidth: "400px"
         }}
        >
         <Typography className={classes.text} style={{color: "white"}}>
          Discover valve corporate
         </Typography>
         <Typography variant='body2' style={{color: "white"}}>
          Dota gameplay has massive change in late 2019... where's the whole
          gameplay change.. there's outpost and new item on jungle
         </Typography>
         <br />
         <br />
        </Grid>
       </Container>
       <Divider
        variant='fullwidth'
        style={{width: "100%", backgroundColor: "white"}}
       />
       <br />
       <Grid style={{color: "white"}}>
        <Typography variant='body2' fontWight='bold'>
         {" "}
         Copyright 2018 Dumbtick
        </Typography>

        <Typography style={{color: "white"}} variant='h6' align='right'>
         About &nbsp; &nbsp; &nbsp; Help &nbsp; &nbsp; &nbsp; Legal
        </Typography>
       </Grid>
       <br />
      </Container>
     </Grid>
    </Grid>
   </div>
  );
 }
}

export default withStyles(styles)(Body);
