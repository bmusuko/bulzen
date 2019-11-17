import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, Row, Col
  } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import warehouse1 from './asset/warehouse1.jpg'
import warehouse2 from './asset/warehouse2.jpg'
import warehouse3 from './asset/warehouse3.jpg'
import { Doughnut } from 'react-chartjs-2';

const data1 = {
  labels: ["Available","Not Available"],
  datasets: [
    {
      label: "Capacity",
      backgroundColor: [
        "rgba(253, 186, 53,1)",
        "rgba(0,0,0,0)"
      ],
      data: [60,40]
    }
  ],
};

const option = {
  legend: {
      display: false
  }
}


const data2 = {
  labels: ["Available","Not Available"],
  datasets: [
    {
      label: "Capacity",
      backgroundColor: [
        "#4CAF50",
        "rgba(0,0,0,0)"
      ],
      data: [30,70]
    }
  ],
};

const data3 = {
  labels: ["Available","Not Available"],
  datasets: [
    {
      label: "Capacity",
      backgroundColor: [
        "rgba(255, 0, 90,1)",
        "rgba(0,0,0,0)"
      ],
      data: [90,10]
    }
  ],
};


class Home extends React.Component {
    render() {
      return (
        <Container style={{'margin-top' : '5rem'}}>
          <Row>
            <Col>
              <Card style = {{width: '18rem' , margin:'1rem'}}>
                <a href='/detail?warehouse=1'>
                <CardImg top width="100%" src={warehouse1} alt="Card image cap" />
                </a>
                <CardBody>
                <h4 style={{'textAlign' : 'center'}}><b>Warehouse Sekayu</b></h4>
                <Doughnut ref="chart" data={data1} options={option}/>
                <CardSubtitle style={{'textAlign' : 'center','margin-top':'1rem'}}><b>60 % Storage Space Used</b></CardSubtitle>
                <CardText style={{textAlign:'center', color: "rgba(253, 186, 53,1)"}}>768 m2 free space </CardText>
                <Button href='/detail?warehouse=1'>Detail</Button>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card style = {{width: '18rem' , margin:'1rem'}}>
                <a href='/detail?warehouse=2'>
                <CardImg top width="100%" src={warehouse2} alt="Card image cap" />
                </a>
                <CardBody>
                <h4 style={{'textAlign' : 'center'}}><b>Warehouse Lebakgede</b></h4>
                <Doughnut ref="chart" data={data2} options={option}/>
                <CardSubtitle style={{'textAlign' : 'center','margin-top':'1rem'}}><b>30 % Storage Space Used</b></CardSubtitle>
                <CardText style={{textAlign:'center', color: "#4CAF50"}}>1025 m2 free space </CardText>
                <Button href='/detail?warehouse=2'>Detail</Button>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card style = {{width: '18rem' , margin:'1rem'}}>
                <a href='/detail?warehouse=3'>
                <CardImg top width="100%" src={warehouse3} alt="Card image cap" />
                </a>
                <CardBody>
                <h4 style={{'textAlign' : 'center'}}><b>Warehouse Cileungsi</b></h4>
                <Doughnut ref="chart" data={data3} options={option}/>
                <CardSubtitle style={{'textAlign' : 'center','margin-top':'1rem'}}><b>90 % Storage Space Used</b></CardSubtitle>
                <CardText style={{textAlign:'center', color: "rgba(255, 0, 90,1)"}}>150 m2 free space </CardText>
                <Button href='/detail?warehouse=3' class="btn btn-default w-100">Detail</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      );
    }
}
export default Home