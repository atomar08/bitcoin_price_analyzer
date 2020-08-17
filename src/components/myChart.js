import React, { Component } from 'react';
import Chart from 'chart.js';

export default class LineChart extends Component {

  constructor(props) {
    super(props);
    this.state ={
      dates: [],
      payout: []
    }
  }

  // UNSAFE_componentWillReceiveProps () {
    // componentWillUpdate(){
      componentDidMount(){
     const unsortedData = this.props.data;
    let dates = [];
    let payout = [];
    for (let item in unsortedData) {
      dates.push(item[0])
      payout.push(item[1])
    }
    this.setState({
      dates: dates,
      payout: payout
    })
}

  render() {
    return (
        <canvas id='myChart'></canvas>
    );
  }
  
  componentDidMount() {
    var chartContext = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(chartContext, {
      type: 'line',
      data: {
        labels: this.state.dates,
        datasets: [{
          data: this.state.payout,
          backgroundColor: 'rgba(54, 162, 235, 0.2)', 
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxis: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
    
  }
 
};