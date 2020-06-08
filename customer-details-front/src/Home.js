import React from 'react';
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import {requestCustomerDataApi} from "./actions"
import{} from "./home.css"
import { Button,Row,Col,Form } from 'react-bootstrap';
import Female_User from "./female.jpg";
import Male_User from "./male.png";
class Home extends React.Component{
state={
showing:true,
clicked_show_id:null
};
componentDidMount(){
this.props.requestCustomerDataApi();
}
showAddress=id=>(e)=>{
e.preventDefault(); 
e.nativeEvent.stopImmediatePropagation();
this.setState({ showing: false });
this.setState({clicked_show_id:id})
};
hideAddress=(e)=>{
e.preventDefault(); 
e.nativeEvent.stopImmediatePropagation();
this.setState({clicked_show_id:null})
};
render(){
console.log("Home : ",this.props.cust_data.data)
const results= this.props.cust_data.data;
console.log("res : ",results);
return (
<div className="container">
   <h1 className="text-center">Customer Details</h1>
   <Row className="cust_row">
      {results !== undefined ?
      results.map((results,index)=>
      <Col lg={3} md={3}>
      <div className="cust_col">
         <div >
            <img src={results.sex==="Female"?Female_User:Male_User} alt="user" width="100%"/>
         </div>
         {results._id===this.state.clicked_show_id?
         <div className="cust_details">
            <div className="cust_name text-center">{results.cust_name}</div>
            <div className="cust_address">{results.address1}</div>
            <div className="cust_address">{results.address2}</div>
            <Form className="text-center" >
               <button className="show_btn" onClick={this.hideAddress} >Hide Address</button>
            </Form>
         </div>
         :  
         <div className="cust_details ">
            <div className="cust_name text-center">{results.cust_name}</div>
            <div className="cust_id">Id: {results.cust_id}</div>
            <div className="cust_age">Age: {results.age}</div>
            <div className="cust_sex">Sex: {results.sex}</div>
            <Form className="text-center" >
               <button className="show_btn" onClick={this.showAddress(results._id)} >Show Address</button>
            </Form>
         </div>
         }
      </div>
      </Col>
      ):"loading......"}
   </Row>
</div>
)}
}
const mapStateToProps=state=>({cust_data: state.data});
const mapDispatchToProps=dispatch=>bindActionCreators({requestCustomerDataApi},dispatch);
export default connect(mapStateToProps,mapDispatchToProps)(Home);