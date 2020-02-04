import React, { Component } from 'react';
import HomeNav from './Homenav';
import './reportTable.css';
export default class ReportTable extends Component {
    constructor(props) {
        super(props);
        console.log("RT:Constr Props:",this.props);
        this.state = { 
            billingReport :[],
         }
         this.headings={
            "cpm": "CPM",
            "impressions": "IMPR",
            "buyer_affiliate_earnings": "BAE",
            "network_earnings": "NE",
            "buyer_spend": "BS",
            "log_dt": "LOG DATE",
            "rpc":"RPC",
            "total_requests": "TReq",
            "rpa": "RPA",
            "cpc": "CPC",
            "cpa": "CPA",
            "adspace_ctr": "AC",
            "clicks": "CLICKS",
            "rpm": "RPM",
            "publisher_earnings": "PE",
            "cnt_1": "CNT_1",
            "cnt_3": "CNT_3",
            "ctr": "CTR",
            "cnt_4": "CNT_4",
            "actions": "ACTIONS",
            "cnt_5": "CNT_5",
            "adspace_cpm": "A_CPM"
        } 
         
         this.state.billingReport=this.props.location.state;
         console.log("billing report table",this.state.billingReport);
        //  console.log("billing report 1sr element",this.state.billingReport[0]);
         this.renderTableHeader=this.renderTableHeader.bind(this);
        this.getKeys=this.getKeys.bind(this);
        this.renderTableData=this.renderTableData.bind(this);
        //  this.renderTableData=this.renderTableData.bind(this);
    }
    getKeys = function(){
        return Object.keys(this.props.location.state[0]);
      }
     
    renderTableHeader() {
    
        var header = Object.keys(this.state.billingReport[0]);
        
        return header.map((Arraykey, index) => { 
            // console.log("Map FUnction Key:",Arraykey," index:",index, " Rashmi Bewakof:",this.headings[Arraykey]," Deepak :", this.headings[index]);
            // console.log("header value from state", Arraykey+"_H");
           return <th key={{Arraykey}+"_"+index}>{this.headings[Arraykey]}</th>
        })
     }
     renderTableData() {
        var items = this.props.location.state;
        var keys = this.getKeys();
        return items.map((row, index)=>{
          return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
        })
      }
    render() { 
        return <div>
   <HomeNav />
<div>
            <h1 id='title'>Billing Report</h1>
            <table id='billingReport'>
               <thead>
                  <tr>{this.renderTableHeader()}</tr> 
               </thead>
               <tbody>
                {this.renderTableData()}
               </tbody>
            </table>
         </div>
             {/* <h3> Table Array: {this.props.location.state}</h3> 
            Hello report */}
        </div>
    }
}
 

const RenderRow = (props) =>{
// console.log("Render props",props.data);
    return props.keys.map((key, index)=>{

    // console.log("RenderRow:",`<td key=${props.data[key]}>${props.data[key]}</td>`);
    // console.log("RenderRow Keys:",{key}," Index: ",index);
    // console.log("RenderRow Value:",props.data[key]);
 
    return <td key={key+"_D"}>{props.data[key]}</td>
    })
  }