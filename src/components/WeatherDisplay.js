import React, { Component } from 'react'
import styled from 'styled-components'
import image from '../images/1.jpg'
import Header from './Header';
import MaxAndMinTemp from './MaxAndMinTemp'
import WeatherDescription from './WeatherDescription'
import WeatherDetails from './WeatherDetails/WeatherDetails'
import { connect } from 'react-redux'
import {toggleDetails} from '../actions/appActions'
import {CSSTransition} from 'react-transition-group'
import SearchBar from './SearchBar/SearchBar'

class WeatherDisplay extends Component {
    state = {
        detailsAnimation : false
    }

    render() {
        return (
            <Wrapper blur={this.props.isDetailsModalOpen}>
                <Overlay>
                    <Header/>
                    <SearchBar/>
                    <CSSTransition
                        classNames="Details"
                        timeout={500}
                        in={this.props.isDetailsModalOpen}
                        unmountOnExit
                        onEnter={()=>{
                            console.log("enter")
                            this.setState({detailsAnimation:true})
                        }}
                        onEntered={()=>{
                            console.log("entered")
                            this.setState({detailsAnimation:false})
                        }}
                        onExit={()=>{
                            console.log("exit")
                            this.setState({detailsAnimation:true})
                        }}
                        onExiting={()=>{
                            console.log("exiting")
                            this.setState({detailsAnimation:false})
                        }}
                        >
                            <WeatherDetailsAnimationContainer>
                                <WeatherDetails/>
                            </WeatherDetailsAnimationContainer>
                    </CSSTransition>
                    <AbsoluteWrapper>
                    <CSSTransition
                        in={!this.props.isDetailsModalOpen}             
                        timeout={500}
                        unmountOnExit
                        classNames="HideData"
                    >
                        <HideDataAnimationContainer>
                        <NegativeMargin value="-0.5">
                            <WeatherDescription desc={this.props.weatherData.weather[0].main} imgLink={this.props.weatherData.weather[0].icon}/>
                        </NegativeMargin>
                        <NegativeMargin value="-7.5">
                            <MaxAndMinTemp maxTemp={Math.round(this.props.weatherData.main.temp_min)} minTemp={Math.round(this.props.weatherData.main.temp_max)}/>
                        </NegativeMargin>
                            <Temperature temp={Math.round(this.props.weatherData.main.temp)}/>
                        </HideDataAnimationContainer>
                    </CSSTransition>
                    </AbsoluteWrapper>
                </Overlay>
            </Wrapper>
        )
    }
}
const mapStateToProps = state => {
    console.log(state)
    return {
        isDetailsModalOpen:state.appReducer.isDetailModalOpen
    }
}




export default connect(mapStateToProps)(WeatherDisplay)

// blad byl w tym ze napisalem dispatch(action) zamiast dispatch(action())
// trzeba uwazac na defaultState w reducerze - bo przejmuje go podczas pierwszego uruchomiania

const Overlay = styled.div`
background-color:rgba(0,0,0,0.24);
padding: 1rem 5rem;
height:100%;
`

const Wrapper = styled.div`
background-image:url(${image});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
height:100%;
position:relative;
// filter: ${props => props.blur && "filter: blur(4px);"}
// filter: blur(4px);
`

const AbsoluteWrapper = styled.div`
position:absolute;
bottom:0;
`
const NegativeMargin = styled.div`
margin-bottom:${props=>props.value}rem;
`

const Temperature = ({temp}) => (
    <TemperatureWrapper>
        <BigWhiteFont>
            {temp}
            <Degree>
            °
            </Degree> 
        </BigWhiteFont>
    </TemperatureWrapper>
)


const TemperatureWrapper = styled.div`

`

const BigWhiteFont = styled.h1`
margin:0;
font-size:20rem;
color:white;
font-family: 'Montserrat', sans-serif;
font-weight:100;
`

const Degree = styled.sup`
vertical-align:super;
font-size:smaller;
`


const WeatherDetailsAnimationContainer = styled.div`
&.Details-enter {
    opacity:0.01;
}
&.Details-enter-active {
    opacity:1;
    transition:opacity 500ms ease-out;
}
&.Details-exit-active {
    transition:opacity 500ms ease-out;
    opacity:0.01;
}
`

const HideDataAnimationContainer = styled.div`
&.HideData-enter {
    opacity:0.01;
}
&.HideData-enter-active {
    opacity:1;
    transition:opacity 500ms ease-out;
}
&.HideData-exit {
    opacity:1;
}
&.HideData-exit-active {
    transition:opacity 500ms ease-out;
    opacity:0.01;
`