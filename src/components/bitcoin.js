import React, { Component } from 'react';
import LineChart from './myChart';
import DateTimeSelector from './datetime';

export default class Bitcoin extends Component {
    constructor(props) {
        super(props);
        this.state = {
          fetchingData: true,
          data: [],
          // start: moment(new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0,0,0,0)),
          // end: moment(start).add(1, "days").subtract(1, "seconds"),
        }
      }

    componentDidMount() {
        // const url = 'http://localhost:8002/api/coin/bitcoin/price_chart?from=this.state.start&to=this.state.end';
        const url = 'http://localhost:8002/api/coin/bitcoin/price_chart?days=1';
        fetch(url)
          .then(response => response.json())
          .then(bitcoinData => {
             console.log(bitcoinData.prices);
            this.setState({
              data: bitcoinData.prices,
              fetchingData: false
            })
          })
          .catch(e => {
            console.log(e);
          })
      }
  render() {
    return (
      <div className='main'>
        <div className='mainDiv'>
          <h1>Bitcoin Price Analyzer</h1>
          <DateTimeSelector/>
          { !this.state.fetchingData ? <LineChart  data={ this.state.data }/> : null }
        </div>
      </div>
    );
  }
};