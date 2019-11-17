import React from 'react'
import excavator from './asset/kobelco.jpg'
import { Container, Table } from 'reactstrap';
import ItemHealth from './itemHealth'

class ItemDetail extends React.Component{
  render(){
    return (
        <Container>
            <div class="row">
                <div class="col-sm-4">
                    <img width='80%' src={excavator} alt='gambar'></img>
                </div>
                <div class="col-sm-4">
                    <Table size='sm' borderless style={{width:'20rem'}}>
                        <thead>
                            <tr>
                                <th colSpan='2' style={{backgroundColor:'#EEEEEE'}}><h4>Item Details</h4></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Category</th>
                                <td>Bulldozer</td>
                            </tr>
                            <tr>
                                <th>Nama</th>
                                <td>Kobelco D-150</td>
                            </tr>
                            <tr>
                                <th>Year</th>
                                <td>2012</td>
                            </tr>
                            <tr>
                                <th>Lisence Plate</th>
                                <td>B 5836 XXW</td>
                            </tr>
                            <tr>
                                <th>Lokasi</th>
                                <td>Warehouse 2</td>
                            </tr>
                                <tr>
                                <th>Status</th>
                                <td style={{color:'green', fontWeight:'bold'}}>Available</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div class="col-sm-4">
                    <ItemHealth />
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4">
                    <Table size='sm' borderless style={{width:'20rem'}}>
                        <thead>
                            <tr style={{borderBottom: '1px solid #AAAAAA'}}>
                            <th>Used in</th>
                            <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{borderBottom: '1px solid #DDDDDD'}}>
                                <td>Pandaan Malang Project</td>
                                <td>20 December 2016</td>
                            </tr>
                            <tr style={{borderBottom: '1px solid #DDDDDD'}}>
                                <td>Grand Kamala Lagoon Project</td>
                                <td>23 Maret 2016</td>
                            </tr>
                            <tr style={{borderBottom: '1px solid #DDDDDD'}}>
                                <td>Trans Sumatra Toll Road</td>
                                <td>8 Maret 2016</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div class="col-sm-4">
                <Table size='sm' borderless style={{width:'20rem'}}>
                        <thead>
                            <tr>
                                <th colSpan='2' style={{backgroundColor:'#EEEEEE'}}><h4>Condition</h4></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Bulldozer dalam keadaan cukup baik. Mesin masih dapat berfungsi dengan baik. Rail dalam keadaan kotor.</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </Container>
    )
  }
}

export default ItemDetail