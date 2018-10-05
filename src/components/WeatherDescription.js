import React from 'react'
import styled from 'styled-components'

const WeatherDescription =  ({desc,imgLink}) => {
  return (
    <Wrapper>
        <Image src={imgLink}/>
        <TextWrapper>
            {desc}    
        </TextWrapper> 
    </Wrapper>
  )
}


export default WeatherDescription


const Wrapper = styled.div`
display:flex;
align-items:center;
`

const TextWrapper = styled.h2`
color:white
font-family: 'Montserrat', sans-serif;
font-weight:200;
font-size:2.5rem;
margin-left:2rem;
margin-bottom:0;
margin-top:0;
`

const Image = styled.img`
height:80px;
`
