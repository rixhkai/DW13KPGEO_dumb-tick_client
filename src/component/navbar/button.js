import React from "react";
import {
 createMuiTheme,
 withStyles,
 makeStyles,
 ThemeProvider
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {green, purple} from "@material-ui/core/colors";

export const BootstrapButton = withStyles({
 root: {
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1,
  backgroundColor: "#2eb82e",
  borderColor: "#2eb82e",
  fontFamily: [
   "-apple-system",
   "BlinkMacSystemFont",
   '"Segoe UI"',
   "Roboto",
   '"Helvetica Neue"',
   "Arial",
   "sans-serif",
   '"Apple Color Emoji"',
   '"Segoe UI Emoji"',
   '"Segoe UI Symbol"'
  ].join(","),
  "&:hover": {
   backgroundColor: "#2fb62f",
   borderColor: "#2aa22a",
   boxShadow: "none"
  },
  "&:active": {
   boxShadow: "none",
   backgroundColor: "#2fb62f",
   borderColor: "#2aa22a"
  },
  "&:focus": {
   boxShadow: "#2aa22a"
  }
 }
})(Button);
