import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import heavy from './asset/heavy3.png'
import sparePart from './asset/sparePart.png'
import resources from './asset/resources.png'

class Home extends React.Component {
    render() {
      return (
        <div>
          <Card style = {{width: '18rem' , margin:'1rem'}}>
            <CardImg top width="100%" src={heavy} alt="Card image cap" />
            <CardBody>
            <CardTitle>Heavy Equipment</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button>Button</Button>
            </CardBody>
          </Card>

          <Card style = {{width: '18rem' , margin:'1rem'}}>
            <CardImg top width="100%" src={sparePart} alt="Card image cap" />
            <CardBody>
            <CardTitle>Heavy Equipment</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button>Button</Button>
            </CardBody>
          </Card>

          <Card style = {{width: '18rem' , margin:'1rem'}}>
            <CardImg top width="100%" src={resources} alt="Card image cap" />
            <CardBody>
            <CardTitle>Heavy Equipment</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button>Button</Button>
            </CardBody>
          </Card>

          {/* <Card>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <CardBody>
              <CardTitle>Card Title</CardTitle>
              <CardText>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </CardText>
            </CardBody>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Cras justo odio</ListGroupItem>
              <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
              <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
            <CardBody>
              <CardLink href="#">Card Link</CardLink>
              <CardLink href="#">Another Link</CardLink>
            </CardBody>
          </Card> */}
        </div>
      );
    }
}
export default Home