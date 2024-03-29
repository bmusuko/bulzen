import React from 'react'
import {Line} from 'react-chartjs-2'

const data = {
  labels: [11, 12, 13,14, 15, 16, 17],
  datasets: [
    {
        label : 'Jumlah',
        fill: false,
        lineTension: 0.1,
        backgroundColor: "#4976D1",
        borderColor: "#4976D1",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "#4976D1",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#FFFFFF",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

class LineChart extends React.Component{
    render() {
        return (
          <div>
            <h2>Units available per day</h2>
            <Line ref="chart" data={data}
            options={{
                  legend: {
                    display: false
                  }
                }} />
          </div>
        );
      }
}

export default LineChart
