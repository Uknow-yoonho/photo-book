import React from 'react'
import { Fab } from '@material-ui/core'
import styled from 'styled-components'
import { isMobile } from 'mobile-device-detect';

export const CFab = styled(props => <Fab {...props} />)`
    && {
        box-shadow : none;
        background : ${props => props.background? props.background : '#ffffff'};
        color : #000000;
        margin : 5px;
    }
`