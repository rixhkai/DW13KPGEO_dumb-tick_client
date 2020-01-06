import React, {Component} from "react";
import {Container, Typography, Button, Avatar} from "@material-ui/core";
import {Grid, Divider} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import {connect} from "react-redux";
import moment from "moment";
import Api from "../../utils/Api";
import LargeCard from "./View";
import {Profile} from "../../redux/action/Profile";
import EditProfile from "./EditProfile";
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
});

class Body extends Component {
 //  constructor() {
 //   super();
 //   this.state = {
 //    orderId: "0",
 //    message: "Pending"
 //   };
 //  }

 //  handleChange = e => {
 //   this.setState({orderId: e});
 //   console.log(this.state.orderId);
 //  };

 //  handleClick = e => {
 //   this.handleChange(e.currentTarget.value);
 //   this.handleUpdate();
 //   console.log(this.state.orderId + "??");
 //  };

 //  handleUpdate = () => {
 //   const userId = localStorage.getItem("user_id");
 //   let data = {
 //    id: this.state.orderId,
 //    status: "Confirmed"
 //   };
 //   Api.put(`order/${userId}`, data).then(res => {
 //    console.log(res);
 //    this.setState({message: res.data.message});
 //   });
 //  };

 componentDidMount() {
  //   console.log(this.props.id);
  const {id} = this.props.id;
  this.props.dispatch(Profile(id));
 }
 render() {
  const {classes} = this.props;
  const user = {
   name: localStorage.getItem("name"),
   phone: localStorage.getItem("phone"),
   email: localStorage.getItem("email"),
   img: localStorage.getItem("image")
  };
  const data = this.props.data.fav;
  return (
   <div align='center'>
    <Grid>
     <Container maxWidth='lg'>
      <div className={classes.space}>
       <h1 className='texts' style={{textAlign: "start"}}>
        Profile
       </h1>
       <div
        className={classes.margin}
        style={{marginTop: "30px", display: "flex", marginBottom: "120px"}}
       >
        <div style={{width: "450px"}}>
         {/* <Typography
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
         </Typography> */}
         <text
          className='texts1'
          style={{fontWeight: "bolder", fontSize: "35px", color: "black"}}
         >
          {user.name}
         </text>
         {/* <Typography
          variant='h6'
          style={{marginTop: "10px", paddingBottom: "2px"}}
         >
          545853tanggal
         </Typography> */}
         {/* <Typography variant='h6' style={{paddingBottom: "2px"}}>
          {user.phone}
         </Typography> */}
         <br />
         <text
          className='texts1'
          style={{paddingBottom: "2px", fontSize: "20px", color: "black"}}
         >
          {user.email}
         </text>
        </div>
        <div style={{align: "right"}}>
         <EditProfile />
        </div>
        <div style={{marginLeft: "auto"}}>
         <Avatar
          style={{width: "200px", height: "200px", align: "right"}}
          src={user.img}
         />
        </div>
       </div>
       <h1
        className='texts'
        style={{
         color: "rgb(27, 1, 54)",
         textAlign: "start",
         marginBottom: "20px"
        }}
       >
        Favorites
       </h1>
       <div className={classes.space2}>
        <Grid container spacing={1}>
         {data.map((item, index) => (
          <Grid item xs={12} sm={6} md={4}>
           <LargeCard index={index} id={item.id} event={item.events} />
          </Grid>
         ))}
        </Grid>
       </div>
       <div>
        <Divider style={{height: "3px", backgroundColor: "rgb(27, 1, 54)"}} />
       </div>
       <div
        style={{
         paddingTop: "30px",
         paddingBottom: "30px",
         paddingLeft: "50px",
         paddingRight: "50px",
         backgroundColor: "white"
        }}
       ></div>
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
  data: state.ProfileReducer
 };
};

export default connect(mapStateToProps)(withStyles(styles)(Body));
