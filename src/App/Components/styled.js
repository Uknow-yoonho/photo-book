import React from 'react'
import { Fab, Button } from '@material-ui/core'
import styled from 'styled-components'
import ToggleButton from '@material-ui/lab/ToggleButton';
import { isMobile } from 'mobile-device-detect';

export const CFab = styled(props => <Fab {...props} />)`
    && {
        box-shadow : none;
        ${'' /* background : ${props => props.background? props.background : '#ffffff'};
        color : #000000; */}
        margin : 5px;
    }
`

export const CToggleButton = styled(props => <ToggleButton {...props} />)`
    && {
        margin : 5px;
    }
`