import './detail.css';
import Dropdown from './dropdown'
import React from 'react';
import { Container, Row, Col,Card,CardBody } from 'reactstrap';
import PieChartDetail from './pieChart'


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
            </Col>
          </Row>
        </Container>
      );
    }
}
export default Detail