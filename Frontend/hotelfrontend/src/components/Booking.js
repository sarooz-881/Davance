import React, { Component } from "react";
import "../css/main.css";

class Booking extends Component {
    render() {return(<div className="book">
      
<table className="table table-striped ">

 
  <thead>
    <tr>
      <th>#</th>
      <th>Hotel Name</th>
      <th>Check In</th>
      <th>Check Out</th>
      <th>Stay</th>
      <th>Room Type</th>
      <th>Guest</th>
      <th>Room Price</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
      <th>Mobile</th>
      <th>Payment</th>      
      <th>Action</th>
    </tr>
  </thead>
 
  <tbody>
    <tr className="table-info col-mb-7">
      <th scope="row">1</th>
      <td>Hotel Prince Plaza</td>
      <td>2021/01/15</td>
      <td>2021/01/20</td>
      <td>5</td>
      <td>Single Bed</td>
      <td>3</td>
      <td>2500</td>
      <td>Ram</td>
      <td>Shrestha</td>
      <td>ramshrestha@gmail.com</td>
      <td>9810010122</td>
      <td>Cash</td>
    
      
        <td>
        {/* <button type="button" className="btn btn-success mt-2"><Link><i class='far fa-edit'/></Link></button> */}
          <button type="button" className="btn btn-danger mt-3"><i class="fa fa-trash-o"/></button>
        </td>
    </tr>
    
  </tbody>



</table>

    </div>
         )}
}
    export default Booking;