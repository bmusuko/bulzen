import React from 'react'
import { Chart, Doughnut } from 'react-chartjs-2';

// const data = {
//     datasets: [{
//         data: [10, 20, 30]
//     }],

//     // These labels appear in the legend and in the tooltips when hovering different arcs
//     labels: [
//         'Red',
//         'Yellow',
//         'Blue'
//     ]
// };

const option = {
    legend: {
        display: false
    }
  }

Chart.pluginService.register({
    beforeDraw: function(chart) {
      var width = chart.chart.width,
          height = chart.chart.height,
          ctx = chart.chart.ctx;
  
      ctx.restore();
      var fontSize = (height / 114).toFixed(2);
      ctx.font = fontSize + "em sans-serif";
      ctx.textBaseline = "middle";
  
      var text = "73%",
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;
  
      ctx.fillText(text, textX, textY);
      ctx.save();
    }
});

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
                // height = '150%'
                />
            </div>
        )
    }
}

export default Health