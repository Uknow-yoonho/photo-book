import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import styled from 'styled-components'


export const CAppBar = styled(props => <AppBar {...props} />)`
    background : ${props => props.background? props.background : '#ffffff'};
    && {
        box-shadow : none;
        height: ${props => props.height? props.height : '100px'};
        position : static;
        min-height : 30px;
    }
`

export const CToolbar = styled(props => <Toolbar {...props} />)`
    && {
        background : ${props => props.background? props.background : '#ffffff'};
        height: ${props => props.height? props.height : '100px'};
        border-bottom : solid 0.5px #aeaeae;
        min-height : 30px;
    }
`

export const CTypography = styled(props => <Typography {...props} />)`
  &&{
    color : ${props => props.color ? props.color : '#000000'};
    font-size : ${props => props.fontSize ? props.fontSize : '25px'};
    margin : 15px;
  }
`

export const PBContainer = styled.div`


`