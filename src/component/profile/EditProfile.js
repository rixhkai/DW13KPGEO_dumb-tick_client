import React, {Component} from "react";
import {useStyles} from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import {Grid, withStyles} from "@material-ui/core";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import IconButton from "@material-ui/core/IconButton";
import VisibilityIcon from "@material-ui/icons/Visibility";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto";

const styles = theme => ({
 modal: {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
 },
 paper: {
  width: 900,
  height: 550,
  backgroundColor: theme.palette.background.paper,
  borderRadius: 4,
  boxShadow: theme.shadows[5],
  padding: theme.spacing(0, 0, 3)
 },
 margin: {
  marginTop: 30
 },
 margin1: {
  margin: theme.spacing(1)
 }
});

const things = <p textDeclaration='underline'> term service</p>;

class RegisterModal extends Component {
 constructor() {
  super();
  this.state = {
   name: "",
   email: "",
   phone: "",
   img: "",
   setOpen: false,
   mode: "view"
  };
 }

 handleChange = e => {
  this.setState({[e.target.name]: e.target.value});
 };

 onSave = event => {
  let form = {
   name: this.state.name,
   email: this.state.email,
   phone: this.state.phone,
   image: this.state.img
  };
  console.log(form);
  event.preventDefault();
  axios
   .put(
    `http://localhost:5000/dumbtick/profile/${localStorage.getItem("user_id")}`,
    form
   )
   .then(res => {
    console.log(res);
    localStorage.setItem("email", res.data.data.user.email);
    localStorage.setItem("name", res.data.data.user.name);
    localStorage.setItem("image", res.data.data.user.image);
    console.log("edit success");

    //   this.props.history.push("/");
   })
   .catch(err => {
    console.log(err);
   });
 };

 handleEdit = () => {
  this.setState({mode: "edit"});
 };

 handleOpen = () => {
  this.setState({
   setOpen: true
  });
 };

 handleClose = () => {
  this.setState({
   setOpen: false
  });
 };

 render() {
  const {classes} = this.props;

  if (this.state.mode === "view") {
   return (
    <div>
     <Button
      color='inherit'
      variant='contained'
      size='small'
      style={{
       backgroundColor: "rgb(27, 1, 54)",
       color: "white",
       height: "30px",
       marginTop: "10px",
       textTransform: "none"
      }}
      onClick={() => this.handleOpen()}
     >
      Edit Profile
     </Button>
     <Modal
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
      className={classes.modal}
      open={this.state.setOpen}
      onClose={() => this.handleClose()}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
       timeout: 500
      }}
     >
      <Fade in={this.state.setOpen}>
       <div className={classes.paper}>
        <Grid
         container
         direction='row'
         justify='flex-start'
         alignItems='flex-start'
        >
         <Grid item>
          <img
           alt=''
           src='/logo1.png'
           width='214'
           height='600'
           role='presentation'
          />
         </Grid>

         <Grid
          item
          align='center'
          style={{marginLeft: 29.1, marginInlineEnd: 28.19}}
         >
          <h2 id='transition-modal-title'>Register</h2>
          <div>
           <div className={classes.margin1}>
            <Grid align='center'>
             <Grid item>
              <TextField
               style={{width: 280}}
               inputProps={{style: {textAlign: "center"}}}
               id='input-with-icon-grid'
               label='name'
               name='name'
               value={this.state.name}
               onChange={this.handleChange}
               InputProps={{
                endAdornment: (
                 <InputAdornment position='start'>
                  <InfoOutlinedIcon />
                 </InputAdornment>
                )
               }}
              />
             </Grid>
            </Grid>
           </div>

           <div className={classes.margin1}>
            <Grid align='center'>
             <Grid item>
              <TextField
               style={{width: 280}}
               inputProps={{style: {textAlign: "center"}}}
               id='input-with-icon-grid'
               label='email'
               name='email'
               value={this.state.email}
               onChange={this.handleChange}
               InputProps={{
                endAdornment: (
                 <InputAdornment position='start'>
                  <InfoOutlinedIcon />
                 </InputAdornment>
                )
               }}
              />
             </Grid>
            </Grid>
           </div>

           <div className={classes.margin1}>
            <Grid align='center'>
             <Grid item>
              <TextField
               style={{width: 280}}
               inputProps={{style: {textAlign: "center"}}}
               id='input-with-icon-grid'
               label='Phone'
               name='phone'
               value={this.state.phone}
               onChange={this.handleChange}
               InputProps={{
                endAdornment: (
                 <InputAdornment position='start'>
                  <InfoOutlinedIcon />
                 </InputAdornment>
                )
               }}
              />
             </Grid>
            </Grid>
           </div>
           <div className={classes.margin1}>
            <Grid align='center'>
             <TextField
              style={{width: "280px"}}
              label='Images'
              name='img'
              value={this.state.img}
              onChange={this.handleChange}
              InputProps={{
               endAdornment: (
                <InputAdornment position='end'>
                 <InsertPhotoIcon />
                </InputAdornment>
               )
              }}
             />
            </Grid>
           </div>

           <div className={classes.margin1}>
            <Grid align='center'>
             <Button
              onClick={this.onSave}
              style={{
               marginTop: "30px",
               color: "white",
               backgroundColor: "black"
              }}
             >
              Save Change
             </Button>
            </Grid>
           </div>
          </div>
         </Grid>

         <Grid item>
          <img
           alt=''
           src='/logoright.png'
           style={{width: 214, height: "600"}}
          />
         </Grid>
        </Grid>
       </div>
      </Fade>
     </Modal>
    </div>
   );
  } else {
   return false;
  }
 }
}

export default withStyles(styles)(RegisterModal);
