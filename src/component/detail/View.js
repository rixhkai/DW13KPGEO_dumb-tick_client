import React from "react";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import {Card, Button, Divider} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
 largeCardPost: {
  display: "flex",
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
 }
}));

export const LargeCard = props => {
 const classes = useStyles();
 return (
  <Card style={{borderRadius: "5px", width: "100%"}}>
   <CardActionArea>
    <Link style={{textDecoration: "none"}}>
     <CardMedia
      className={classes.imageLargeCard}
      image='https://gamebrott.com/wp-content/uploads/2016/03/esport-gb-57-768x480.jpg'
     />
     <div align='start'>
      <Grid display='flex' className={classes.acount}>
       <Typography
        variant='h5'
        style={{marginLeft: "20px", fontWeight: "bold"}}
       >
        Raisa live concer on your home <br />
        <span style={{fontSize: "15px"}}>Music</span>
       </Typography>
       <div
        style={{
         margin: "0px 0px 0px auto",
         paddingRight: " 20px",
         display: "block"
        }}
       >
        <Typography>300.000</Typography>
        <Button
         size='small'
         variant='outlined'
         color='primary'
         href='#outlined-buttons'
        >
         Buy
        </Button>
       </div>
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
      <Grid container spacing={1} style={{textAlign: "start"}}>
       <Grid item xs={12} sm={6} md={4}>
        <Typography
         variant='h6'
         style={{fontWeight: "bold", paddingLeft: "20px"}}
        >
         Hosted By
        </Typography>
        <Grid
         style={{display: "flex", alignItems: "center", paddingLeft: "20px"}}
        >
         <CardMedia
          className={classes.smallImage}
          image='https://gamebrott.com/wp-content/uploads/2016/03/esport-gb-57-768x480.jpg'
         />
         <Typography variant='h6'>Juni Conert</Typography>
        </Grid>
       </Grid>

       <Grid item xs={12} sm={6} md={4}>
        <Typography
         variant='h6'
         style={{fontWeight: "bold", margin: "0px auto 0px auto"}}
        >
         Date & Time
        </Typography>
        <Typography variant='body1'>13 Des 2010 - 13 Des 2017</Typography>
        <Typography variant='body1'>18:00 - 22:00</Typography>
       </Grid>

       <Grid item xs={12} sm={6} md={4} style={{margin: "0px 0px 0px auto"}}>
        <Typography variant='h6' style={{fontWeight: "bold"}}>
         Contact Person
        </Typography>
        <Typography variant='body1'>Bill Gates</Typography>
        <Typography variant='body1'>+6288878</Typography>
        <Typography variant='body1'>billi@go.id</Typography>
       </Grid>
      </Grid>
     </div>
    </Link>
   </CardActionArea>
  </Card>
 );
};
