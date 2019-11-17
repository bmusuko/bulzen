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
        console.log(this.props)
        this.state = {
            labels : ['a', 'b'],
            datasets : [{
                data: [this.props.health,100-this.props.health],
                backgroundColor:[
                    (this.props.health >= 70) ? '#4CAF50' :
                    this.props.health >=40 ? 'rgba(253, 186, 53,1)' : 'rgba(255, 0, 90,1)',
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
                <h3 style={{textAlign:'center',fontWeight:'bold', color:
                    (this.props.health >= 70) ? '#4CAF50' :
                    this.props.health >=40 ? 'rgba(253, 186, 53,1)' : 'rgba(255, 0, 90,1)'
                }}>{this.props.health}%</h3>
            </div>
        )
    }
}

export default Health