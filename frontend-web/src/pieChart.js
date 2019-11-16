import React from 'react'
import {Pie} from 'react-chartjs-2'

class PieChart extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            labels : ['On the way', 'Maintenace', 'Occupied', 'Available'],
            datasets : [{
                data: [2000,4000,3500,600],
                backgroundColor:[
                    'rgba(2, 168, 194,1)',
                    'rgba(242, 74, 123,1)',
                    'rgba(253, 186, 53,1)',
                    'rgba(18, 192, 165,1)'
                ]
            }]
        }
    }
    render(){
        return(
            <div>
                <h2>Pie chart</h2>
                <Pie data={{
                    labels: this.state.labels,
                    datasets: this.state.datasets
                }}
                // height = '150%'
                />
            </div>
        )
    }
}

export default PieChart
