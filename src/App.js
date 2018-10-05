import React, { Component } from 'react';
import './App.css';
import WeatherDisplay from './components/WeatherDisplay';
import { connect } from 'react-redux'
import {getWeatherData} from "./actions/weatherActions"
import { injectGlobal } from 'styled-components'

class App extends Component {
  componentDidMount(){      
    this.props.getWeatherData()
  }
  render() {
    return (
      <div className="App">
        {
          this.props.weatherData.main &&
          <WeatherDisplay weatherData = {this.props.weatherData}/>
        }
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getWeatherData: () => dispatch(getWeatherData())
})

const mapStateToProps = state => {  
  return  {
  weatherData: state.weatherReducer.weatherData
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


injectGlobal`
* {
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  }

  body,html {
    margin: 0;
    height:100%;

  }

  #root {
    height:100%;
  }
  .App {
    height:100%;
  }
`
