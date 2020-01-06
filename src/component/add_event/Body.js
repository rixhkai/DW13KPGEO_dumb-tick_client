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
import LargeCard from "./View";
import {connect} from "react-redux";
import {Category} from "../../redux/action/HomeAct";
import Footer from "../home/footer";

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
       <h1 className='texts'>Add Event</h1>
       <div className={classes.margin} style={{marginTop: "30px"}}>
        <div>
         <Divider style={{height: "5px", backgroundColor: "rgb(27, 1, 54)"}} />
        </div>
        <Container maxWidth='md'>
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
        </Container>
       </div>
      </div>
     </Container>

     {/** footer */}

     <Footer />
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
