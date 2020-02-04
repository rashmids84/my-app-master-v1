import React from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import logo from './img15.png';
import './App.css';
import {Button, Form} from 'react-bootstrap';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Main from './component/Main';
import Request from 'superagent';
import UserList from './component/UserList';
import _ from "lodash";
import Person from'./component/Person';
import AdminHome from './component/AdminHome';
import HomeNav from './HomePage/Homenav';
import SessionForm from "./component/SessionForm";
import LoginPage from './component/LoginPage';
import BillingReportTable from './HomePage/BillingReportTable';
import Dashboard from './HomePage/dashboard';
import ReportTable from './HomePage/reportTable';

 class App extends React.Component {
 render(){
   return(
     
     <Router>
       <Switch>
       <Route path={"/"} exact={true} component={AdminHome}/>
       <Route path={"/Homenav"} exact={true} component={HomeNav}/>
        
         <Route path ={"/Person"} component={Person}/>
         <Route path ={"/SessionForm"} component={SessionForm}/>
         <Route path ={"/LoginPage"} component={LoginPage}/>
         <Route path ={"/BillingReportTable"} component={BillingReportTable}/>
         <Route path ={"/dashboard"} component={Dashboard}/>
         <Route path ={"/reportTable"} component={ReportTable}/>



     </Switch>
     
     </Router>
     
   )
 } 
  
}
export default App;


 