import React from "react";
import {Grid, Divider, Container, Typography} from "@material-ui/core";
import {useStyles} from "@material-ui/core/styles";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

import "./homes.css";

function Footer() {
 //  const classes = useStyles();

 return (
  <Grid align='start' className='foots'>
   <Container style={{paddingTop: "50px"}}>
    <div
     style={{
      display: "flex",
      width: "100%",
      textAlign: "start",
      justifyContent: "space-between"
     }}
    >
     <Grid
      item
      xs={12}
      md={6}
      sm={4}
      style={{
       marginRight: "30px",
       maxWidth: "400px"
      }}
     >
      <h1 className='ftitles'>Get.ticket</h1>
      <p
       className='texts1'
       variant='body2'
       style={{color: "white", width: "350px", fontSize: "20px"}}
      >
       get.ticket is a web-based platform that provides tickets for various
       events around sports, music, science, and programming.
      </p>
      <br />
      <br />
     </Grid>

     <Grid
      item
      xs={12}
      md={6}
      sm={4}
      style={{
       marginRight: "30px",
       maxWidth: "400px",
       textAlign: "start"
      }}
     >
      <h1 className='texts' style={{color: "white", fontSize: "20px"}}>
       Links
      </h1>
      <p className='texts1' style={{color: "white"}}>
       About us
      </p>
      <br />
      <h1 className='texts' style={{color: "white", fontSize: "20px"}}>
       Follow Us On
      </h1>
      <div style={{display: "flex"}}>
       <div style={{display: "flex"}}>
        <p className='texts1' style={{color: "white"}}>
         <InstagramIcon />
        </p>
        <p
         className='texts1'
         style={{color: "white", paddingLeft: "5px", paddingRight: "10px"}}
        >
         Instagram
        </p>
       </div>

       <div style={{display: "flex"}}>
        <p className='texts1' style={{color: "white"}}>
         <TwitterIcon />
        </p>
        <p className='texts1' style={{color: "white", paddingLeft: "5px"}}>
         Twitter
        </p>
       </div>
      </div>

      <br />
     </Grid>

     <Grid
      item
      xs={12}
      md={6}
      sm={4}
      style={{
       marginRight: "30px",
       maxWidth: "400px"
      }}
     >
      <h1 className='texts' style={{color: "white", fontSize: "20px"}}>
       Have A Question ?
      </h1>
      <p className='texts1' style={{color: "white"}}>
       Email : support@geticket.com
      </p>
      <br />
      <br />
     </Grid>
    </div>
    <Divider
     variant='fullWidth'
     style={{width: "100%", backgroundColor: "white", height: "5px"}}
    />
    <br />
    <Grid style={{color: "white"}}>
     <p className='texts1' style={{textAlign: "center"}}>
      Copyright <span dangerouslySetInnerHTML={{__html: "&copy;"}} /> 2018
      GetTicket
     </p>
    </Grid>
    <br />
   </Container>
  </Grid>
 );
}

export default Footer;
