import React , {Component} from 'react';
import {Navbar, NavDropdown, Nav, Form, Button, FormControl} from 'react-bootstrap';
import './HomeNav.css';

export default class HomeNav extends React.Component {
  constructor(props){
    super(props);
    // console.log("HN props",this.props);
    this.CallBillingReport = this.CallBillingReport.bind(this);

    this.state = {
     stateTableData : []
    }
    this.payloadHN = {
      SessId:'',
      ApiKey:''
    }
 }

 CallBillingReport = async () => {
   this.payloadHN.SessId=this.props.location.SId;
   this.payloadHN.ApiKey=this.props.location.APIKey;
  //  console.log("HN session id",Sid);
  //  console.log("HN API key",Apikey);
  //  console.log("HN props sending",this.props);
  // this.props.history.push('/dashboard1', Sid, Apikey); 
  this.props.history.push('/dashboard', this.payloadHN);
  
   }

render(){

  return (
    <div>
      <div>
          <div>
            <Navbar className="navbar navbar-custom">
            <Navbar.Brand href="#home"><font color="white"><b>audience</b></font><font color="#0168fa">logy</font></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home" ><font color="white" onClick={this.CallBillingReport} >SellSide</font></Nav.Link>
              <Nav.Link href="#link"><font color="white">BuySide</font></Nav.Link>
              <NavDropdown  title ="Reports" className="basic-nav-dropdown"  >
            
                <NavDropdown.Item href="#action/3.1">Reports</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Accounting</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Setting</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>

              <Form inline>
             <Button className="fa fa-search" aria-hidden="false"></Button>
        
                
              </Form> 
              {/* <Form inline>
             <Nav.Link className="far fa-user-circle" aria-hidden="false" size="9x"></Nav.Link>
                
              </Form>  */}
            </Navbar.Collapse>
            </Navbar>
            </div>
        </div>
      </div> 
    
   );
  }
}
