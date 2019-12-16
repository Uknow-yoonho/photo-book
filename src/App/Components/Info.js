import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { inject, observer } from 'mobx-react'
import { Typography, Fab } from '@material-ui/core'
import { CFab } from './styled'

const customStyle = theme => ({
  camera : {
    
  },
})

@inject('filterStore')
@observer
class Info extends React.Component {
  render() {
    const { filterStore } = this.props;
    const { filter } = filterStore
    return (
      <>
        {filter.dispCam.map((cam, idx) => 
        <CFab variant='extended' disabled
        key={idx}>{filter.cameraNames[idx]}</CFab>
        )}
      </>
    )
  }
}

export default withStyles(customStyle)(Info)