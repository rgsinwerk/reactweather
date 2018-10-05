import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import WeatherItem from './WeatherItem'
// import ReactTransitionGroup from 'react-addons-transition-group'


class WeatherDetails extends Component {
  render() {
    return (
      <Wrapper>
          <Title>Details</Title>
          <FlexContainer>
            <Image src={this.props.weatherData.weather[0].icon}/>
            <DataWrapper>
                <WeatherItem value={this.props.weatherData.main.pressure}>Pressure</WeatherItem>
                <WeatherItem value={this.props.weatherData.main.humidity}>Humidity</WeatherItem>
                <WeatherItem value={this.props.weatherData.wind.speed}>Wind Speed</WeatherItem>
                <WeatherItem value={this.props.weatherData.main.sea_level}>Sea Level</WeatherItem>
                <WeatherItem value={this.props.weatherData.main.grnd_level}>Ground Level</WeatherItem>
                <WeatherItem value={this.props.weatherData.sys.sunrise}>Sunrise</WeatherItem>
                <WeatherItem value={this.props.weatherData.sys.sunset}>Sunset</WeatherItem>
            </DataWrapper>
          </FlexContainer>
      </Wrapper>
    )
  }
}


const mapStateToProps = state => {  
    return  {
    weatherData: state.weatherReducer.weatherData
    }
  }
  
export default connect(mapStateToProps)(WeatherDetails);


const Wrapper = styled.div`
background-color:rgba(0,0,0,0.3);
z-index = 5;
color:white;
padding:2rem 2rem;
max-width: 1200px;
margin: 0 auto;
`


const Title = styled.h2`
color:white
font-size:2.5rem;
font-weight:200;
font-family:'Montserrat', sans-serif;
margin:0;
padding-bottom:1rem;
margin-bottom:1rem;
border-bottom: 1px solid white;
`


const Image = styled.img`
height:200px;
margin-right:2rem;
`


const FlexContainer = styled.div`
display:flex;
`

const DataWrapper = styled.div`
width:100%;
`