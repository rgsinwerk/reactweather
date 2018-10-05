import React, { Component } from 'react'
import styled from 'styled-components'

class SearchBar extends Component {
  render() {
    return (
        <Wrapper>
            <Label for="country">
                Search for country
            </Label>
            <Input id="country"/>
            <Button>Search</Button>
        </Wrapper>
    )
  }
}

export default SearchBar



const Wrapper = styled.div`
position:relative;
width:50%;
background-color:rgba(40,131,144,0.44);
color:white;
font-family: 'Montserrat', sans-serif;
padding:3rem;
`

const Input = styled.input`
display:block;
padding:0.4rem;
font-size:1.5rem;
margin-top:1rem;
`


const Label = styled.label`
font-size:1.5rem;
color:#ffffffba;
`

const Button = styled.button`
padding: 0.6rem 2em;
margin-top: 1.2rem;
background-color: red;
color: white;
border: none;
font-size:1rem;
`