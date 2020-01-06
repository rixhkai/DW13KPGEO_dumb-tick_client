import React, {Component} from "react";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
 MuiPickersUtilsProvider,
 KeyboardDatePicker
} from "@material-ui/pickers";
import {withStyles} from "@material-ui/core/styles";
import {
 TextField,
 Container,
 InputAdornment,
 MenuItem,
 Button
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import {Category} from "../../redux/action/HomeAct";
import {connect} from "react-redux";
import Api from "../../utils/Api";
import "../home/homes.css";

const styles = theme => ({
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
});

class LargeCard extends Component {
 constructor() {
  super();
  this.state = {
   title: "",
   pamflet: "",
   price: 0,
   address: "",
   urlMap: "",
   //    telp: localStorage.getItem("phone"),
   //    email: localStorage.getItem("email"),
   deskripsi: "",
   category: 0,
   startDate: new Date(),
   endDate: new Date()
  };
 }

 handleChange = e => {
  this.setState({startDate: e});
 };

 handleChanges = e => {
  this.setState({endDate: e});
 };

 handleChangeField = e => {
  this.setState({[e.target.name]: e.target.value});
 };

 onSave = () => {
  let data = {
   title: this.state.title,
   category_id: this.state.category,
   start_time: this.state.startDate,
   end_time: this.state.endDate,
   price: this.state.price,
   description: this.state.deskripsi,
   address: this.state.address,
   url_maps: this.state.urlMap,
   img: this.state.pamflet,
   creator_id: localStorage.getItem("user_id")
  };
  const config = {
   headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
  };
  Api.post("addevent", data, config)
   .then(res => {
    console.log(res);
    console.log("Event Added");
    window.location.href = "/";
   })
   .catch(err => {
    console.log(err);
   });
 };

 componentDidMount() {
  this.props.dispatch(Category());
 }

 render() {
  const {classes} = this.props;
  return (
   <div>
    <form noValidate autoComplete='off'>
     <div style={{marginBottom: "20px"}}>
      <TextField
       fullWidth
       name='title'
       variant='outlined'
       label='Title Event'
       placeholder='Title Event'
       value={this.state.title}
       onChange={this.handleChangeField}
      />
     </div>
     <div style={{marginBottom: "20px"}}>
      <TextField
       fullWidth
       select
       label='Category'
       variant='outlined'
       placeholder='Category'
       name='category'
       onChange={this.handleChangeField}
       value={this.state.category}
       InputLabelProps={{
        shrink: true
       }}
      >
       {this.props.cats.cats.map((item, index) => (
        <MenuItem key={index} value={item.id}>
         {item.name}
        </MenuItem>
       ))}
      </TextField>
     </div>
     <div style={{marginBottom: "20px"}}>
      <TextField
       fullWidth
       variant='outlined'
       type='file'
       label='Upload Pamflet'
       placeholder='Upload Pamflet'
       value={this.state.pamflet}
       name='pamflet'
       onChange={this.handleChangeField}
       InputLabelProps={{
        shrink: true
       }}
      />
     </div>
     <div style={{marginBottom: "20px"}}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
       <KeyboardDatePicker
        disableToolbar
        fullWidth
        format='yyyy/MM/dd'
        variant='inline'
        inputVariant='outlined'
        label='Start Time'
        id='startDate'
        value={this.state.startDate}
        onChange={this.handleChange}
        InputLabelProps={{
         shrink: true
        }}
       />
      </MuiPickersUtilsProvider>
     </div>
     <div style={{marginBottom: "20px"}}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
       <KeyboardDatePicker
        disableToolbar
        fullWidth
        format='yyyy/MM/dd'
        variant='inline'
        inputVariant='outlined'
        label='End Time'
        id='endDate'
        value={this.state.endDate}
        onChange={this.handleChanges}
        InputLabelProps={{
         shrink: true
        }}
       />
      </MuiPickersUtilsProvider>
     </div>
     <div style={{marginBottom: "20px"}}>
      <TextField
       fullWidth
       variant='outlined'
       type='number'
       label='Price'
       placeholder='Price'
       name='price'
       value={this.state.price}
       onChange={this.handleChangeField}
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
       name='address'
       value={this.state.address}
       onChange={this.handleChangeField}
      />
     </div>
     <div style={{marginBottom: "20px"}}>
      <TextField
       fullWidth
       variant='outlined'
       label='Url Map'
       placeholder='Url Map'
       name='urlMap'
       value={this.state.urlMap}
       onChange={this.handleChangeField}
      />
     </div>
     {/* <div style={{marginBottom: "20px"}}>
      <TextField
       fullWidth
       variant='outlined'
       label='Telp'
       name='telp'
       value={this.state.telp}
       onChange={this.handleChangeField}
       placeholder='Telp'
      />
     </div>
     <div style={{marginBottom: "20px"}}>
      <TextField
       fullWidth
       variant='outlined'
       label='Email Eo'
       placeholder='Email Eo'
       name='email'
       value={this.state.email}
       onChange={this.handleChangeField}
      />
     </div> */}
     <div style={{marginBottom: "20px"}}>
      <TextField
       fullWidth
       multiline
       variant='outlined'
       label='Deskripsi Event'
       placeholder='Deskripsi Event'
       name='deskripsi'
       value={this.state.deskripsi}
       onChange={this.handleChangeField}
      />
     </div>
     <div style={{marginBottom: "20px"}}>
      <Button
       fullWidth
       variant='contained'
       color='primary'
       onClick={this.onSave}
       style={{
        height: "50px",
        backgroundColor: "rgb(27, 1, 54)",
        color: "white",
        borderColor: "rgb(27, 1, 54)"
       }}
      >
       Publish
      </Button>
     </div>
    </form>
   </div>
  );
 }
}

const mapStateToProps = state => {
 return {
  cats: state.HomeReduces
 };
};

export default connect(mapStateToProps)(withStyles(styles)(LargeCard));
