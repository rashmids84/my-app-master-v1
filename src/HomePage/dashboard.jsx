
import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import ReportTable from './reportTable';
class Dashboard extends Component {
    constructor(props) {
        super(props);
        console.log("DB1 props",this.props);
        console.log("DB1 sessionid in constructor",this.props.location.state.SessId);
        console.log("DB1 API in constructor",this.props.location.state.ApiKey);
     
            this.state = { 
            Start_Date :'2020-01-01',
            End_Date :'2020-01-24',
            Interval :'Daily',
            Dimension :'',
            Filters :'-1',
            Imp_Start :'0',
            Imp_End :"100000000000",
            
         }
         this.payload={
            Sid:this.props.location.state.SessId,
            Apikey :this.props.location.state.ApiKey,
         }
         
         this.callTableAsync=this.callTableAsync.bind(this);
         this.resultData=this.resultData.bind(this);
        //  this.passTableData=this.passTableData.bind(this);
    }
  

    resultData= async() =>{
    //   e.preventDefault();
    //   console.log("Payload",this.payload);
      
   
     
    
    const a = await this.callTableAsync();
    // console.log("DB:Inside resultData:",a);
    var respData = await a.json();

    // Final array
    //  console.log("DB:RespData2 text",respData); 
    //  console.log("DB:Result Array:",respData.Data);
    const tableArray=respData.Data;
    this.setState({ tableArray:respData.Data}) 
    // console.log("DB:const array variable",tableArray);
    this.props.history.push('/reportTable',tableArray);
    }
    // passTableData(){
    
    //   this.props.history.push({
    //     pathname : '/reportTable',
        
        
    //      });
    // }
    
callTableAsync = async() =>{
   
//   console.log("DB:inside callTableAsync",this.payload);
//   console.log("Session id in call table async",Sid);
    var myHeaders = new Headers();
    myHeaders.append("SessionId",this.payload.Sid);
    myHeaders.append("APIKey",this.payload.Apikey);
    // console.log("DB:inside header session id",this.payload.Sid);
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify(this.state);
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
   var tableData = await fetch("http://api6.audiencelogy.com/adx_reporting/billingReport", requestOptions)
    
      return tableData;

}
functionTwo() {
    (async () => {
        await this.resultData();
    })();
}
    
  
    render() {
        
        return <div> {this.functionTwo()} </div>;
 
      
        // return (
        //     <div>
          {/* <h3>Session id : {this.props.location.Sid}</h3>
          <h3>API Key{this.props.location.APIkey}</h3> */}
           {/* <Button className= "btn btn-primary" onClick={this.props.history.push("/reportTable")}>Report</Button> */}
           {/* <button onClick={this.resultData}>Press me</button> */}
           {/* <ReportTable table= { [this.tableArray] } />  */}
           
            // </div>
          
    }
  
  }
export default Dashboard;