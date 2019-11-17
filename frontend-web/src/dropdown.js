import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';



class Dropdown extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.changeValue = this.changeValue.bind(this);
        if(this.props.warehouse === '0'){
            this.state = {
                actions: [],
                dropDownValue: 'Select Warehouse',
                dropdownOpen: false,
            };
        } else{
            this.state = {
                actions: [],
                dropDownValue: 'Warehouse '+ this.props.warehouse,
                dropdownOpen: false,
            };
        }
    }
    toggle(event) {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    changeValue(event){
        this.setState({dropDownValue: event.currentTarget.value})
        this.props.onchange(event.currentTarget.value.split(' ')[1])
    }
    render(){
        return (
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>
                {this.state.dropDownValue}
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem header>Jakarta</DropdownItem>
                <DropdownItem onClick={this.changeValue} value='Warehouse 1'>Warehouse 1</DropdownItem>
                <DropdownItem onClick={this.changeValue} value='Warehouse 2'>Warehouse 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem header>Bekasi</DropdownItem>
                <DropdownItem onClick={this.changeValue} value='Warehouse 3'>Warehouse Cileungsi</DropdownItem>
            </DropdownMenu>
            </ButtonDropdown>
        )
    }
}
export default Dropdown;