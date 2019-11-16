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
  render() {
      return (
        <Container>
          <Row>
            <Col>
              <Row>
                <Col>
                  <h4>Select Warehouse</h4>
                </Col>
                <Col>
                <Dropdown />
                </Col>
              </Row>
              <hr />
              <Card style = {{width: '100%' , margin:'1rem','border':'2px solid','padding':'none'}}>
                <CardBody>
                <h5 style={{'margin-left' : '2rem'}}><b>Warehouse 1</b></h5>
                </CardBody>
              </Card>
              <Card style = {{width: '100%' , margin:'1rem','border':'2px solid','padding':'none'}}>
                <CardBody>
                <h5 style={{'margin-left' : '2rem'}}><b>Warehouse 1</b></h5>
                </CardBody>
              </Card>
              <Card style = {{width: '100%' , margin:'1rem','border':'2px solid','padding':'none'}}>
                <CardBody>
                <h5 style={{'margin-left' : '2rem'}}><b>Warehouse 1</b></h5>
                </CardBody>
              </Card>
              <Card style = {{width: '100%' , margin:'1rem','border':'2px solid','padding':'none'}}>
                <CardBody>
                <h5 style={{'margin-left' : '2rem'}}><b>Warehouse 1</b></h5>
                </CardBody>
              </Card>
              <Card style = {{width: '100%' , margin:'1rem','border':'2px solid','padding':'none'}}>
                <CardBody>
                <h5 style={{'margin-left' : '2rem'}}><b>Warehouse 1</b></h5>
                </CardBody>
              </Card>
              <Card style = {{width: '100%' , margin:'1rem','border':'2px solid','padding':'none'}}>
                <CardBody>
                <h5 style={{'margin-left' : '2rem'}}><b>Warehouse 1</b></h5>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <PieChartDetail />
              <Row>
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