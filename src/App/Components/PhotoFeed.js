import React from 'react'
import { AppBar, Toolbar } from '@material-ui/core' 
import { withStyles } from '@material-ui/core/styles'  
import { CAppBar, CToolbar } from '../Containers/styled'
import { inject, observer } from 'mobx-react'

const customStyle = theme => ({
  toolbar: {
    border : 'solid 0.5px #aeaeae',
  }
})


@inject('imageStore')
@observer
class PhotoFeed extends React.Component {

  
  render() {
    const { classes, imageData } = this.props
    console.log(imageData.viewImages)
    return (
      <div style={{marginTop:30, marginBottom:30}}>
        <CAppBar height="50px">
          <CToolbar className={classes.toolbar} height="50px" >
            인스타 피드 따라하기
          </CToolbar>
        </CAppBar>
        
      </div>
    )
  }
}

export default withStyles(customStyle)(PhotoFeed)