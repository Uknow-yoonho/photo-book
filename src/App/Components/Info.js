import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { inject, observer } from 'mobx-react'
import { Typography, Fab } from '@material-ui/core'
import { CFab } from './styled'
import moment from 'moment-timezone'

const customStyle = theme => ({
  camera : {
    display: 'flex',
    justifyContent: 'center',
  },
  date : {
    fontSize : 18,
    margin : 5,
  },
  cfab : {
    "&.Mui-disabled" : {
      color : 'white',
      backgroundColor: 'tomato',
    }
  }
})

@inject('filterStore')
@observer
class Info extends React.Component {
  render() {
    const { filterStore, classes } = this.props;
    const { filter } = filterStore
    return (
      <>
        <div className={classes.camera}>
          {filter.dispCam.map((cam, idx) => 
          <CFab variant='extended' disabled 
          key={idx} className={classes.cfab}>{filter.cameraNames[idx]}</CFab>
          )}
        </div>
        <div>
          <Typography className={classes.date}>
          DATE : {moment(filter.date).tz('Europe/Amsterdam').format("YYYY / MM / DD")}</Typography>
        </div>
      </>
    )
  }
}

export default withStyles(customStyle)(Info)