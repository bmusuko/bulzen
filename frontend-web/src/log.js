import React from 'react'
import { Table } from 'reactstrap';

class itemList extends React.Component{
  render(){
    return (
        <div style={{margin:'2rem'}}>
            <h2>Activity Log</h2>
            <Table bordered hover inverse striped >
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Item Name</th>
                    <th>License Plate</th>
                    <th>Category</th>
                    <th>Action</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>15 November 2019</td>
                        <td>Komatsu D31E</td>
                        <td>B 1624 TKX</td>
                        <td>Bulldozer</td>
                        <td>Going to Grand Kamala Lagoon's project</td>
                        <td>On the way</td>
                    </tr>
                    <tr>
                        <td>15 November 2019</td>
                        <td>Komatsu D31E</td>
                        <td>B 3230 BE</td>
                        <td>Bulldozer</td>
                        <td>Going to Grand Kamala Lagoon's project</td>
                        <td>On the way</td>
                    </tr>
                    <tr>
                        <td>12 November 2019</td>
                        <td>Komatsu PC200</td>
                        <td>E 2920 TY</td>
                        <td>Excavator</td>
                        <td>Returning to warehouse 3</td>
                        <td>Available</td>
                    </tr>
                    <tr>
                        <td>11 November 2019</td>
                        <td>Komatsu PC200</td>
                        <td>E 2920 TY</td>
                        <td>Excavator</td>
                        <td>Going to Pandaan Malang Project	</td>
                        <td>On the way</td>
                    </tr>
                    <tr>
                        <td>15 November 2019</td>
                        <td>Komatsu D31E</td>
                        <td>B 3230 BE</td>
                        <td>Bulldozer</td>
                        <td>Going to Grand Kamala Lagoon's project</td>
                        <td>On the way</td>
                    </tr>
                </tbody>
            </Table>
      </div>
    )
  }
}

export default itemList