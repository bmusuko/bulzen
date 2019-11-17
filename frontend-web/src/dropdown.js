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
                dropDownText: 'Select Warehouse',
                dropdownOpen: false,
            };
        } else{
            let text = ''
            if(this.props.warehouse == 1){
                text = 'Warehouse Sekayu'
            } else if(this.props.warehouse == 2){
                text = 'Warehouse Lebakgede'
            } else{
                text = 'Warehouse Cileungsi'
            }
            this.state = {
                actions: [],
                dropDownValue: 'Warehouse '+ this.props.warehouse,
                dropdownOpen: false,
                dropDownText: text 
            };
        }
    }
    toggle(event) {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    changeValue(event){
        this.setState({dropDownValue: event.currentTarget.value,dropDownText: event.currentTarget.getAttribute('text')});
        this.props.onchange(event.currentTarget.value.split(' ')[1])
    }
    render(){
        return (
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>
                {this.state.dropDownText}
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem header>Jawa Barat</DropdownItem>
                <DropdownItem onClick={this.changeValue} value='Warehouse 3' text='Warehouse Cileungsi'>Warehouse Cileungsi</DropdownItem>
                <DropdownItem onClick={this.changeValue} value='Warehouse 2' text='Warehouse Lebakgede'>Warehouse Lebakgede</DropdownItem>
                <DropdownItem divider />
                <DropdownItem header>Jawa Tengah</DropdownItem>
                <DropdownItem onClick={this.changeValue} value='Warehouse 1' text='Warehouse Sekayu'>Warehouse Sekayu</DropdownItem>
            </DropdownMenu>
            </ButtonDropdown>
        )
    }
}
export default Dropdown;