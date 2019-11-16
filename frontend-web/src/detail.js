import './detail.css';
import Dropdown from './dropdown'
import React from 'react';
import { Container, Row, Col,Card,CardBody } from 'reactstrap';
import LineChart from './lineChart'
import check from './asset/check.png'
import stop from './asset/stop.png'
import truck from './asset/truck.png'
import wrench from './asset/tools.png'
import {Pie} from 'react-chartjs-2'


const datas = [
  [70,30,99,50],
  [24,40,70,64],
  [70,70,97,60],
  [10,2,40,20]
]
class Detail extends React.Component {

  constructor(props){
    super(props);
    let dropdownval = window.location.search.slice(1).split('warehouse=')[1];
    if(typeof(dropdownval) === "undefined"){
      this.state = {
        warehouse : '0',
        labels : ['On the way', 'Maintenace', 'Occupied', 'Available'],
        data: []
      }
    } else{
      this.state = {
        warehouse : dropdownval,
        labels : ['On the way', 'Maintenace', 'Occupied', 'Available'],
        data: datas[dropdownval-1]
      }
    }
    this.onchange = this.onchange.bind(this);
  }

  onchange(value){
    this.setState({warehouse:value,data:datas[value-1]});
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
              <Card style = {{width: '80%' , margin:'1rem','border':'2px solid','padding':'none'}}>
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

              />
              <Row style={{'marginTop' : '1rem'}}>
                <Col>
                  <Card style = {{width: '100%' , 'border':'2px solid','padding':'none'}}>
                    <CardBody style ={{backgroundColor:'rgba(253, 186, 53,1)'}}>
                      <tr>
                        <td>
                          <img src={stop} width='30rem' />
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
                          <img src={wrench} width='30rem' />
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
                          <img src={truck} width='30rem' style={{'padddingTop' : '-2rem'}} />
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
                          <img src={check} width='30rem' />
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
              <LineChart />
              </div>
            }
            </Col>
          </Row>
        </Container>
      );
    }
}
export default Detail