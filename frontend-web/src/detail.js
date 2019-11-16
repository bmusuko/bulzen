import './detail.css';

import React from 'react';
import { ButtonDropdown, Container, Row, Col, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import PieChartDetail from './pieChart'
import LineChartDetail from './lineChart'

const Example = (props) => {
  const [dropdownOpen, setOpen] = React.useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Button Dropdown
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Jakarta</DropdownItem>
        {/* <DropdownItem disabled>Action</DropdownItem> */}
        <DropdownItem>Warehouse 1</DropdownItem>
        <DropdownItem>Warehouse 2</DropdownItem>
        <DropdownItem divider />
        <DropdownItem header>Bekasi</DropdownItem>
        <DropdownItem>Warehouse 3</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
}

class Detail extends React.Component {
  // const [dropdownOpen, setDropdownOpen] = React.useState(false);
  
  // const toggle = () => setDropdownOpen(prevState => !prevState);
  render() {
      return (
        <Container>
          <Row>
            <Col>
              <h4>Select Warehouse</h4>
              <Example />
            </Col>
            <Col>
            <PieChartDetail />
            <hr style={{border: '1px solid gray'}} />
            <LineChartDetail />
            </Col>
          </Row>
        </Container>
      );
    }
}
export default Detail