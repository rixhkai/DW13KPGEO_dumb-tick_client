import React, {Component} from "react";
import {
 TextField,
 Container,
 InputAdornment,
 Typography,
 ButtonBase,
 Button,
 CardMedia,
 Fab,
 IconButton
} from "@material-ui/core";
import {Grid, Divider, Card, CardActionArea} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import {withStyles} from "@material-ui/core/styles";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {LargeCard} from "./View";
import {Detail} from "../../redux/action/DetailAct";
import moment from "moment";
import Api from "../../utils/Api";
import Footer from "../home/footer";

const styles = theme => ({
 imageLargeCard: {
  flex: "0 1 auto",
  position: "relative",
  height: "550px",
  width: "100%",
  marginBottom: "16px",
  backgroundOrigin: "border-box!important",
  backgroundSize: "cover!important",
  display: "block!important"
 },
 acount: {
  display: "flex",
  textAlign: "start"
 },
 smallImage: {
  flex: "0 1 auto",
  position: "relative",
  height: "100px",
  width: "100px",
  marginBottom: "16px"
 },
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
 constructor() {
  super();
  this.state = {
   item: 1
  };
 }
 handleChangeAdd = () => {
  this.setState({item: this.state.item + 1});
 };

 handleChangeMin = () => {
  if (this.state.item > 1) {
   this.setState({item: this.state.item - 1});
  }
 };
 componentDidMount() {
  console.log(this.props.id);
  const {id} = this.props.id;
  this.props.dispatch(Detail(id));
 }

 onSave = () => {
  const {id} = this.props.id;
  const eventId = id;
  let order = {
   user_id: localStorage.getItem("user_id"),
   event_id: eventId,
   quantity: this.state.item,
   total_price: this.state.item * this.props.event.detail.price,
   status: "pending",
   attachment: ""
  };
  const config = {
   headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
  };
  Api.post("/order", order, config)
   .then(res => {
    console.log(res);
   })
   .catch(res => {
    console.log(res);
   });
 };

 render() {
  const data = this.props.event.detail;
  const price = data.price;
  const qurrency = parseFloat(price)
   .toFixed(2)
   .replace(/\d(?=(\d{3})+\.)/g, "$&,");
  const {classes} = this.props;
  return (
   <div align='center'>
    <Grid>
     <Container maxWidth='lg'>
      <div className={classes.space}>
       <div className={classes.space}>
        <div className={classes.space1}>
         <Card style={{borderRadius: "5px", width: "100%"}}>
          <Link style={{textDecoration: "none"}}>
           <CardMedia className={classes.imageLargeCard} image={data.img} />
           <div align='start'>
            <Grid display='flex' className={classes.acount}>
             <Typography
              variant='h5'
              style={{marginLeft: "20px", fontWeight: "bold", color: "black"}}
             >
              {data.title} <br />
             </Typography>
             <div
              style={{
               margin: "0px 0px 0px auto",
               paddingRight: " 20px",
               display: "block",
               color: "black"
              }}
             >
              <Typography>{"Rp. " + qurrency}</Typography>
             </div>
            </Grid>
            <Grid display='flex' className={classes.acount}>
             <Typography
              variant='h5'
              style={{marginLeft: "20px", fontWeight: "bold", color: "black"}}
             >
              <span style={{fontSize: "15px", color: "grey"}}>
               {data.category ? data.category.name : null}
              </span>
             </Typography>
             {localStorage.getItem("token") ? (
              <div
               style={{
                display: "flex",
                margin: "0px 0px 0px auto",
                paddingRight: "20px"
               }}
              >
               <IconButton
                size='small'
                onClick={this.handleChangeMin}
                style={{
                 marginRight: "20px",
                 marginTop: "10px",
                 backgroundColor: "#ff6666",
                 color: "white"
                }}
               >
                <RemoveIcon />
               </IconButton>

               <Typography
                style={{
                 marginRight: "20px",
                 marginTop: "10px",
                 color: "black"
                }}
               >
                {this.state.item}
               </Typography>
               <IconButton
                size='small'
                onClick={this.handleChangeAdd}
                style={{
                 marginRight: "20px",
                 marginTop: "10px",
                 backgroundColor: "#ff6666",
                 color: "white"
                }}
               >
                <AddIcon />
               </IconButton>
               <Button
                style={{
                 height: "30px",
                 backgroundColor: "#ff6666",
                 color: "white",
                 borderColor: "#ff6666",
                 marginTop: "10px"
                }}
                size='small'
                variant='outlined'
                color='primary'
                onClick={this.onSave}
               >
                Buy
               </Button>
              </div>
             ) : (
              <div
               style={{
                display: "flex",
                margin: "0px 0px 0px auto",
                paddingRight: "20px"
               }}
              >
               <p>-</p>
              </div>
             )}
            </Grid>
            <div
             style={{
              paddingLeft: "20px",
              paddingRight: "20px",
              margin: "20px 0px 20px 0px"
             }}
            >
             <Divider />
            </div>
            <Grid
             container
             spacing={1}
             justify='space-between'
             style={{textAlign: "start"}}
            >
             <Grid item xs={12} sm={6} md={4} style={{color: "black"}}>
              <Typography
               variant='h6'
               style={{fontWeight: "bold", paddingLeft: "30px"}}
              >
               Hosted By
              </Typography>
              <Grid
               style={{
                display: "flex",
                alignItems: "center",
                paddingLeft: "30px"
               }}
              >
               <CardMedia
                className={classes.smallImage}
                image={data.createdBy ? data.createdBy.image : null}
               />
               <Typography variant='h6' style={{color: "grey"}}>
                {data.createdBy ? data.createdBy.name : null}
               </Typography>
              </Grid>
             </Grid>

             <Grid item xs={12} sm={6} md={4} style={{color: "black"}}>
              <Typography
               variant='h6'
               style={{fontWeight: "bold", margin: "0px auto 0px auto"}}
              >
               Date & Time
              </Typography>
              <Typography variant='body1' style={{color: "grey"}}>
               {moment(data.start_time).format("ddd, DD  MMM YYYY")} -{" "}
               {moment(data.end_time).format("ddd, DD  MMM YYYY")}
              </Typography>
              <Typography variant='body1' style={{color: "grey"}}>
               18:00 - 22:00
              </Typography>
             </Grid>

             <Grid
              item
              xs={12}
              sm={6}
              md={4}
              style={{margin: "0px 0px 0px auto", color: "black"}}
             >
              <Typography variant='h6' style={{fontWeight: "bold"}}>
               Contact Person
              </Typography>
              <Typography variant='body1' style={{color: "grey"}}>
               {data.createdBy ? data.createdBy.name : null}
              </Typography>
              <Typography variant='body1' style={{color: "grey"}}>
               {data.createdBy ? data.createdBy.phone : null}
              </Typography>
              <Typography variant='body1' style={{color: "grey"}}>
               {data.createdBy ? data.createdBy.email : null}
              </Typography>
             </Grid>
            </Grid>
           </div>
          </Link>
         </Card>
        </div>
        <div className={classes.space2}>
         <Grid
          container
          spacing={1}
          justify='space-between'
          style={{align: "center"}}
         >
          <Grid
           item
           xs={12}
           sm={6}
           md={6}
           style={{width: "40%", padding: "0px 10px 0px 10px"}}
          >
           <Typography
            variant='h6'
            style={{marginBottom: "20px", fontSize: "20px", fontWeight: "bold"}}
           >
            Event Description
           </Typography>

           <div style={{textAlign: "start", paddingLeft: "25px"}}>
            <Typography stle={{textAlign: "start"}}>
             {data.description}
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
           {/* <Typography style={{marginBottom: "15px"}}>
            {data.address}
           </Typography> */}
           <div>
            <iframe
             src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15856.911542726595!2d106.85323844777263!3d-6.492804149702305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c6de5af6e45b%3A0xc2524522d4885d2a!2sWashington%2C%20Distrik%20Kolombia%2C%20Amerika%20Serikat!5e0!3m2!1sid!2sid!4v1577897875661!5m2!1sid!2sid'
             width='100%'
             height='450'
             frameborder='0'
             style={{border: 0}}
            ></iframe>
           </div>
           {/* <Typography style={{marginBottom: "20px"}}>Share Event</Typography>

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
           </div> */}
          </Grid>
         </Grid>
        </div>
       </div>
      </div>
     </Container>

     {/** footer */}

     <Footer/>
    </Grid>
   </div>
  );
 }
}

const mapStateToProps = state => {
 return {
  event: state.DetailReducer
 };
};

export default connect(mapStateToProps)(withStyles(styles)(Body));
