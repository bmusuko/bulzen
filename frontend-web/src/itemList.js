import React from 'react'
import { Table } from 'reactstrap';

class itemList extends React.Component{
  render(){
    return (
      <Table bordered hover inverse striped >
        <thead>
          <tr>
            <th>#</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Year</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <th scope="row">
                <a href='/itemDetail' style={{textDecoration:'inherit',color:'inherit'}}>1</a>
              </th>
              <td>
                <a href='/itemDetail' style={{textDecoration:'inherit',color:'inherit'}}>Komatsu</a>
              </td>
              <td>
                <a href='/itemDetail' style={{textDecoration:'inherit',color:'inherit'}}>D85ESS-2</a>
              </td>
              <td>
                <a href='/itemDetail' style={{textDecoration:'inherit',color:'inherit'}}>2009</a>
              </td>
              <td>
                <a href='/itemDetail' style={{textDecoration:'inherit',color:'inherit'}}><b style={{'color':'rgba(253, 186, 53,1)'}}>Occupied</b></a>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <a href='/itemDetail' style={{textDecoration:'inherit',color:'inherit'}}>2</a>
              </th>
              <td>
                <a href='/itemDetail' style={{textDecoration:'inherit',color:'inherit'}}>Komatsu</a>
              </td>
              <td>
                <a href='/itemDetail' style={{textDecoration:'inherit',color:'inherit'}}>D31E</a>
              </td>
              <td>
                <a href='/itemDetail' style={{textDecoration:'inherit',color:'inherit'}}>2012</a>
              </td>
              <td>
                <a href='/itemDetail' style={{textDecoration:'inherit',color:'inherit'}}><b style={{'color' : 'rgba(2, 168, 194,1)'}}>On The Way</b></a>
              </td>
            </tr>
            <tr>
            <th scope="row">
                <a href='/itemDetail' style={{textDecoration:'inherit',color:'inherit'}}>3</a>
              </th>
              <td>
                <a href='/itemDetail' style={{textDecoration:'inherit',color:'inherit'}}>Komatsu</a>
              </td>
              <td>
                <a href='/itemDetail' style={{textDecoration:'inherit',color:'inherit'}}>D150</a>
              </td>
              <td>
                <a href='/itemDetail' style={{textDecoration:'inherit',color:'inherit'}}>2012</a>
              </td>
              <td>
                <a href='/itemDetail' style={{textDecoration:'inherit',color:'inherit'}}><b style={{'color':'rgba(253, 186, 53,1)'}}>Occupied</b></a>
              </td>
            </tr>
          <tr>
            <th scope="row">4</th>
            <td>XCMG</td>
            <td>TY230</td>
            <td>2009</td>
            <td><b style={{'color' : 'rgba(242, 74, 123,1)'}}>Under Maintanance</b></td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Caterpillar</td>
            <td>D6T-XL</td>
            <td>2018</td>
            <td><b style={{'color' : 'rgba(18, 192, 165,1)'}}>Available</b></td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Shanthui</td>
            <td>SD16</td>
            <td>2012</td>
            <td><b style={{'color' : 'rgba(242, 74, 123,1)'}}>Under Maintanance</b></td>
          </tr>
        </tbody>
      </Table>
    )
  }
}

export default itemList