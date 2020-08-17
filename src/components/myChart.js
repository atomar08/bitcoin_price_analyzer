import React, { Component } from 'react';
import Chart from 'chart.js';
//import unix_timestamp from timestamp;

export default class LineChart extends Component {

  constructor(props) {
    super(props);
    this.state ={
      dates: [],
      price: []
    }
  
    this.convertUnixTimeStampToDate = this.convertUnixTimeStampToDate.bind(this);
  }

  convertUnixTimeStampToDate(unixTimeStamp) { 
    var a = new Date(unixTimeStamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min; // + ':' + sec ;
    return time;
  }

   //UNSAFE_componentWillReceiveProps () {
     //componentWillUpdate(){
    componentWillMount(){
     const unsortedData = this.props.data;
    let dates = [];
    let price = [];
    for (let item in unsortedData) {
      // dates.push(item[0])
      dates.push(this.convertUnixTimeStampToDate(item[0]))
      price.push(item[1])
    }
    this.setState({
      dates: dates,
      price: price
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
      // type: 'bar',
      data: {
        labels: this.state.dates,
        datasets: [{
          data: this.state.price,
          backgroundColor: [
            // 'rgba(54, 162, 235, 0.2)', 
            // 'rgba(0, 0, 128, 0.6)',         // navy
                        'rgba(0, 0, 255, 0.6)',         // blue
                        'rgba(0, 128, 0, 0.6)',         // green
                        'rgba(0, 128, 128, 0.6)',       // teal
                        'rgba(0, 255, 255, 0.6)',       // aqua
                        'rgba(128, 0, 0, 0.6)',         // maroon
                        'rgba(192, 192, 192, 0.6)',     // silver
                        'rgba(255, 0, 0, 0.6)',         // red
                        'rgba(255, 0, 255, 0.6)',       // fuchsia
                        'rgba(255, 255, 0, 0.6)',       // yellow
                        'rgba(54, 162, 235, 0.6)',
                        // 'rgba(75, 192, 132, 0.6)',
                        // 'rgba(153, 102, 132, 0.6)',
                        // 'rgba(255, 99, 132, 0.6)',
                        // 'rgba(255, 206, 132, 0.6)',
                        // 'rgba(255, 159, 132, 0.6)',
                        // 'rgba(255, 99, 132, 0.6)',
          ],
          borderColor: 'rgba(54, 162, 235, 1)',

          borderWidth: 2
        }]
      },
      // options: {
      //   scales: {
      //     yAxis: [{
            // ticks: {
            //   beginAtZero: true
            // }
      //     }]
      //   }
      // }
    });
    
  }

};