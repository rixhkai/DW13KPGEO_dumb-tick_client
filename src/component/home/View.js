import React from "react";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";

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
 }
}));

export const LargeCard = props => {
 const classes = useStyles();
 return (
  <CardActionArea>
   <Link to={"/detail"} style={{textDecoration: "none"}}>
    <CardMedia
     className={classes.imageLargeCard}
     image='https://gamebrott.com/wp-content/uploads/2016/03/esport-gb-57-768x480.jpg'
    />
    <div align='start'>
     <Grid className={classes.largeCardPost}>
      <Grid>
       <h1>Esport champion</h1>
       <p>12 Des 2070</p>
      </Grid>
      <Grid>
       <p>lorem ipsum dolor baka mono nazesjabdajkasdasd asdsadasdsad asdsad</p>
      </Grid>
     </Grid>
    </div>
   </Link>
  </CardActionArea>
 );
};
