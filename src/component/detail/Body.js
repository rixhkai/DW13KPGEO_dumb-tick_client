import React, {Component} from "react";
import {
 TextField,
 Container,
 InputAdornment,
 Typography,
 ButtonBase,
 Button,
 CardMedia
} from "@material-ui/core";
import {Grid, Divider} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import {withStyles} from "@material-ui/core/styles";
import {LargeCard} from "./View";

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
 space1: {
  display: "flex",
  marginTop: "15px",
  marginBottom: "30px"
 },
 space2: {
  display: "flex",
  marginTop: "15px",
  marginBottom: "30px"
 },
 space3: {
  display: "flex-center",
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
 },
 image: {
  flex: "0 1 auto",
  position: "relative",
  height: "350px",
  width: "350px",
  marginBottom: "16px"
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
       <div className={classes.space}>
        <div className={classes.space1}>
         <LargeCard />
        </div>
        <div className={classes.space2}>
         <Grid container spacing={1} style={{align: "center"}}>
          <Grid
           item
           xs={12}
           sm={6}
           md={6}
           style={{width: "50%", padding: "0px 10px 0px 10px"}}
          >
           <Typography
            variant='h6'
            style={{marginBottom: "20px", fontSize: "20px", fontWeight: "bold"}}
           >
            Event Description
           </Typography>

           <div style={{textAlign: "start"}}>
            <Typography stle={{textAlign: "start"}}>
             lorem bakasadnbasdkjasjdbkasdjhasjd
             asdsadsadsajhdvsahdashvdsahvdhjasvd
             asdsadsajhdsajdsajdsadasdsadasdsaasd
             asdsadsadsadsadsadsadssadsasdsadsa
            </Typography>
           </div>
          </Grid>

          <Divider orientation='vertical' />

          <Grid item xs={12} sm={6} md={5} style={{width: "50%"}}>
           <Typography
            variant='h6'
            style={{marginBottom: "20px", fontSize: "20px", fontWeight: "bold"}}
           >
            Location
           </Typography>
           <Typography style={{marginBottom: "15px"}}>
            jl. bakamon gatari in sekai
           </Typography>

           <CardMedia
            style={{border: "2px", borderColor: "grey"}}
            className={classes.image}
            image='https://gamebrott.com/wp-content/uploads/2016/03/esport-gb-57-768x480.jpg'
           />
           <Typography style={{marginBottom: "20px"}}>Share Event</Typography>

           <div className={classes.space3}>
            <Button
             variant='contained'
             size='large'
             style={{
              marginRight: "30px",
              width: "30px",
              backgroundColor: "grey",
              textTransform: "none"
             }}
            >
             Sport
            </Button>
            <Button
             variant='contained'
             size='large'
             style={{
              marginRight: "30px",
              width: "30px",
              backgroundColor: "grey",
              textTransform: "none"
             }}
            >
             Music
            </Button>
            <Button
             variant='contained'
             size='large'
             style={{
              marginRight: "30px",
              width: "30px",
              backgroundColor: "grey",
              textTransform: "none"
             }}
            >
             Science
            </Button>
           </div>
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
