import React from 'react'
import { Typography, MobileStepper, Button, IconButton } from '@material-ui/core' 
import {KeyboardArrowRight, KeyboardArrowLeft} from '@material-ui/icons'
import GetAppIcon from '@material-ui/icons/GetApp';
import { withStyles } from '@material-ui/core/styles'  
import { CAppBar, CToolbar } from '../Containers/styled'
import { inject, observer } from 'mobx-react'
import { isMobile } from 'mobile-device-detect';
import moment from 'moment-timezone'

const customStyle = theme => ({
  root: {
    display:'flex', justifyContent:'center'
  },
  feed : {
    marginTop: 0, 
    marginBottom: 50,
    width: isMobile? '100vw' : 640
  },
  img: {
    height : isMobile? '75vh' : 640 / 1.33, 
    width: isMobile? '100vw' : 640,
  },
  imgWide: {
    height : isMobile? '56vh' : 640 / 1.78, 
    width: isMobile? '100vw' : 640,
  },
  toolbar: {
    border : 'solid 0.5px #aeaeae',
    display: 'flex',
    justifyContent: 'space-between',
  },
  cameraName : {
    color: '#000000',
    fontSize : 20,
  },
  imgDate : {
    color: '#aeaeae',
    fontSize : 16,
  }
})


@inject('imageStore', 'bookStore', 'filterStore')
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
    const { classes, imageData,
      filterStore, activeStep, idx } = this.props
    const { filter } = filterStore
    return (
      <div className={classes.root}>
      <div className={classes.feed}>
        <CAppBar height="50px">
          <CToolbar className={classes.toolbar} height="50px" >
          <Typography className={classes.cameraName}>{filter.cameraNames[idx]}</Typography>
            <Typography className={classes.imgDate}>
            {Array.isArray(imageData.createdAtFile) &&
              moment(Number.parseInt(imageData.createdAtFile[activeStep[idx]]))
              .tz("Europe/Amsterdam").format("YYYY/MM/DD hh:mm:ss A")
              }</Typography>
          </CToolbar>
        </CAppBar>
       
        {Array.isArray(imageData.viewImages) &&
          <>
            <img
              className={idx==4?classes.imgWide : classes.img}
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
          <CToolbar className={classes.toolbar} style={{justifyContent: 'center'}} height="50px" >
            <a href={Array.isArray(imageData.downImages)?imageData.downImages[activeStep[idx]]:null}>
              <IconButton style= {{padding: 0, width: 50, height: 50}}>
              <GetAppIcon style= {{color: "#aeaeae"}}/></IconButton>
            </a>
          </CToolbar>
        </CAppBar>
        
      </div>
      </div>
    )
  }
}

export default withStyles(customStyle)(PhotoFeed)