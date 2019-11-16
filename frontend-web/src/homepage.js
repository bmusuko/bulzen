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
        "rgba(255, 127, 0)",
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
        "rgba(0, 255, 0)",
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
        "rgba(255, 0, 0)",
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
                <h4 style={{'textAlign' : 'center'}}><b>Warehouse 1</b></h4>
                <Doughnut ref="chart" data={data1} options={option}/>
                <CardSubtitle style={{'textAlign' : 'center','margin-top':'1rem'}}><b>60 %</b></CardSubtitle>
                <CardText>Jl. Raya Narogong Km 15 57 Cileungsi</CardText>
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
                <h4 style={{'textAlign' : 'center'}}><b>Warehouse 2</b></h4>
                <Doughnut ref="chart" data={data2} options={option}/>
                <CardSubtitle style={{'textAlign' : 'center','margin-top':'1rem'}}><b>30 %</b></CardSubtitle>
                <CardText>Jl. Pemuda No.165, Sekayu, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah</CardText>
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
                <h4 style={{'textAlign' : 'center'}}><b>Warehouse 3</b></h4>
                <Doughnut ref="chart" data={data3} options={option}/>
                <CardSubtitle style={{'textAlign' : 'center','margin-top':'1rem'}}><b>90 %</b></CardSubtitle>
                <CardText>Jl. Imam Bonjol No.16, Lebakgede, Kecamatan Coblong</CardText>
                <Button href='/detail?warehouse=3'>Detail</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      );
    }
}
export default Home