import React, { Component } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import styled from "styled-components"
import { connect } from 'react-redux'
import { toggleDetails } from '../actions/appActions'


class Header extends Component {
  render() {
    return (
      <Wrapper>
        <MenuIconWrapper onClick={this.props.toggleModal}/>
        <AddIconWrapper/>
      </Wrapper>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
      toggleModal:() => dispatch(toggleDetails())
  }
}

export default connect(null,mapDispatchToProps)(Header)

const Wrapper = styled.div `
display:flex;
justify-content:space-between;
font-size:8rem;
cursor:pointer;
`

const MenuIconWrapper = styled(MenuIcon)`
color:white;
font-size:4rem !important;
cursor:pointer;
`

const AddIconWrapper = styled(AddIcon)`
color:white;
font-size:4rem !important;
`