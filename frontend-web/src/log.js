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
                        <td>Arrived at Grand Kamala Lagoon's project</td>
                        <td style ={{color:'rgba(253, 186, 53,1)'}}>Occupied</td>
                    </tr>
                    <tr>
                        <td>15 November 2019</td>
                        <td>Komatsu D31E</td>
                        <td>B 3230 BE</td>
                        <td>Bulldozer</td>
                        <td>Arrived at Grand Kamala Lagoon's project</td>
                        <td style ={{color:'rgba(253, 186, 53,1)'}}>Occupied</td>
                    </tr>
                    <tr>
                        <td>15 November 2019</td>
                        <td>Komatsu D31E</td>
                        <td>B 1624 TKX</td>
                        <td>Bulldozer</td>
                        <td>Going to Grand Kamala Lagoon's project</td>
                        <td style ={{color:'rgba(2, 168, 194,1)'}}>On the way</td>
                    </tr>
                    <tr>
                        <td>15 November 2019</td>
                        <td>Komatsu D31E</td>
                        <td>B 3230 BE</td>
                        <td>Bulldozer</td>
                        <td>Going to Grand Kamala Lagoon's project</td>
                        <td style ={{color:'rgba(2, 168, 194,1)'}}>On the way</td>
                    </tr>
                    <tr>
                        <td>12 November 2019</td>
                        <td>Komatsu PC200</td>
                        <td>E 2920 TY</td>
                        <td>Excavator</td>
                        <td>Returning to warehouse 3</td>
                        <td style ={{color:'rgba(18, 192, 165,1)'}}>Available</td>
                    </tr>
                    <tr>
                        <td>11 November 2019</td>
                        <td>Komatsu PC200</td>
                        <td>D 2438 AC</td>
                        <td>Excavator</td>
                        <td>Arrived at Pandaan Malang Project	</td>
                        <td style ={{color:'rgba(253, 186, 53,1)'}}>Occupied</td>
                    </tr>
                    <tr>
                        <td>11 November 2019</td>
                        <td>Hino Dutro 130 HD</td>
                        <td>D 3511 RHY</td>
                        <td>Dump Truck</td>
                        <td>Going to maintanence	</td>
                        <td style ={{color:'rgba(242, 74, 123,1)'}}>Under maintanence</td>
                    </tr>
                    <tr>
                        <td>11 November 2019</td>
                        <td>Komatsu PC200</td>
                        <td>D 2438 AC</td>
                        <td>Excavator</td>
                        <td>Going to Pandaan Malang Project	</td>
                        <td style ={{color:'rgba(2, 168, 194,1)'}}>On the way</td>
                    </tr>
                    <tr>
                        <td>10 November 2019</td>
                        <td>Komatsu D31E</td>
                        <td>B 3230 BE</td>
                        <td>Bulldozer</td>
                        <td>Going to Grand Kamala Lagoon's project</td>
                        <td style ={{color:'rgba(2, 168, 194,1)'}}>On the way</td>
                    </tr>
                    <tr>
                        <td>15 November 2019</td>
                        <td>Komatsu D31E</td>
                        <td>B 1624 TKX</td>
                        <td>Bulldozer</td>
                        <td>Arrived at Grand Kamala Lagoon's project</td>
                        <td style ={{color:'rgba(253, 186, 53,1)'}}>Occupied</td>
                    </tr>
                    <tr>
                        <td>15 November 2019</td>
                        <td>Komatsu D31E</td>
                        <td>B 3230 BE</td>
                        <td>Bulldozer</td>
                        <td>Arrived at Grand Kamala Lagoon's project</td>
                        <td style ={{color:'rgba(253, 186, 53,1)'}}>Occupied</td>
                    </tr>
                    <tr>
                        <td>15 November 2019</td>
                        <td>Komatsu D31E</td>
                        <td>B 1624 TKX</td>
                        <td>Bulldozer</td>
                        <td>Going to Grand Kamala Lagoon's project</td>
                        <td style ={{color:'rgba(2, 168, 194,1)'}}>On the way</td>
                    </tr>
                    <tr>
                        <td>15 November 2019</td>
                        <td>Komatsu D31E</td>
                        <td>B 3230 BE</td>
                        <td>Bulldozer</td>
                        <td>Going to Grand Kamala Lagoon's project</td>
                        <td style ={{color:'rgba(2, 168, 194,1)'}}>On the way</td>
                    </tr>
                    <tr>
                        <td>12 November 2019</td>
                        <td>Komatsu PC200</td>
                        <td>E 2920 TY</td>
                        <td>Excavator</td>
                        <td>Returning to warehouse 3</td>
                        <td style ={{color:'rgba(18, 192, 165,1)'}}>Available</td>
                    </tr>
                    <tr>
                        <td>11 November 2019</td>
                        <td>Komatsu PC200</td>
                        <td>D 2438 AC</td>
                        <td>Excavator</td>
                        <td>Arrived at Pandaan Malang Project	</td>
                        <td style ={{color:'rgba(253, 186, 53,1)'}}>Occupied</td>
                    </tr>
                    <tr>
                        <td>11 November 2019</td>
                        <td>Hino Dutro 130 HD</td>
                        <td>D 3511 RHY</td>
                        <td>Dump Truck</td>
                        <td>Going to maintanence	</td>
                        <td style ={{color:'rgba(242, 74, 123,1)'}}>Under maintanence</td>
                    </tr>
                    <tr>
                        <td>11 November 2019</td>
                        <td>Komatsu PC200</td>
                        <td>D 2438 AC</td>
                        <td>Excavator</td>
                        <td>Going to Pandaan Malang Project	</td>
                        <td style ={{color:'rgba(2, 168, 194,1)'}}>On the way</td>
                    </tr>
                    <tr>
                        <td>10 November 2019</td>
                        <td>Komatsu D31E</td>
                        <td>B 3230 BE</td>
                        <td>Bulldozer</td>
                        <td>Going to Grand Kamala Lagoon's project</td>
                        <td style ={{color:'rgba(2, 168, 194,1)'}}>On the way</td>
                    </tr>
                    <tr>
                        <td>15 November 2019</td>
                        <td>Komatsu D31E</td>
                        <td>B 1624 TKX</td>
                        <td>Bulldozer</td>
                        <td>Arrived at Grand Kamala Lagoon's project</td>
                        <td style ={{color:'rgba(253, 186, 53,1)'}}>Occupied</td>
                    </tr>
                    <tr>
                        <td>15 November 2019</td>
                        <td>Komatsu D31E</td>
                        <td>B 3230 BE</td>
                        <td>Bulldozer</td>
                        <td>Arrived at Grand Kamala Lagoon's project</td>
                        <td style ={{color:'rgba(253, 186, 53,1)'}}>Occupied</td>
                    </tr>
                    <tr>
                        <td>15 November 2019</td>
                        <td>Komatsu D31E</td>
                        <td>B 1624 TKX</td>
                        <td>Bulldozer</td>
                        <td>Going to Grand Kamala Lagoon's project</td>
                        <td style ={{color:'rgba(2, 168, 194,1)'}}>On the way</td>
                    </tr>
                    <tr>
                        <td>15 November 2019</td>
                        <td>Komatsu D31E</td>
                        <td>B 3230 BE</td>
                        <td>Bulldozer</td>
                        <td>Going to Grand Kamala Lagoon's project</td>
                        <td style ={{color:'rgba(2, 168, 194,1)'}}>On the way</td>
                    </tr>
                    <tr>
                        <td>12 November 2019</td>
                        <td>Komatsu PC200</td>
                        <td>E 2920 TY</td>
                        <td>Excavator</td>
                        <td>Returning to warehouse 3</td>
                        <td style ={{color:'rgba(18, 192, 165,1)'}}>Available</td>
                    </tr>
                    <tr>
                        <td>11 November 2019</td>
                        <td>Komatsu PC200</td>
                        <td>D 2438 AC</td>
                        <td>Excavator</td>
                        <td>Arrived at Pandaan Malang Project	</td>
                        <td style ={{color:'rgba(253, 186, 53,1)'}}>Occupied</td>
                    </tr>
                    <tr>
                        <td>11 November 2019</td>
                        <td>Hino Dutro 130 HD</td>
                        <td>D 3511 RHY</td>
                        <td>Dump Truck</td>
                        <td>Going to maintanence	</td>
                        <td style ={{color:'rgba(242, 74, 123,1)'}}>Under maintanence</td>
                    </tr>
                    <tr>
                        <td>11 November 2019</td>
                        <td>Komatsu PC200</td>
                        <td>D 2438 AC</td>
                        <td>Excavator</td>
                        <td>Going to Pandaan Malang Project	</td>
                        <td style ={{color:'rgba(2, 168, 194,1)'}}>On the way</td>
                    </tr>
                    <tr>
                        <td>10 November 2019</td>
                        <td>Komatsu D31E</td>
                        <td>B 3230 BE</td>
                        <td>Bulldozer</td>
                        <td>Going to Grand Kamala Lagoon's project</td>
                        <td style ={{color:'rgba(2, 168, 194,1)'}}>On the way</td>
                    </tr>
                </tbody>
            </Table>
      </div>
    )
  }
}

export default itemList