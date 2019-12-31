import React from "react";
import {fade, makeStyles} from "@material-ui/core/styles";
import {BootstrapButton} from "./button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Tooltip from "@material-ui/core/Tooltip";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import {Divider, Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import Login from "../login/Login";
import Register from "../register/Register";

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
    <Avatar
     style={{marginRight: "15px"}}
     src='https://cdn-images-1.medium.com/fit/c/40/40/0*6Gn7deEsomANxfdu'
    ></Avatar>
    <Link
     to='profile'
     className={classes.fontStyle}
     style={{textDecoration: "none", color: "grey"}}
    >
     Rijal Abdullah
     <br />
     @rijallabdullah
    </Link>
   </MenuItem>
   <MenuItem className={classes.fontStyle}>Premium Account</MenuItem>
   <Divider />
   <Link to='/new_story' style={{textDecoration: "none"}}>
    <MenuItem className={classes.fontStyle}>My Ticket</MenuItem>
   </Link>
   <Link to='/order/:id' style={{textDecoration: "none"}}>
    <MenuItem className={classes.fontStyle}>Payment</MenuItem>
   </Link>
   <MenuItem className={classes.fontStyle}>Add Event</MenuItem>
   <Divider />
   <MenuItem className={classes.fontStyle}>Logout</MenuItem>
   <Divider />
  </Menu>
 );

 return (
  <div align='center'>
   <Toolbar style={{backgroundColor: "#ff6666", color: "grey", width: "75%"}}>
    <IconButton
     className={classes.menuButton}
     color='inherit'
     aria-label='open drawer'
     href='/'
    >
     <img
      height='40px'
      src='https://cdn.icon-icons.com/icons2/1584/PNG/512/3721675-medium_108052.png'
     />
    </IconButton>
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
       <AccountCircle />
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
