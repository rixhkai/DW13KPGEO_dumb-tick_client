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
import {MyTicket} from "../../redux/action/MyTicketAct";
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
 }
});

class Body extends Component {
 componentDidMount() {
  console.log("get category");
  const {id} = this.props.id;
  this.props.dispatch(MyTicket(id, "approved"));
 }
 render() {
  const {classes} = this.props;
  const data = this.props.tick.ticket;
  return (
   <div align='center'>
    <Grid>
     <Container maxWidth='lg'>
      <div className={classes.space}>
       <h1 className='texts'>My Ticket</h1>
       <div className={classes.margin} style={{marginTop: "30px"}}>
        <div>
         <Divider style={{height: "5px", backgroundColor: "rgb(27, 1, 54)"}} />
        </div>
        {data.map((item, index) => (
         <div
          style={{
           align: "center",
           paddingTop: "30px",
           paddingBottom: "30px",
           paddingLeft: "50px",
           paddingRight: "50px",
           margin: "0px auto 0px auto",
           width: "900px"
          }}
         >
          <LargeCard
           index={index}
           id={item.id}
           quantity={item.quantity}
           total={item.total_price}
           status={item.status}
           attach={item.attachment}
           event={item.event}
          />
         </div>
        ))}
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
  tick: state.TicketReducer
 };
};

export default connect(mapStateToProps)(withStyles(styles)(Body));
