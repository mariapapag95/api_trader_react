import React, {Component} from 'react';
import Chart from 'react-apexcharts'

class StockChart extends Component {
    
  state = {
    ticker: '',
    chart: null
  }

  setChartFromIEXResponse = (json) => {
    this.setState (
      {
        chart: {
          'options' : {
            'chart' : {'id' : 'basic-bar'},
            'xaxis' : {'categories' : json.map(entry => entry.date)}
          },
          'series' : [{
            'name' : this.state.ticker,
            'data' : json.map(entry => entry.close)
          }]
        }
      }
    )
  }

  lookup = (ticker) => {
    const promise = fetch(`http://api.iextrading.com/1.0/stock/${ticker}/chart/3m`)
    promise.then (blob => blob.json()).then(json => {
      console.log(json)
      this.setChartFromIEXResponse(json)
    })
    .catch(error => {})
  }

 componentDidUpdate() {
    this.lookup(this.props.ticker)
}

  render () {
    let chart = [];
    if (this.state.chart !== null) {
      chart = (<Chart options={this.state.chart.options}
                      series={this.state.chart.series}
                      type='line'/>)
    }
    return <div >{chart}</div>
  }
}

export default StockChart;
