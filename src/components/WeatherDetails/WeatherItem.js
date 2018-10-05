import React from 'react'
import styled from 'styled-components'

const WeatherItem = ({value,children}) => {
  return (
    <Wrapper>
        <div>
            {children}
        </div> 
        <div>
            {value}
        </div>
    </Wrapper>
  )
}

export default WeatherItem

const Wrapper = styled.div`
padding:1rem 0;
display:flex;
justify-content:space-between;
border-bottom:1px solid #ffffff85;
font-weight:200;
font-family:'Montserrat', sans-serif;
&:last-child {
    border-bottom:none;
}
`

