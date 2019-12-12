import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import moment from 'moment'

class DateSelection extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selectedDate : new Date()
    }
  }

  handleDateChange = date => {
    this.setState({selectedDate : date});
  };
  render() {
    const { selectedDate } = this.state
    console.log(moment(selectedDate).valueOf())
    console.log(moment().valueOf())
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          format="MM - dd - yyyy"
          value={selectedDate}
          onChange={(date) => this.handleDateChange(date)}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </MuiPickersUtilsProvider>
    )
  }
}

export default DateSelection