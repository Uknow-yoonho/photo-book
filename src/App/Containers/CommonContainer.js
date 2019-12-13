import React, { Suspense, lazy } from "react";
import { Router, Switch, Route } from "react-router-dom"
import { IconButton } from '@material-ui/core'
import { CAppBar, CToolbar, CTypography } from './styled'
import { withStyles } from '@material-ui/core/styles'
import TodayIcon from '@material-ui/icons/Today';
import FilterListIcon from '@material-ui/icons/FilterList';
import {LogoIcon} from '../Components/DigilogLogo'
import { isMobile } from 'mobile-device-detect';
import CustomCalendar from '../Components/CustomCalendar'

const PhotoBookContainer = lazy(() => import("./PhotoBookContainer"));
const FilterContainer = lazy(() => import("./FilterContainer"));

const customStyle = theme => ({
    toolbar : {
        display: 'flex',
        justifyContent : 'space-around',
    },
    iconButton : {
        width: 50,
        height: 50,
        padding : 0
    },
    logoButton : {
      width: 130,
      height: 65,
      padding : 0
    },
    icon : {
        width: 30,
        height: 30,
    },
})


class CommonContainer extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      open : false
    }
  }
  open = () => {
    this.setState({open: true})
  }
  close = () => {
    this.setState({open: false})
  }

  render() {
      const { classes, history } = this.props
      const { open } = this.state
      
    return (
      <>
        <CAppBar>
          <CToolbar className={classes.toolbar}>
            <div style={{display:'flex'}}>
              <IconButton onClick={() => history.push('/')} className={classes.logoButton}>
              <LogoIcon/>
              </IconButton>
              {!isMobile && <CTypography>PHOTO BOOK</CTypography>}
            </div>
            <div style={{display:'flex'}}>
              <IconButton onClick={() => this.open()} className={classes.iconButton}>
                <TodayIcon className={classes.icon} />
              </IconButton>
              <IconButton onClick={() => history.push('/filter')} className={classes.iconButton}>
                <FilterListIcon className={classes.icon} />
              </IconButton>
            </div>
          </CToolbar>
        </CAppBar>

        <CustomCalendar open = {open} handleClose={this.close} />

        <Router history={history}>
          <Suspense fallback={<div style={{background: "transparent"}} />}>
            <Switch>
            <Route exact path={'/'} component={() => <PhotoBookContainer/>} />
            <Route exact path={'/filter'} component={() => <FilterContainer/>} />
            </Switch>
          </Suspense>
        </Router>
      </>
    )
  }
}

export default withStyles(customStyle)(CommonContainer)