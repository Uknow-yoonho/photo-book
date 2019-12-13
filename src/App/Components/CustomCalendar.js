import 'date-fns';
import React from 'react';
// import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  DatePicker
} from '@material-ui/pickers';
import { inject, observer } from 'mobx-react'
import { Dialog } from '@material-ui/core'
import moment from 'moment'

@inject('filterStore')
@observer
class CustomCalendar extends React.Component {

  handleDateChange = (date) => {
    const { filterStore } = this.props
    filterStore.filter.date = date
    this.props.handleClose()
  }

  render() {
    const { filterStore, open } = this.props
    const { filter } = filterStore
    return (
      <>
        <Dialog open = {open} >
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              variant="static"
              openTo="date"
              value={filter.date}
              onChange={(date) => this.handleDateChange(date)}
            />
          </MuiPickersUtilsProvider>
        </Dialog>
      </>
    )
  }
}

export default CustomCalendar;