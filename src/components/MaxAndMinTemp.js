import React from 'react'
import VerticalAlignIcon from '@material-ui/icons/VerticalAlignBottom';
import styled from "styled-components"

const MaxAndMinTemp = ({maxTemp,minTemp}) => (
    <Wrapper>
        <SectionWrapper>
            <MaxIcon/>
            <FontStyling>
                {maxTemp}
            </FontStyling>
        </SectionWrapper>
        <SectionWrapper>
            <MinIcon/>
            <FontStyling>
                {minTemp}
            </FontStyling>
        </SectionWrapper>
    </Wrapper>
)

const Wrapper = styled.div`
display:flex;
`

const MaxIcon = styled(VerticalAlignIcon)`
font-size:3rem !important;
transform:rotate(180deg);
color:white;
`

const MinIcon = styled(VerticalAlignIcon)`
font-size:3rem !important;
color:white;
vertical-align:bottom;
`

const FontStyling =  styled.h2`
color:white;
font-size:4rem;
font-weight:100;
font-family: 'Montserrat', sans-serif;
margin:0;
`

const SectionWrapper = styled.div`
display:flex;
align-items:center;
margin-right:3rem;
`


export default MaxAndMinTemp

