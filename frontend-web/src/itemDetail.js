import React from 'react'
import excavator from './asset/kobelco.jpg'
import { Container, Table } from 'reactstrap';
import ItemHealth from './itemHealth'
import axios from 'axios'

class ItemDetail extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            health : '',
            kondisi : '',
            status  : '',
            lokasi : '',
            status_code : ''
        }

    }
    componentDidMount(){
        axios.get('http://60e0a1ed.ngrok.io/getDetailBarang/1',{"Access-Control-Allow-Origin": "*"})
        .then((response)=>{
            let res = response.data.data;
            res = JSON.parse(res.substring(1,res.length-1));
            let nama_status = '';
            if(res.status === 1){
                nama_status = 'Occupied'
            } else if (res.status === 2){
                nama_status = 'Maintanance'
            } else if (res.status === 3){
                nama_status = 'Available'
            } else if (res.status === 4){
                nama_status =  'On the way'
            }
            this.setState({
                health : res.health,
                kondisi : res.kondisi,
                status  : nama_status,
                lokasi : res.lokasi,
                status_code : res.status
            })
            console.log(this.state);
        })
        .catch((err)=>{
            console.log(err)
        })
    }

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
                                    <th colSpan='2' style={{backgroundColor:'#D1D1D1'}}><h4><b>Item Details</b></h4></th>
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
                                    <td>{this.state.lokasi}</td>
                                </tr>
                                    <tr>
                                    <th>Status</th>
                                    <td style={{color: this.state.status_code === 1 ? 'rgba(253, 186, 53,1)' : 
                                    this.state.status_code === 2 ? 'rgba(242, 74, 123,1)' :
                                    this.state.status_code === 3 ? 'rgba(18, 192, 165,1)' :
                                    this.state.status_code === 4 ? 'rgba(2, 168, 194,1)' : 'rgba(2, 168, 194,1)'
                                    , fontWeight:'bold'}}>{this.state.status}</td>
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

                                    <th colSpan='2' style={{backgroundColor:'#D1D1D1'}}><h4><b>Condition</b></h4></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.state.kondisi}</td>
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