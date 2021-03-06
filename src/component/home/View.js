import React, {useState, Component} from "react";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import {withStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import {Card, Paper, IconButton} from "@material-ui/core";
import moment from "moment";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Api from "../../utils/Api";

const styles = theme => ({
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
 }
});

class View extends Component {
 constructor() {
  super();
  this.state = {
   favorite: false
  };
 }

 handleClick = e => {
  this.handleChange(e.currentTarget.value);
  this.handleFavorite();
 };

 handleChange = e => {
  //   setFavoritess(e);
  console.log(e);

  console.log(this.state.favorite);
  console.log(this.props.id);
  //   console.log(this.props.favorite.id);
 };

 handleFavorite = () => {
  const userId = localStorage.getItem("user_id");
  //   console.log(values.id + "ini id");

  if (this.state.favorite) {
   Api.delete(`favorite/${userId}${this.props.id} `).then(res => {
    if (res) {
     console.log("deleted");
     this.setState({favorite: res.data.fav});
    } else {
     console.log("failed");
    }
   });
  } else {
   let data = {
    event_id: this.props.id,
    user_id: userId
   };
   Api.post("favorite", data).then(res => {
    if (res) {
     console.log(res);
     console.log("added");
     this.setState({favorite: res.data.favo});
    } else {
     console.log("failed" + res);
    }
   });
  }
 };

 componentDidMount() {
  console.log(this.props.id + "id");
  Api.get(`fav/${localStorage.getItem("user_id")}${this.props.id}`).then(
   res => {
    this.setState({favorite: res.data});
    console.log(res + "test fav");
   }
  );
  //   this.setState({
  //    // favorite: this.props.favorite.id ? this.props.favorite.id : 0
  //   });
 }

 render() {
  const {classes} = this.props;

  return (
   <Paper
    elevation={3}
    style={{
     paddingBottom: "10px",
     borderTopLeftRadius: "5px",
     bordertTopRightRadius: "5px"
    }}
   >
    <Link to={`/detail/${this.props.id}`} style={{textDecoration: "none"}}>
     <CardMedia className={classes.imageLargeCard} image={this.props.img}>
      <div style={{textAlign: "end", paddingTop: "5px"}}>
       <Typography
        variant='caption'
        position='absolute'
        style={{
         color: "black",
         backgroundColor: "white",
         padding: 5,
         marginRight: "5px",
         borderRadius: "5px"
        }}
       >
        {"Rp. " +
         parseFloat(this.props.price)
          .toFixed(2)
          .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
       </Typography>
      </div>
     </CardMedia>
    </Link>

    <div align='start'>
     <Grid className={classes.largeCardPost} style={{display: "flex"}}>
      <Grid style={{color: "black"}}>
       <h1>{this.props.title}</h1>
       <p>{moment(this.props.startTime).format("ddd, DD MMM YYYY ")}</p>
       <Grid>
        <p>{this.props.desc}</p>
       </Grid>
      </Grid>

      <IconButton
       //  value={this.props.favorite ? this.props.favorite.id : 0}
       onClick={this.handleClick}
       size='small'
       style={{height: "25px", paddingRight: "10px"}}
      >
       {/* prettier-ignore */}
       {/* {this.state.favorite >= 1 ? <FavoriteIcon /> : <FavoriteBorderIcon />} */}
       {this.state.favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
     </Grid>
    </div>
   </Paper>
  );
 }
}

export default withStyles(styles)(View);
