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
import {LargeCard} from "./View";
import {connect} from "react-redux";
import {Category} from "../../redux/action/HomeAct";

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
  display: "flex-center",
  marginTop: "15px",
  marginBottom: "30px",
  flexWrap: "wrap"
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
 textP: {
  textAlign: "start",
  width: "300px",
  backroundColor: "#ff6666",
  color: "white"
 }
});

class Body extends Component {
 componentDidMount() {
  console.log("get category");
  this.props.dispatch(Category());
 }
 render() {
  const {classes} = this.props;
  return (
   <div align='center'>
    <Grid>
     <Container maxWidth='lg'>
      <div className={classes.space}>
       <Typography className={classes.margin} style={{color: "#ff6666"}}>
        Payment
       </Typography>
       <div className={classes.margin} style={{marginTop: "30px"}}>
        <div style={{backgroundColor: "#ff6666", width: "450px"}}>
         <Typography
          className={classes.textP}
          variant='h4'
          style={{
           paddingLeft: "150px",
           paddingTop: "10px",
           paddingBottom: "10px",
           fontSize: "30px"
          }}
         >
          Payment
         </Typography>
        </div>
        <div>
         <Divider style={{height: "3px", backgroundColor: "#ff6666"}} />
        </div>
        <div
         style={{
          paddingTop: "30px",
          paddingBottom: "30px",
          paddingLeft: "50px",
          paddingRight: "50px"
         }}
        >
         <LargeCard />
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

const mapStateToProps = state => {
 return {
  cates: state.HomeReduces
 };
};

export default connect(mapStateToProps)(withStyles(styles)(Body));
