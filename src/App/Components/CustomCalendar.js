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


@inject('filterStore', 'imageStore', 'bookStore')
@observer
class CustomCalendar extends React.Component {
  constructor(props){
    super(props)
    this.handleClose=this.handleClose.bind(this)
  }
  
  getImageDatas = () => {
    const { filterStore, imageStore, bookStore } = this.props
    const { filter } = filterStore
    filter.dispCam.map((cam, idx) => {
      filterStore.getImageDatas(
        filter.cameraNames[idx], filter.startDate, filter.endDate
        )
      .then((res) => {
        bookStore.book.currentPage = [0,0,0,0,0]
        imageStore.parseImageData(res, idx)
      })
      .catch((err) => {
        console.error(err)
      })
    })
  }

  handleStartDateChange = (date) => {
    const { filterStore } = this.props
    filterStore.filter.startDate = date
    this.getImageDatas()
    this.props.handleClose()
  }

  handleEndDateChange = (date) => {
    const { filterStore } = this.props
    filterStore.filter.endDate = date
    this.getImageDatas()
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