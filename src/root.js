import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Home} from "./component/home/home";
import {Provider} from "react-redux";
import {Category} from "./component/category/category";
import {Details} from "./component/detail/detail";
import {Payment} from "./component/payment.js/payment";
import {MyTicket} from "./component/my_ticket/myticket";
import {AddEvent} from "./component/add_event/addevent";

const Root = ({store}) => (
 <Provider store={store}>
  <Router>
   <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/category/:id/events' component={Category} />
    <Route path='/detail' component={Details} />
    <Route path='/order/:id' component={Payment} />
    <Route path='/myticket/:id' component={MyTicket} />
    <Route path='/addevent/:id' component={AddEvent} />
   </Switch>
  </Router>
 </Provider>
);

export default Root;
