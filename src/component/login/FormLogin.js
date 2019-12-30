import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import IconButton from "@material-ui/core/IconButton";
import VisibilityIcon from "@material-ui/icons/Visibility";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Button} from "@material-ui/core";
import axios from "axios";
import {withRouter} from "react-router-dom";
import compose from "recompose/compose";

const styles = theme => ({
 margin: {
  margin: theme.spacing(1)
 }
});

class InputWithIcon extends Component {
 state = {
  hidden: true,
  username: "",
  password: ""
 };

 onSave = event => {
  event.preventDefault();
  axios
   .post("http://localhost:5000/dumbtick/login", this.state)
   .then(res => {
    localStorage.setItem("token", res.data.token);
    console.log("login success");
    this.props.history.push("/");
   })
   .catch(err => {
    console.log(err);
   });
 };

 handleChangePassword = e => {
  this.setState({[e.target.name]: e.target.value});
 };
 // handleChangeusername(e){
 //   this.setState({ username: e.target.value });
 // }

 toggleShow = () => {
  this.setState({hidden: !this.state.hidden});
 };

 render() {
  const {classes} = this.props;

  return (
   <div>
    {/* <div className={classes.margin}>
        <Grid align="center">

          <Grid item >
            <TextField style={{width:280}} inputProps={{style:{ textAlign:"center"}}} id="input-with-icon-grid" label="username"
            
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <InfoOutlinedIcon/>
                </InputAdornment> ),}} />
          </Grid>
        </Grid>
      </div> */}

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
        onChange={this.handleChangePassword}
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
       onChange={this.handleChangePassword}
       InputProps={{
        endAdornment: (
         <InputAdornment position='end'>
          <IconButton onClick={this.toggleShow}>
           <VisibilityIcon />
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
       style={{marginTop: "30px", color: "white", backgroundColor: "black"}}
      >
       Login
      </Button>
     </Grid>
    </div>
   </div>
  );
 }
}

// function mapDispatchToProps(dispatch) {
//  return {
//   actions: bindActionCreators(sessionActions, dispatch)
//  };
// }

export default compose(
 withStyles(styles),
 connect()
)(withRouter(InputWithIcon));
