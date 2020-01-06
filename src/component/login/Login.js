import React, {Component} from "react";
import {useStyles} from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import {Grid, withStyles} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import VisibilityIcon from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import axios from "axios";

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
 }
});

const things = <p textDeclaration='underline'> term service</p>;
// #ff6666
//#ffe6e6
class TransitionsModal extends Component {
 constructor() {
  super();
  this.state = {
   hidden: true,
   username: "",
   password: "",
   setOpen: false,
   mode: "view"
  };
  this.handleEdit = this.handleEdit.bind(this);
 }

 onSave = event => {
  let form = {
   username: this.state.username,
   password: this.state.password
  };
  axios
   .post("http://localhost:5000/dumbtick/login", form)
   .then(res => {
    console.log(res);
    localStorage.setItem("user_id", res.data.user.id);
    localStorage.setItem("name", res.data.user.name);
    localStorage.setItem("image", res.data.user.image);
    localStorage.setItem("phone", res.data.user.phone);
    localStorage.setItem("email", res.data.user.email);
    localStorage.setItem("token", res.data.token);
    console.log("login success");
    if (window.location.pathname === "/") {
     window.location.reload();
    } else {
     window.location.href = "/";
    }
   })
   .catch(err => {
    console.log(err);
   });
 };

 handleChange = e => {
  this.setState({[e.target.name]: e.target.value});
 };

 toggleShow = () => {
  this.setState({hidden: !this.state.hidden});
 };

 handleEdit() {
  this.setState({mode: "edit"});
 }

 keyPress = e => {
  console.log("press");
  if (e.key === "Enter") {
   this.onSave();
  }
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
     <Button color='inherit' onClick={() => this.handleOpen()}>
      Login
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
          <h2 id='transition-modal-title'>Login</h2>
          <p
           style={{maxWidth: "414.5px", color: "grey"}}
           id='transition-modal-description'
          >
           Enter the username associated with your account, and we'll send a
           amazing event to your inbox.
          </p>

          <div>
           <div className={classes.margin}>
            <Grid align='center'>
             <Grid item>
              <TextField
               style={{width: 280}}
               inputProps={{style: {textAlign: "center"}}}
               id='input-with-icon-grid'
               label='username'
               name='username'
               value={this.state.username}
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
           <div className={classes.margin}>
            <Grid align='center'>
             <TextField
              style={{width: "280px"}}
              label='password'
              name='password'
              type={this.state.hidden ? "password" : "text"}
              value={this.state.password}
              onChange={this.handleChange}
              onKeyPress={this.keyPress}
              InputProps={{
               endAdornment: (
                <InputAdornment position='end'>
                 <IconButton onClick={this.toggleShow}>
                  {this.state.hidden ? (
                   <VisibilityIcon />
                  ) : (
                   <VisibilityOffIcon />
                  )}
                 </IconButton>
                </InputAdornment>
               )
              }}
             />
            </Grid>
           </div>

           <div className={classes.margin}>
            <Grid align='center'>
             <Button
              onClick={this.onSave}
              style={{
               marginTop: "30px",
               color: "white",
               backgroundColor: "black"
              }}
             >
              Login
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

export default withStyles(styles)(TransitionsModal);
