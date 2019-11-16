import React from 'react'
import {Pie} from 'react-chartjs-2'

class PieChart extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            labels : ['On the way', 'Maintenace', 'Occupied', 'Available'],
            datasets : [{
                data: [2000,4000,3500,600],
                backgroundColor:['red','blue','yellow','green']
            }]
        }
    }
    render(){
        return(
            <div>
                <h1>Pie chart</h1>
                <Pie data={{
                    labels: this.state.labels,
                    datasets: this.state.datasets
                }}
                height = '200%'
                />
            </div>
        )
    }
}

export default PieChart
