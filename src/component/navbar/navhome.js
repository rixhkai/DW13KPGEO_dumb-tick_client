import React from "react";
import {fade, makeStyles} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import {Divider, Button, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import Login from "../login/Login";
import Register from "../register/Register";
import "./nav.css";

const useStyles = makeStyles(theme => ({
 grow: {
  flexGrow: 1
 },
 menuButton: {
  marginRight: theme.spacing(2)
 },
 title: {
  display: "none",
  [theme.breakpoints.up("sm")]: {
   display: "block"
  }
 },
 search: {
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: fade(theme.palette.common.white, 0.15),
  "&:hover": {
   backgroundColor: fade(theme.palette.common.white, 0.25)
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
   marginLeft: theme.spacing(3),
   width: "auto"
  }
 },
 searchIcon: {
  width: theme.spacing(7),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
 },
 inputRoot: {
  color: "inherit"
 },
 inputInput: {
  padding: theme.spacing(1, 1, 1, 7),
  transition: theme.transitions.create("width"),
  width: "100%",
  [theme.breakpoints.up("md")]: {
   width: 200
  }
 },
 sectionDesktop: {
  display: "none",
  [theme.breakpoints.up("md")]: {
   display: "flex"
  }
 },
 sectionMobile: {
  display: "flex",
  [theme.breakpoints.up("md")]: {
   display: "flex"
  }
 },

 fontStyle: {
  color: "grey",
  height: "40px",
  fontSize: "15px"
 },
 margin: {
  margin: theme.spacing(1)
 }
}));

export function PrimaryAppBar() {
 const classes = useStyles();
 const [anchorEl, setAnchorEl] = React.useState(null);
 const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

 const isMenuOpen = Boolean(anchorEl);
 const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

 const handleProfileMenuOpen = event => {
  setAnchorEl(event.currentTarget);
 };

 const handleMobileMenuClose = () => {
  setMobileMoreAnchorEl(null);
 };

 const handleMenuClose = () => {
  setAnchorEl(null);
  handleMobileMenuClose();
 };

 const handleClick = () => {
  localStorage.removeItem("user_id");
  localStorage.removeItem("name");
  localStorage.removeItem("email");
  localStorage.removeItem("phone");
  localStorage.removeItem("image");
  localStorage.removeItem("token");
  window.location.href = "/";
 };

 const handleMobileMenuOpen = event => {
  setMobileMoreAnchorEl(event.currentTarget);
 };

 const menuId = "primary-search-account-menu";
 const renderMenu = (
  <Menu
   style={{margin: "20px"}}
   anchorEl={anchorEl}
   anchorOrigin={{vertical: "top", horizontal: "right"}}
   id={menuId}
   keepMounted
   transformOrigin={{vertical: "top", horizontal: "right"}}
   open={isMenuOpen}
   onClose={handleMenuClose}
  >
   <MenuItem style={{color: "grey", display: "flex"}}>
    <Avatar style={{marginRight: "15px"}} src={localStorage.getItem("image")} />
    <Link
     to={`/profile/${localStorage.getItem("user_id")}`}
     className={classes.fontStyle}
     style={{textDecoration: "none", color: "grey"}}
    >
     {localStorage.getItem("name")}
     <br />@{localStorage.getItem("name")}
    </Link>
   </MenuItem>
   <MenuItem className={classes.fontStyle}>Premium Account</MenuItem>
   <Divider />
   <Link
    to={`/myticket/${localStorage.getItem("user_id")}`}
    style={{textDecoration: "none"}}
   >
    <MenuItem className={classes.fontStyle}>My Ticket</MenuItem>
   </Link>
   <Link
    to={`/order/${localStorage.getItem("user_id")}`}
    style={{textDecoration: "none"}}
   >
    <MenuItem className={classes.fontStyle}>Payment</MenuItem>
   </Link>
   <Link to='/addevent/:id' style={{textDecoration: "none"}}>
    <MenuItem className={classes.fontStyle}>Add Event</MenuItem>
   </Link>
   <Divider />
   <MenuItem className={classes.fontStyle} onClick={handleClick}>
    Logout
   </MenuItem>
   <Divider />
  </Menu>
 );

 return (
  <div align='center'>
   <Toolbar className='primary' style={{color: "grey", width: "75%"}}>
    <h1>
     <a className='fontss-title' href='/' style={{textDecoration: "none"}}>
      Get.Ticket
     </a>
    </h1>
    {/* <IconButton
     className={classes.menuButton}
     color='inherit'
     aria-label='open drawer'
     href='/'
    >
     <img
      style={{borderRadius: "5px"}}
      height='40px'
      src='https://www.underconsideration.com/brandnew/archives/event_cinemas_logo.png'
     />
    </IconButton> */}
    <div className={classes.grow} />
    {/* <IconButton aria-label='search' color='inherit'>
     <SearchIcon />
    </IconButton> */}
    <div className={classes.sectionMobile}></div>
    {localStorage.getItem("token") ? (
     <div className={classes.sectionDesktop}>
      <IconButton
       edge='end'
       aria-label='account of current user'
       aria-controls={menuId}
       aria-haspopup='true'
       onClick={handleProfileMenuOpen}
       color='inherit'
      >
       <Avatar src={localStorage.getItem("image")} />
      </IconButton>
     </div>
    ) : (
     <div className={classes.sectionDesktop}>
      <div
       className={classes.sectionDesktop}
       style={{alignItems: "center", color: "black", textTransform: "none"}}
      >
       <Register />
      </div>
      <div
       className={classes.sectionDesktop}
       style={{alignItems: "center", color: "black", textTransform: "none"}}
      >
       <Login />
      </div>
     </div>
    )}
   </Toolbar>
   {renderMenu}
  </div>
 );
}
