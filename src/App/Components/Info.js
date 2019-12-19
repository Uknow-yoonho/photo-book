import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { inject, observer } from 'mobx-react'
import ToggleButton from '@material-ui/lab/ToggleButton';
import { Typography, IconButton } from '@material-ui/core'
import moment from 'moment-timezone'
import { isMobile } from 'mobile-device-detect';
import TodayIcon from '@material-ui/icons/Today';
import CustomCalendar from '../Components/CustomCalendar'

const customStyle = theme => ({
  camera : {
    display: 'flex',
    justifyContent: 'space-between',
  },
  date : {
    fontSize : 18,
    margin : 10, marginLeft: 0,
  },
  cfab : {
    color : 'white',
    backgroundColor: 'tomato',
  },
  button : {
    color : '#AEAEAE',
    backgroundColor: '#EAEAEA',
    margin : 8, 
    marginLeft: 0, width: isMobile? 52:100, fontSize: isMobile? 13:20,
    borderRadius : 20,
    height : 35,
    "&.Mui-selected" : {
      color : 'white',
      backgroundColor: 'tomato',
      margin : 8, 
      marginLeft: 0, width: isMobile? 52:100, fontSize: isMobile? 13:20,
      borderRadius : 20,
      height : 35,
    },
    "&.Mui-selected:hover" : {
      color : 'white',
      backgroundColor: 'tomato',
      margin : 8, 
      marginLeft: 0, width: isMobile? 52:100, fontSize: isMobile? 13:20,
      borderRadius : 20,
      height : 35,
    }
  },
  iconButton : {
      width: 43,
      height: 43,
      padding : 0
  },
  icon : {
    width: 30,
    height: 30,
  },
  datepicker : {
    width: 'inherit',
    display:'flex', 
    justifyContent: 'space-between',
    margin : 5
  }
})

@inject('filterStore', 'imageStore', 'bookStore')
@observer
class Info extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      open : false,
      isStart : false
    }
  }

  open = (isStart) => {
    isStart ? this.setState({open: true, isStart: true}) :
    this.setState({open: true, isStart: false})
  }
  close = () => {
    this.setState({open: false})
  }

  toggleButton(idx) {
    const { filterStore } = this.props
    const { filter } = filterStore
    var newAreaSelected = []
    for(let i in filter.dispCam){
      i == idx ? 
      newAreaSelected.push(!filter.dispCam[i]) : 
      newAreaSelected.push(filter.dispCam[i])
    }
    //console.log(newAreaSelected)
    filter.dispCam = newAreaSelected
  }

  render() {
    const { filterStore, classes } = this.props;
    const { filter } = filterStore
    const { open, isStart } = this.state
    return (
      <div style={{display: 'inline-block', width: isMobile? '90vw' : 640}}>
        <div className={classes.camera}>
          {filter.dispCam.map((cam, idx) => 
            <ToggleButton selected={filter.dispCam[idx]}
            onChange={()=>this.toggleButton(idx)}
            value={filter.cameraNames[idx]}
            key={idx} className={classes.button}>{filter.cameraNames[idx]}</ToggleButton>)}
        </div>
        <div className={classes.datepicker}>
          <Typography className={classes.date}>
          Start Date : {moment(filter.startDate).tz('Europe/Amsterdam').format("YYYY / MM / DD")}
          </Typography>
          <IconButton onClick={() => this.open(true)} className={classes.iconButton}>
            <TodayIcon className={classes.icon} />
          </IconButton>
        </div><div className={classes.datepicker}>
          <Typography className={classes.date}>
          End Date : {moment(filter.endDate).tz('Europe/Amsterdam').format("YYYY / MM / DD")}
          </Typography>
          <IconButton onClick={() => this.open(false)} className={classes.iconButton}>
            <TodayIcon className={classes.icon} />
          </IconButton>
        </div>

        <CustomCalendar isStart= {isStart} open = {open} handleClose={this.close} />
      </div>
    )
  }
}

export default withStyles(customStyle)(Info)