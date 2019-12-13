import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { withStyles } from '@material-ui/core/styles';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  DatePicker
} from '@material-ui/pickers';
import moment from 'moment'
import { inject, observer } from 'mobx-react'
import { IconButton, Typography } from '@material-ui/core'
import FirstPageIcon from '@material-ui/icons/FirstPage';
import LastPageIcon from '@material-ui/icons/LastPage';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const customStyle = theme => ({
  root: {
    display: 'flex'
  },
  date: {
    color: '#000000',
    fontSize : 25,
    margin : 10
  },
  icon : {
    padding: 5,
  },
  iconInner : {
    width : 28,
    height : 28,
  }
})

@inject('filterStore')
@observer
class DateSelection extends React.Component {

  nextDay() { 
    const {filterStore} = this.props
    filterStore.nextDay()
  }
  nextMonth() { 
    const {filterStore} = this.props
    filterStore.nextMonth()
  }
  prevDay() { 
    const {filterStore} = this.props
    filterStore.prevDay()
  }
  prevMonth() { 
    const {filterStore} = this.props
    filterStore.prevMonth()
  }

  render() {
    const { filterStore, classes } = this.props
    const { filter } = filterStore
    //console.log(filter.date)
    return (
      <div className={classes.root}>
        <IconButton onClick={() => this.prevMonth()}  className={classes.icon} >
        <FirstPageIcon className = {classes.iconInner} /></IconButton>
        <IconButton onClick={() => this.prevDay()}  className={classes.icon} >
        <NavigateBeforeIcon className = {classes.iconInner} /></IconButton>
        <Typography className={classes.date}>{moment(filter.date).format('YYYY/MM/DD')}</Typography>
        <IconButton onClick={() => this.nextDay()}  className={classes.icon} >
        <NavigateNextIcon className = {classes.iconInner} /></IconButton>
        <IconButton onClick={() => this.nextMonth()}  className={classes.icon} >
        <LastPageIcon className = {classes.iconInner} /></IconButton>
        
      </div>
    )
  }
}

export default withStyles(customStyle)(DateSelection)