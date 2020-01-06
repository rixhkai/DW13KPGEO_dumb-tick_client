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
import {withStyles} from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import {connect} from "react-redux";
import {Payment} from "../../redux/action/PaymentAct";
import moment from "moment";
import Api from "../../utils/Api";
import Footer from "../home/footer";
import "../home/homes.css";

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
 constructor() {
  super();
  this.state = {
   orderId: "0",
   message: "Pending"
  };
 }

 handleChange = e => {
  this.setState({orderId: e});
  console.log(this.state.orderId);
 };

 handleClick = e => {
  this.handleChange(e.currentTarget.value);
  this.handleUpdate();
  console.log(this.state.orderId + "??");
 };

 handleUpdate = () => {
  const userId = localStorage.getItem("user_id");
  let data = {
   id: this.state.orderId,
   status: "Confirmed"
  };
  Api.put(`order/${userId}`, data).then(res => {
   console.log(res);
   this.setState({message: res.data.message});
  });
 };

 componentDidMount() {
  console.log(this.props.id);
  const {id} = this.props.id;
  this.props.dispatch(Payment(id));
 }
 render() {
  const {classes} = this.props;
  const data = this.props.pay.payment;
  console.log(data.id);
  console.log(this.state.orderId);
  return (
   <div align='center'>
    <Grid>
     <Container maxWidth='lg'>
      <div className={classes.space}>
       <h1 className='texts'>Payment</h1>
       <div className={classes.margin} style={{marginTop: "30px"}}>
        {/* <div style={{backgroundColor: "#ff6666", width: "450px"}}>
         <span
          className='texts'
          style={{
           paddingLeft: "150px",
           paddingTop: "10px",
           paddingBottom: "10px",
           fontSize: "30px"
          }}
         >
          Payment
         </span>
        </div> */}
        <div>
         <Divider style={{height: "3px", backgroundColor: "rgb(20, 2, 41)"}} />
        </div>
        <div
         style={{
          paddingTop: "30px",
          paddingBottom: "30px",
          paddingLeft: "50px",
          paddingRight: "50px",
          backgroundColor: "white"
         }}
        >
         {data.map((item, index) => (
          <div>
           <div
            style={{
             borderLeft: "25px solid",
             borderRight: "25px solid",
             borderTop: "10px solid",
             borderBottom: "10px solid",
             width: "95%",
             borderColor: "rgb(100, 32, 163)"
            }}
           >
            <div
             className={classes.display}
             style={{paddingLeft: "20px", marginTop: "10px"}}
            >
             <div className={classes.align1}>
              <Typography>
               {item.event.createdBy.name} <br /> {item.event.createdBy.id}
              </Typography>
             </div>
             <div
              className={classes.align2}
              style={{marginLeft: "auto", paddingRight: "30px"}}
             >
              <Typography style={{fontSize: "12px"}}>
               Face Value Rp.{" "}
               {parseFloat(item.event.price)
                .toFixed(2)
                .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
              </Typography>{" "}
              <Typography style={{textAlign: "start"}}>-</Typography>
             </div>
            </div>
            <div className={classes.display} style={{paddingLeft: "20px"}}>
             <div style={{textAlign: "start"}}>
              <Typography variant='h4' className={classes.text1}>
               {item.event.title}
              </Typography>
              <Typography variant='body1'>
               {moment(item.event.start_time).format("ddd, DD MMM YYYY")} at
               18:00
              </Typography>
              <Typography variant='body2'>{item.event.url_maps}</Typography>
             </div>
             <div
              className={classes.alignLeft}
              style={{
               marginLeft: "auto",
               paddingTop: "20px",
               paddingRight: "30px"
              }}
             >
              <div style={{alignItems: "center"}}>
               <CardMedia
                style={{paddingLeft: "20px"}}
                className={classes.image}
                image={item.event.img}
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
             <span className='texts1' style={{color: "grey", fontSize: "25px"}}>
              Shoping summary
             </span>
             <Typography variant='body2'>
              Total Price ({item.quantity} Item)
             </Typography>
            </div>
            <div
             className={classes.align2}
             style={{marginLeft: "auto", paddingRight: "30px"}}
            >
             <Typography
              variant='body2'
              style={{color: "grey", paddingTop: "20px"}}
             >
              Rp.{" "}
              {parseFloat(item.total_price)
               .toFixed(2)
               .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
             </Typography>
            </div>
           </div>
           <div style={{marginTop: "20px", marginBottom: "20px"}}>
            <Divider style={{backgroundColor: "black", height: "4px"}} />
           </div>

           <div className={classes.display}>
            <div className={classes.align1}>
             <div
              style={{
               display: "block",
               justifyContent: "center",
               paddingLeft: "100px"
              }}
             >
              <p className='texts1' style={{color: "grey", fontSize: "25px"}}>
               Prove of payment
              </p>
              <div style={{paddingLeft: "30px", marginTop: "20px"}}>
               <CardMedia
                style={{paddingLeft: "20px"}}
                className={classes.image}
                image='https://www.infoperbankan.com/wp-content/uploads/2017/08/e-cash-palsu.jpg'
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
              value={item.id}
              onClick={this.handleClick}
              style={{backgroundColor: "rgb(27, 1, 54)", color: "white"}}
             >
              Confirm
             </Button>
             <p style={{paddingLeft: "8px", fontSize: "20px"}}>
              {" "}
              {this.handleChange ? this.state.message : item.status}
             </p>
            </div>
           </div>
          </div>
         ))}
        </div>
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
  pay: state.PaymentReducer
 };
};

export default connect(mapStateToProps)(withStyles(styles)(Body));
