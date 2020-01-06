import React, {Component} from "react";
import {
 TextField,
 Container,
 InputAdornment,
 Typography,
 ButtonBase,
 Button,
 Paper,
 Link
} from "@material-ui/core";
import {Grid, Divider} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import {withStyles} from "@material-ui/core/styles";
import {connect} from "react-redux";
import {Category, Events} from "../../redux/action/HomeAct";
import View from "./View";
import "./homes.css";
import Footer from "./footer";

const styles = theme => ({
 margin: {
  fontSize: "30px",
  fontWeight: "bold",
  color: "grey",
  textAlign: "start"
 },
 space: {
  marginTop: "40px",
  marginBottom: "40px"
 },
 space2: {
  display: "flex",
  marginTop: "15px",
  marginBottom: "30px",
  flexWrap: "wrap"
 },
 spacebot: {
  display: "flex-center",
  marginTop: "60px"
 },
 text: {
  marginTop: "30px",
  marginRight: "30px",
  textAlign: "start"
 }
});

class Body extends Component {
 constructor() {
  super();
  this.state = {
   search: ""
  };
 }

 componentDidMount() {
  console.log("get category");
  this.props.dispatch(Category());
  this.props.dispatch(Events());
 }

 handleChange = e => {
  this.setState({[e.target.name]: e.target.value});
 };

 render() {
  const event = this.props.event.event;
  const search = this.state.search;
  const searchFilter = event.filter(event =>
   event.title.toLowerCase().includes(search.toLowerCase())
  ); //=== search);
  const todayFilter = searchFilter.filter(searchFilter => {
   const date = new Date(searchFilter.start_time);
   const today = new Date();
   return (
    date.toString().substring(0, 10) === today.toString().substring(0, 10)
   );
  });
  console.log(searchFilter);
  const tomorrow = searchFilter.filter(searchFilter => {
   const date = new Date(searchFilter.start_time);
   const today = new Date();
   const tom = new Date(today.getTime() + 86400000);
   //  const tomorrow = tom.toLocaleDateString();
   return date.toString().substring(0, 10) === tom.toString().substring(0, 10);
  });

  const {classes} = this.props;
  return (
   <div align='center'>
    <Grid>
     <Container maxWidth='lg'>
      <form>
       <TextField
        fullWidth
        variant='outlined'
        value={this.state.search}
        name='search'
        onChange={this.handleChange}
        placeholder='Search Event'
        InputProps={{
         endAdornment: (
          <InputAdornment position='start'>
           <SearchIcon />
          </InputAdornment>
         )
        }}
       />
      </form>
      <div className={classes.space}>
       <h1 className='texts' style={{textAlign: "start"}}>
        Category
       </h1>
       <div className={classes.space2}>
        {console.log(this.props.cates.cats)}
        {this.props.cates.cats.map(item => (
         <Paper
          elevation={1}
          style={{
           background: `url(${item.image})`,
           backgroundSize: "cover",
           marginRight: "20px",
           width: "280px",
           height: "100px",
           backgroundColor: "grey",
           borderRadius: "10px",
           marginBottom: "20px"
          }}
         >
          <Link
           href={`/category/${item.id}/events`}
           style={{textDecoration: "none"}}
          >
           <h1
            className='titles'
            style={{
             paddingTop: "10px",
             fontWeight: "bold"
            }}
           >
            {item.name}
           </h1>
          </Link>
         </Paper>
        ))}
       </div>
       <div className={classes.space}>
        <h1 className='texts' style={{textAlign: "start"}}>
         Today
        </h1>
        <div className={classes.space2}>
         <Grid container spacing={1}>
          {todayFilter.map((item, index) => (
           <Grid item xs={12} sm={6} md={4}>
            <View
             id={item.id}
             title={item.title}
             category={item.category}
             startTime={item.start_time}
             desc={item.description.substring(0, 180)}
             img={item.img}
             price={item.price}
             favorite={item.favorite}
            />
           </Grid>
          ))}
         </Grid>
        </div>
       </div>

       <div className={classes.space}>
        <h1 className='texts' style={{textAlign: "start"}}>
         Upcoming Events
        </h1>

        <div className={classes.space2}>
         <Grid container spacing={1}>
          {tomorrow.map((item, index) => (
           <Grid item xs={12} sm={6} md={4}>
            <View
             id={item.id}
             title={item.title}
             category={item.category}
             startTime={item.start_time}
             desc={item.description.substring(0, 120)}
             img={item.img}
             price={item.price}
             favorite={item.favorite}
            />
           </Grid>
          ))}
         </Grid>
        </div>
       </div>
      </div>
     </Container>
     <Footer />
    </Grid>
   </div>
  );
 }
}

const mapStateToProps = state => {
 return {
  cates: state.HomeReduces,
  event: state.HomeReduces
 };
};

export default connect(mapStateToProps)(withStyles(styles)(Body));
