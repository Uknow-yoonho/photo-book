import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { PBContainer } from './styled'
import { Redirect } from 'react-router-dom';

const customStyle = theme => ({

})

class PhotoBookContainer extends React.Component {
  render() {

    return (
      <PBContainer>
        포토북 페이지
      </PBContainer>
    )
  }
}

export default withStyles(customStyle)(PhotoBookContainer)