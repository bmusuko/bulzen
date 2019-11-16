import './detail.css';
import Dropdown from './dropdown'
import React from 'react';
import { Container, Row, Col,Card,CardBody } from 'reactstrap';
import PieChartDetail from './pieChart'
import LineChartDetail from './lineChart'
import check from './asset/check.png'
import stop from './asset/stop.png'
import truck from './asset/truck.png'
import wrench from './asset/tools.png'


class Detail extends React.Component {

  constructor(props){
    super(props);
    let dropdownval = window.location.search.slice(1).split('warehouse=')[1];
    if(typeof(dropdownval) === "undefined"){
      this.state = {
        warehouse : '0'  
      }
    } else{
      this.state = {
        warehouse : dropdownval
      }
    }
    this.onchange = this.onchange.bind(this);
    console.log(this.state.warehouse);
  }

  onchange(value){
    this.setState({warehouse:value})
    console.log(value);
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
              <PieChartDetail />
              <Row style={{'marginTop' : '1rem'}}>
                <Col>
                  <Card style = {{width: '100%' , 'border':'2px solid','padding':'none'}}>
                    <CardBody style ={{backgroundColor:'red'}}>
                      <tr>
                        <td>
                          <img src={stop} width='30rem' />
                        </td>
                        <td>
                          <h3 style={{ color:'white'}}><b>78</b></h3>
                        </td>
                      </tr>
                    </CardBody>
                  </Card>
                </Col>
                <Col>
                  <Card style = {{width: '100%' , 'border':'2px solid','padding':'none'}}>
                    <CardBody style ={{backgroundColor:'red'}}>
                      <tr>
                        <td>
                          <img src={wrench} width='30rem' />
                        </td>
                        <td>
                          <h3 style={{ color:'white'}}><b>78</b></h3>
                        </td>
                      </tr>
                    </CardBody>
                  </Card>
                </Col>
                <Col>
                  <Card style = {{width: '100%' , 'border':'2px solid','padding':'none'}}>
                    <CardBody style ={{backgroundColor:'red'}}>
                      <tr>
                        <td>
                          <img src={truck} width='30rem' />
                        </td>
                        <td>
                          <h3 style={{ color:'white'}}><b>78</b></h3>
                        </td>
                      </tr>
                    </CardBody>
                  </Card>
                </Col>
                <Col>
                  <Card style = {{width: '100%' , 'border':'2px solid','padding':'none'}}>
                    <CardBody style ={{backgroundColor:'red'}}>
                      <tr>
                        <td>
                          <img src={check} width='30rem' />
                        </td>
                        <td>
                          <h3 style={{ color:'white'}}><b>78</b></h3>
                        </td>
                      </tr>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <hr style={{border: '1px solid gray'}} />
              <LineChartDetail />
            </Col>
          </Row>
        </Container>
      );
    }
}
export default Detail