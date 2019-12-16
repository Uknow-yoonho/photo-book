import React from 'react'
import { Typography, MobileStepper, Button, IconButton } from '@material-ui/core' 
import {KeyboardArrowRight, KeyboardArrowLeft} from '@material-ui/icons'
import GetAppIcon from '@material-ui/icons/GetApp';
import { withStyles } from '@material-ui/core/styles'  
import { CAppBar, CToolbar } from '../Containers/styled'
import { inject, observer } from 'mobx-react'
import { isMobile } from 'mobile-device-detect';

const customStyle = theme => ({
  root: {
    display:'flex', justifyContent:'center'
  },
  feed : {
    margin:30, 
    width: isMobile? '100vw' : 640
  },
  img: {
    height : isMobile? '50vh' : '70vh' , 
    width: isMobile? '100vw' : 640,
  },
  toolbar: {
    border : 'solid 0.5px #aeaeae',
    display: 'flex',
    justifyContent: 'space-around',
  }
})


@inject('imageStore', 'bookStore')
@observer
class PhotoFeed extends React.Component {

  handleNext = (idx) => {
    const {bookStore} = this.props;
    const {book} = bookStore
    book.currentPage[idx] += 1
  }
  handleBack = (idx) => {
    const {bookStore} = this.props;
    const {book} = bookStore
    book.currentPage[idx] -= 1
  }
  
  render() {
    const { classes, imageData, activeStep, idx } = this.props
    //console.log(imageData.viewImages)
    return (
      <div className={classes.root}>
      <div className={classes.feed}>
        <CAppBar height="50px">
          <CToolbar className={classes.toolbar} height="50px" >
            <Typography style={{color:'black'}}>인스타 피드 따라하기</Typography>
          </CToolbar>
        </CAppBar>
       
        {Array.isArray(imageData.viewImages) &&
          <>
            <img
              className={classes.img}
              src={imageData.viewImages[activeStep[idx]]}
            />
            <MobileStepper
              className={classes.stepper}
              steps={imageData.viewImages.length}
              position="static"
              variant="text"
              activeStep={activeStep[idx]}
              nextButton={
                <Button size="small" onClick={() => this.handleNext(idx)} disabled={activeStep[idx] === imageData.viewImages.length - 1}>
                  <Typography style={{fontFamily:'Noto Sans'}}>Next</Typography>
                  <KeyboardArrowRight />
                </Button>
              }
              backButton={
                <Button size="small" onClick={() => this.handleBack(idx)} disabled={activeStep[idx] === 0}>
                <KeyboardArrowLeft />
                  <Typography style={{fontFamily:'Noto Sans'}}>Back</Typography>
                </Button>
              }
            />
          </>
        }
      
        <CAppBar height="50px">
          <CToolbar className={classes.toolbar} height="50px" >
            <a href={Array.isArray(imageData.downImages)?imageData.downImages[activeStep[idx]]:null}>
              <IconButton style= {{padding: 0, width: 50, height: 50}}>
              <GetAppIcon /></IconButton>
            </a>
          </CToolbar>
        </CAppBar>
        
      </div>
      </div>
    )
  }
}

export default withStyles(customStyle)(PhotoFeed)