import React, { Component } from "react";
import HomeNav from "./Homenav";

export default class BillingReportTable extends React.Component {
  constructor(props) {
    super(props);
    this.displaySessionIDApiKey1 = this.displaySessionIDApiKey1.bind(this);
    this.displayTableData = this.displayTableData.bind(this);

    this.getHeader = this.getHeader.bind(this);
    this.getRowsData = this.getRowsData.bind(this);
    // this.getSingleRow = this.getSingleRow.bind(this);
    // this.setDisplayTableData = this.setDisplayTableData.bind(this);
    this.getKeys = this.getKeys.bind(this);

    this.state = {
      stateTableData: [],
      DisplayTableData: []
    };

    this.waitForData = {
      isLoaded: false
    };

    this.cols = [];

    this.singleRow = [];
  }

  getKeys = function() {
    // console.log("BRT:getKeys");

    // console.log("BRT:Get Keys:", this.state.stateTableData[0]);

    if (this.state.stateTableData[0] != null) {
      return Object.keys(this.state.stateTableData[0]);
    }
  };

  getHeader = function() {
    // console.log("BRT:getHeader");

    if (this.state.stateTableData[0] != null) {
      // var keys = this.colsx`; //this.getKeys();
      // var cols = this.state.stateTableData[0];
      var cols = this.cols;
      var ReturnStr = null;
      // console.log("BRT:Get Header:", cols);

      cols.map((key, index) => {
        ReturnStr === null
          ? (ReturnStr = `<th key="${key}">${key}</th>`)
          : (ReturnStr = ReturnStr + `<th key="${key}">${key}</th>`);
        // return `<th key="${key}">${key}</th>`;
      });
      return ReturnStr;
    }
  };

  getRowsData = function() {
    // console.log("BRT:Inside getRowsData");
    if (this.state.stateTableData) {
      var items = this.state.stateTableData;
      var keys = this.cols;
      var ReturnStr = null;
      items.map((row, index) => {
        // console.log(
        //   "getDetailRow ",
        //   index,
        //   ":",
        //   `<tr key="${index}"> ${RenderRow(this, index)}</tr> `
        // );

        // return `<tr key="${index}"> ${RenderRow(
        //   this,
        //   index
        // )} key="${index}" data=${row} keys=${keys}/></tr> `;
        let temp = `<tr key="${index}">${RenderRow(this, index)}</tr>`;

        ReturnStr === null
          ? (ReturnStr = temp)
          : (ReturnStr = ReturnStr + temp);
      });

      return ReturnStr;
    }
  };

  displaySessionIDApiKey1 = async () => {
    // this.setState(sessid_LS,apikey_LS);
    // console.log("BRT:Inside Button");

    // e.preventdefault();
    // console.log("BRT:Before");
    const sessid_LS = localStorage.getItem("sessionid_LS");
    const apikey_LS = localStorage.getItem("apiKey_LS");

    // this.setState(sessid_LS,apikey_LS);

    // console.log("BRT:Session ID:",sessid_LS);
    // console.log("BRT:API Key:",apikey_LS);
    localStorage.removeItem("sessionid_LS");
    localStorage.removeItem("apiKey_LS");

    // return 'A';

    var myHeaders = new Headers();
    myHeaders.append("SessionId", sessid_LS);
    myHeaders.append("APIKey", apikey_LS);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      Start_Date: "2020-01-01",
      End_Date: "2020-01-24",
      Interval: "Daily",
      Dimension: "",
      Filters: "-1",
      Imp_Start: "0",
      Imp_End: "100000000000"
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    // console.log("BRT:Rashmi Header:",myHeaders);
    // console.log("BRT:Rashmi Data:",raw);
    // console.log("BRT:State Data:",this.state.Data);

    try {
      const respData = await fetch(
        "http://api6.audiencelogy.com/adx_reporting/billingReport",
        requestOptions
      );
      const respData2 = await respData.json();
      // console.log("BRT:BillingAPI JSON O/P:",respData2);
      // this.setState(respData2);
      this.state.stateTableData = respData2.Data;
      this.stateTableData = JSON.stringify(this.stateTableData);
      // console.log("BRT:BillingAPI O/P:", this.state.stateTableData);
      this.setState({ stateTableData: respData2.Data });

      // const sessionID = respData2.session_id;
      // const apikey = respData2.apikey;
      // console.log("BRT:Rashmi After Api:",sessionID);

      return respData2.Data;
      // if (sessionID != null){
      //   console.log("BRT:Rashmi - Inside Session ID");
      //   // SessionForm.CallBillingReportAPI(sessionID,apikey);
      //   localStorage.setItem('sessionid_LS', sessionID);
      //   localStorage.setItem('apiKey_LS', apikey);
      return;
      // }
    } catch (error) {
      console.log("BRT:Rashmi Error");
      const errors = { ...this.state.errors };
      errors.username = error.response.data;
    }
  };

  displayTableData = async () => {
    // console.log("BRT:displayTableData Called");
    const TableData = await this.displaySessionIDApiKey1(); // (respData2.Data)
    // console.log("BRT:displayTableData Funct B4:", TableData);
    this.cols = this.getKeys();
    // console.log("BRT:displayTableData Keys:", this.cols);

    // let Rashmi = this.getHeader();
    // Rashmi = Rashmi.toString();
    // Rashmi = Rashmi.replace("</th>,<th>", "</th><th>");
    // Rashmi = Rashmi.replace(",<th>", "<th>");
    // Rashmi = Rashmi.replace(",<th>", "<th>");
    // Rashmi = Rashmi.replace(",<th>", "<th>");

    // let Deepak = this.getRowsData();
    // let Deepak = <tr key="Row1">1</tr><tr key="Row2">2</tr>;

    // Deepak = Deepak.toString();
    // Deepak = Deepak.replace(",", " ");
    // console.log("BRT:displayTableData Header:", Rashmi);
    // console.log("BRT:displayTableData Detail:", Deepak);

    // let returnValue = `<table><thead>${Rashmi}</thead><tbody>${Deepak}</tbody></table>`;
    // console.log("BRT:displayTableData Return", returnValue);
    // returnValue = returnValue.replace(",", " ");

    //this.setDisplayTableData(returnValue);
    localStorage.removeItem("BillDataHdr_1234");
    localStorage.removeItem("BillDataDtl_1234");

    // localStorage.setItem("BillDataHdr_1234", Rashmi);
    // localStorage.setItem("BillDataDtl_1234", Deepak);
    localStorage.setItem("BillDataHdr_1234", this.getHeader());
    localStorage.setItem("BillDataDtl_1234", this.getRowsData());

    this.props.history.push("/DisplayTableData");
    // this.waitForData.isLoaded = true;
    // return returnValue;
  };

  render() {
    // const a = this.displaySessionIDApiKey1;
    // a();
    // const sessid_LS = localStorage.getItem('sessionid_LS');
    //   const apikey_LS = localStorage.getItem('apiKey_LS');
    //   console.log("BRT:Render1:",sessid_LS);
    //   console.log("BRT:Render2:",apikey_LS);

    // console.log("BRT:B4 Render:", this.state.stateTableData);
    // this.displayTableData();
    //  console.log("BRT:Render:", this.state.stateTableData);

    return (
      <div>
        <HomeNav />
        <button onClick={this.displayTableData}>Display Table</button>
      </div>
    );
  }
}

const RenderRow = (CurRow, rowid) => {
  // console.log("RenderRow:", CurRow.state.stateTableData); //Table Data
  // console.log("RenderRow:", CurRow.cols); // Table Headings
  // console.log("RenderRow:", this.state.stateTableData);
  let temp = CurRow.state.stateTableData[rowid];
  // console.log("RenderRow ", rowid, ":", temp);
  var ReturnStr = null;
  CurRow.cols.map((key, index) => {
    // console.log("RenderRow:", `<td key=${key}> ${temp[key]} </td>`);
    ReturnStr === null
      ? (ReturnStr = `<td key="${key}">${temp[key]}</td>`)
      : (ReturnStr = ReturnStr + `<td key="${key}">${temp[key]}</td>`);
    // return `<td key="${key}">${temp[key]}</td>`;
  });
  return ReturnStr;
  // return CurRow.state.stateTableData.map((key, index) => {
  // let temp = CurRow.state.stateTableData[index];
  // console.log("RenderRow:", temp);

  // return `<td key=${temp[key]}> ${temp[key]} </td>`;
  // });
};
