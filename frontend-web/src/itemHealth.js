import React from 'react'
import { Chart, Doughnut } from 'react-chartjs-2';

const option = {
    legend: {
        display: false
    },
    tooltips: {enabled: false},
    hover: {mode: null},
  }

class Health extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            labels : ['a', 'b'],
            datasets : [{
                data: [73,27],
                backgroundColor:[
                    '#4CAF50',
                    'white'
                ]
            }]
        }
    }
    render(){
        return(
            <div>
                <h2 style={{textAlign:'center'}}>Health Status</h2>
                <Doughnut data={{
                    labels: this.state.labels,
                    datasets: this.state.datasets
                }} options={option}
                />
                <h3 style={{textAlign:'center',fontWeight:'bold', color:'#4caf50'}}>73%</h3>
            </div>
        )
    }
}

export default Health