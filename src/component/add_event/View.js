import React from "react";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import {Divider, Button, Card} from "@material-ui/core";
import {TextField, Container, InputAdornment} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

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
}));

export const LargeCard = props => {
 const classes = useStyles();
 return (
  <div>
   <form noValidate autoComplete='off'>
    <div style={{marginBottom: "20px"}}>
     <TextField
      fullWidth
      variant='outlined'
      label='Title Event'
      placeholder='Title Event'
     />
    </div>
    <div style={{marginBottom: "20px"}}>
     <TextField
      fullWidth
      placeholder='Category'
      InputProps={{
       endAdornment: (
        <InputAdornment position='start'>
         <SearchIcon />
        </InputAdornment>
       )
      }}
     />
    </div>
    <div style={{marginBottom: "20px"}}>
     <TextField
      fullWidth
      variant='outlined'
      label='Upload Pamflet'
      placeholder='Upload Pamflet'
     />
    </div>
    <div style={{marginBottom: "20px"}}>
     <TextField
      fullWidth
      type='date'
      variant='outlined'
      label='Start Time'
      placeholder='Time'
     />
    </div>
    <div style={{marginBottom: "20px"}}>
     <TextField
      fullWidth
      type='date'
      variant='outlined'
      label='End Time'
      placeholder='Time'
     />
    </div>
    <div style={{marginBottom: "20px"}}>
     <TextField
      fullWidth
      variant='outlined'
      type='number'
      label='Price'
      placeholder='Price'
      InputLabelProps={{
       shrink: true
      }}
     />
    </div>
    <div style={{marginBottom: "20px"}}>
     <TextField
      fullWidth
      variant='outlined'
      label='Address Event'
      placeholder='Address Event'
     />
    </div>
    <div style={{marginBottom: "20px"}}>
     <TextField
      fullWidth
      variant='outlined'
      label='Url Map'
      placeholder='Url Map'
     />
    </div>
    <div style={{marginBottom: "20px"}}>
     <TextField fullWidth variant='outlined' label='Telp' placeholder='Telp' />
    </div>
    <div style={{marginBottom: "20px"}}>
     <TextField
      fullWidth
      variant='outlined'
      label='Email Eo'
      placeholder='Email Eo'
     />
    </div>
    <div style={{marginBottom: "20px"}}>
     <TextField
      fullWidth
      multiline
      variant='outlined'
      label='Deskripsi Event'
      placeholder='Deskripsi Event'
     />
    </div>
   </form>
  </div>
 );
};
