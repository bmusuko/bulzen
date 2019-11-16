import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';



class Dropdown extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.changeValue = this.changeValue.bind(this);
        this.state = {
            actions: [],
            dropDownValue: 'Select action',
            dropdownOpen: false,
        };
    }
    toggle(event) {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    changeValue(event){
        this.setState({dropDownValue: event.currentTarget.textContent})
    }
    render(){
        return (
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>
                {this.state.dropDownValue}
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem header>Jakarta</DropdownItem>
                <DropdownItem onClick={this.changeValue} onclickdropDownValue="Warehouse 1">Warehouse 1</DropdownItem>
                <DropdownItem onClick={this.changeValue} dropDownValue="Warehouse 2">Warehouse 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem header>Bekasi</DropdownItem>
                <DropdownItem onClick={this.changeValue} dropDownValue="Warehouse 3">Warehouse 3</DropdownItem>
            </DropdownMenu>
            </ButtonDropdown>
        )
    }
}
export default Dropdown;