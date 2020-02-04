import React, { Component } from "react";
import {Button, Form} from 'react-bootstrap';
import Main from '../component/Main';

class SessionForm extends Component {
  
    //this.CallBillingReportAPI();
  

  state = {
    data: {
        Start_Date : '2019-11-01',
        End_Date:'2019-11-21',
        Interval :'Daily',
        Dimension:'',
        Filters:'-1',
        Imp_Start:'0',
        Imp_End:100000000000
    },
    // funcData:{SessID:null ,ApiKey:null},
    SessID : this.props.SessID,
  }

  // CallBillingReportAPI (SessionID, ApiKey) {
  //     console.log("CallBillingReportAPI:",SessionID," : ",ApiKey);
  //     return 
  // }
  // displaySessionIDApiKey = () => {
  //   const sessid_LS = localStorage.getItem('sessionid_LS');
  //   const apikey_LS = localStorage.getItem('apiKey_LS');

  //   console.log("Session ID:",sessid_LS);
  //   console.log("API Key:",apikey_LS);
  // }

  render() {
    
return (
      // <div>Rashmi - Render</div>
      <Button className="btn-lg btn-block" onSubmit={this.displaySessionIDApiKey} type="submit"> Press Me </Button> 
  )
  }
}

export default SessionForm;