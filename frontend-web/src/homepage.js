import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import heavy from './asset/heavy3.png'
import sparePart from './asset/sparePart.png'
import consumables from './asset/resources.png'

class Home extends React.Component {
    render() {
      return (
        <div>
          <Card style = {{width: '18rem' , margin:'1rem'}}>
            <a href='/heavy'>
            <CardImg top width="100%" src={heavy} alt="Card image cap" />
            </a>
            <CardBody>
            <CardTitle>Heavy Equipment</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button href='/heavy'>Button</Button>
            </CardBody>
          </Card>

          <Card style = {{width: '18rem' , margin:'1rem'}}>
            <a href='/sparepart'>
            <CardImg top width="100%" src={sparePart} alt="Card image cap" />
            </a>
            <CardBody>
            <CardTitle>Spare Part</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button href='./sparepart'>Button</Button>
            </CardBody>
          </Card>

          <Card style = {{width: '18rem' , margin:'1rem'}}>
            <a href='/consumables'>
            <CardImg top width="100%" src={consumables} alt="Card image cap" />
            </a>
            <CardBody>
            <CardTitle>Consumables</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button href='./consumables'>Button</Button>
            </CardBody>
          </Card>
        </div>
      );
    }
}
export default Home