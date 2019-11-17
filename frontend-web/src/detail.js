import './detail.css';
import Dropdown from './dropdown'
import React from 'react';
import { Container, Row, Col,Card,CardBody } from 'reactstrap';
import ItemList from './itemList'
import check from './asset/check.png'
import stop from './asset/stop.png'
import truck from './asset/truck.png'
import wrench from './asset/tools.png'
import {Pie,Line} from 'react-chartjs-2'


const datas = [
  [70,30,99,50],
  [24,40,70,64],
  [70,70,97,60],
  [10,2,40,20]
]

const line_datas = [
  [65, 59, 80, 81, 56, 55, 50],
  [60, 40, 45, 54, 56, 52, 64],
  [65, 59, 81, 52, 56, 45, 60],
  [25, 27, 20, 30, 25, 27, 20]
]

class Detail extends React.Component {

  constructor(props){
    super(props);
    let dropdownval = window.location.search.slice(1).split('warehouse=')[1];
    if(typeof(dropdownval) === "undefined"){
      this.state = {
        warehouse : '0',
        labels : ['On the way', 'Maintenace', 'Occupied', 'Available'],
        data: [],
        line_data: [],
        is_click : false,
        warehouse_text: '0'
      }
    } else{
      this.state = {
        warehouse : dropdownval,
        warehouse_text: dropdownval,
        labels : ['On the way', 'Maintenace', 'Occupied', 'Available'],
        data: datas[parseInt(dropdownval)-1],
        line_data: line_datas[parseInt(dropdownval)-1],
        is_click : false
      }
    }
    this.onchange = this.onchange.bind(this);
    this.handleclick = this.handleclick.bind(this);
  }

  onchange(value){
    this.setState({warehouse:value,data:datas[parseInt(value)-1],line_data:line_datas[parseInt(value)-1],warehouse_text : value});
  }

  handleclick(){
    this.setState({is_click:true,data:datas[3],line_data:line_datas[3],warehouse_text : '4'});
  }

  render() {
      return (
        <Container style={{'marginTop' : '2rem'}}>
          <Row>
            <Col>
              <Row>
                <Col>
                  <h4>Select Warehouse</h4>
                </Col>
                <Col>
                <Dropdown warehouse={this.state.warehouse} onchange={this.onchange}/>
                </Col>
              </Row>
              <hr />
              <Card style = {{width: '80%' , margin:'1rem','border':'2px solid','padding':'none'}}>
                <CardBody>
                <h5 style={{'margin' :'auto'}}><b>Dump Truck</b></h5>
                </CardBody>
              </Card>
              <Card onClick={this.handleclick} style = {{width: '80%' , margin:'1rem','border':'2px solid','padding':'none','backgroundColor': this.state.is_click ? 'rgba(211,211,211,1)' : 'none'}}>
                <CardBody>
                <h5 style={{'margin' :'auto'}}><b>BullDozer</b></h5>
                </CardBody>
              </Card>
              <Card style = {{width: '80%' , margin:'1rem','border':'2px solid','padding':'none'}}>
                <CardBody>
                <h5 style={{'margin' :'auto'}}><b>Tower Crane</b></h5>
                </CardBody>
              </Card>
              <Card style = {{width: '80%' , margin:'1rem','border':'2px solid','padding':'none'}}>
                <CardBody>
                <h5 style={{'margin' :'auto'}}><b>Concrete Pump</b></h5>
                </CardBody>
              </Card>
              <Card style = {{width: '80%' , margin:'1rem','border':'2px solid','padding':'none'}}>
                <CardBody>
                <h5 style={{'margin' :'auto'}}><b>Generating Set</b></h5>
                </CardBody>
              </Card>
              <Card style = {{width: '80%' , margin:'1rem','border':'2px solid','padding':'none'}}>
                <CardBody>
                <h5 style={{'margin' :'auto'}}><b>Passenger Hoist</b></h5>
                </CardBody>
              </Card>
              <Card style = {{width: '80%' , margin:'1rem','border':'2px solid','padding':'none'}}>
                <CardBody>
                <h5 style={{'margin' :'auto'}}><b>Excavator</b></h5>
                </CardBody>
              </Card>
            </Col>
            <Col>
            { this.state.warehouse === '0' ||
            <div>
            <h2><b>{
              this.state.warehouse_text === '1' ? 'Warehouse Sekayu' : 
              this.state.warehouse_text === '2' ? 'Warehouse Lebakgede' :
              this.state.warehouse_text === '3' ? 'Warehouse Cileungsi' : 
              this.state.warehouse_text === '4' ? 'Buldozer' : 'Warehouse'

            } Status</b></h2>
              <Pie 
                data=
                {{
                  labels : this.state.labels,
                  datasets : [{
                    data : this.state.data,
                    backgroundColor:[
                    'rgba(2, 168, 194,1)',
                    'rgba(242, 74, 123,1)',
                    'rgba(253, 186, 53,1)',
                    'rgba(18, 192, 165,1)'
                    ]
                  }]
                }} 
                options={{
                  legend: {
                    display: false
                  }
                }}
              />
              <Row style={{'marginTop' : '1rem'}}>
                <Col>
                  <Card style = {{width: '100%' , 'border':'2px solid','padding':'none'}}>
                    <CardBody style ={{backgroundColor:'rgba(253, 186, 53,1)'}}>
                      <tr>
                        <td>
                          <img src={stop} width='30rem' alt='gambar'/>
                        </td>
                        <td>
                          <h3 style={{ color:'white'}}><b>{this.state.data[2]}</b></h3>
                        </td>
                      </tr>
                    </CardBody>
                  </Card>
                </Col>
                <Col>
                  <Card style = {{width: '100%' , 'border':'2px solid','padding':'none'}}>
                    <CardBody style ={{backgroundColor:'rgba(242, 74, 123,1)'}}>
                      <tr>
                        <td>
                          <img src={wrench} width='30rem' alt='gambar'/>
                        </td>
                        <td>
                          <h3 style={{ color:'white'}}><b>{this.state.data[1]}</b></h3>
                        </td>
                      </tr>
                    </CardBody>
                  </Card>
                </Col>
                <Col>
                  <Card style = {{width: '100%' , 'border':'2px solid','padding':'none'}}>
                    <CardBody style ={{backgroundColor:'rgba(2, 168, 194,1)'}}>
                      <tr>
                        <td>
                          <img src={truck} width='30rem' alt='gambar'/>
                        </td>
                        <td>
                          <h3 style={{ color:'white'}}><b>{this.state.data[0]}</b></h3>
                        </td>
                      </tr>
                    </CardBody>
                  </Card>
                </Col>
                <Col>
                  <Card style = {{width: '100%' , 'border':'2px solid','padding':'none'}}>
                    <CardBody style ={{backgroundColor:'rgba(18, 192, 165,1)'}}>
                      <tr>
                        <td>
                          <img src={check} width='30rem' alt='gambar' />
                        </td>
                        <td>
                          <h3 style={{ color:'white'}}><b>{this.state.data[3]}</b></h3>
                        </td>
                      </tr>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <hr style={{border: '1px solid gray'}} />
              <h2 style={{fontWeight:'bold'}}>Units available per day</h2>
            <Line ref="chart" data={{
              labels: [11, 12, 13,14, 15, 16, 17],
              datasets: [
                {
                    label : 'Jumlah',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "#FFFFF",
                    borderColor: "rgba(18, 192, 165,1)",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "#4976D1",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "#FFFFFF",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: this.state.line_data
                }
              ]
            }}
            options={{
                  legend: {
                    display: false
                  },
                  scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                  }
                }} />
              </div>
            }
            </Col>
              {!this.state.is_click || <ItemList /> }
          </Row>
        </Container>
      );
    }
}
export default Detail