import React, { Component } from 'react';
import LineChart from './myChart';

export default class Bitcoin extends Component {
    constructor(props) {
        super(props);
        this.state = {
          fetchingData: true,
          data: [],
        }
      }

    componentDidMount() {
        // const url = 'http://localhost:8002/api/coin/bitcoin/price_chart?from=159746040&to=1597558837.83322';
        const url = 'http://localhost:8002/api/coin/bitcoin/price_chart?days=3';
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
          <h1>30 Day Bitcoin Price Chart</h1>
          <h3>Info Box</h3>
          { !this.state.fetchingData ? <LineChart  data={ this.state.data }/> : null }
        </div>
      </div>
    );
  }
};