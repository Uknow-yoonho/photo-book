import 'date-fns';
import React from 'react';
// import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  DatePicker
} from '@material-ui/pickers';
import { inject, observer } from 'mobx-react'
import { Dialog, createMuiTheme } from '@material-ui/core'
import { ThemeProvider } from "@material-ui/styles";
import deepOrange from "@material-ui/core/colors/deepOrange";

const defaultMaterialTheme = createMuiTheme({
  palette: {
    primary:{
      main: deepOrange[500],
    }
  },
});


@inject('filterStore')
@observer
class CustomCalendar extends React.Component {
  constructor(props){
    super(props)
    this.handleClose=this.handleClose.bind(this)
  }

  handleStartDateChange = (date) => {
    //console.log(date)
    const { filterStore } = this.props
    filterStore.filter.startDate = date
    this.props.handleClose()
  }

  handleEndDateChange = (date) => {
    //console.log(date)
    const { filterStore } = this.props
    filterStore.filter.endDate = date
    this.props.handleClose()
  }

  handleClose() {
    console.log("??")
    this.props.handleClose()
  }

  render() {
    const { filterStore, open, isStart } = this.props
    const { filter } = filterStore
    return (
      <>
      <ThemeProvider theme={defaultMaterialTheme}>
        <Dialog open = {open} onClose = {this.handleClose}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              variant="static"
              openTo="date"
              value={isStart ? filter.startDate : filter.endDate}
              onChange={
              (date) => isStart ?  this.handleStartDateChange(date) :
              this.handleEndDateChange(date)}
            />
          </MuiPickersUtilsProvider>
        </Dialog>
      </ThemeProvider>
      </>
    )
  }
}

export default CustomCalendar;