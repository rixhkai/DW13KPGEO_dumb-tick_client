import React, {Component} from "react";
import {
 TextField,
 Container,
 InputAdornment,
 Typography
} from "@material-ui/core";
import {Grid, Divider} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import {withStyles} from "@material-ui/core/styles";
import View from "../home/View";
import {connect} from "react-redux";
import {Category} from "../../redux/action/CategoryAct";
import Footer from "../home/footer";

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
  marginBottom: "30px"
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
  const {id} = this.props.id;
  console.log("get event by category");
  this.props.dispatch(Category(id));
 }

 handleChange = e => {
  this.setState({[e.target.name]: e.target.value});
 };

 render() {
  const {classes} = this.props;
  const search = this.state.search;
  const data = this.props.data.event;
  const cats = data.category && data.category.name;
  console.log(data);
  //   const searchFilter = event.filter(event =>
  //    event.start_time.toLowerCase().includes(search.toLowerCase())
  //   );
  return (
   <div align='center'>
    <Grid>
     <Container maxWidth='lg'>
      <div className={classes.space}>
       <Typography className={classes.margin}>
        {this.props.data.category ? this.props.data.category.name : null}
       </Typography>
       <div className={classes.space2}>
        <Typography style={{color: "grey", marginRight: "30px"}}>
         Sort by :{" "}
        </Typography>
        <TextField
         style={{marginRight: "25px"}}
         value={this.state.search}
         name='search'
         placeholder='Choose Date'
         onChange={this.handleChange}
         InputProps={{
          endAdornment: (
           <InputAdornment position='start'>
            <SearchIcon />
           </InputAdornment>
          )
         }}
        />
        <TextField
         placeholder='Choose Location'
         InputProps={{
          endAdornment: (
           <InputAdornment position='start'>
            <SearchIcon />
           </InputAdornment>
          )
         }}
        />
       </div>
       <div className={classes.space}>
        <div className={classes.space2}>
         <Grid container spacing={1}>
          {data.map((item, index) => (
           <Grid item xs={12} sm={6} md={4}>
            <View
             index={index}
             id={item.id}
             title={item.title}
             category={item.category}
             startTime={item.start_time}
             desc={item.description.substring(0, 110)}
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

     {/** footer */}
     <Footer />
    </Grid>
   </div>
  );
 }
}

const mapStateToProps = state => {
 return {
  data: state.CategoryReducer
 };
};

export default connect(mapStateToProps)(withStyles(styles)(Body));
