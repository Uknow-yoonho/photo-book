import React, { Suspense, lazy } from "react";
import { Router, Switch, Route } from "react-router-dom"
import { IconButton } from '@material-ui/core'
import { CAppBar, CToolbar, CTypography } from './styled'
import { withStyles } from '@material-ui/core/styles'
import {LogoIcon} from '../Components/DigilogLogo'
import { isMobile } from 'mobile-device-detect';
import { inject, observer } from 'mobx-react'
import PhotoBookContainer from './PhotoBookContainer'
import SignInContainer from './SignInContainer'
// import RefreshIcon from '@material-ui/icons/Refresh';
// import TodayIcon from '@material-ui/icons/Today';
// import FilterListIcon from '@material-ui/icons/FilterList';
// import CustomCalendar from '../Components/CustomCalendar'

//const FilterContainer = lazy(() => import("./FilterContainer"));
// const PhotoBookContainer = lazy(() => import("./PhotoBookContainer"));
// const SignInContainer = lazy(() => import("./SignInContainer"));

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
    icon : {
      width: 30,
      height: 30,
    },
    logoButton : {
      width: 130,
      height: 65,
      padding : 0
    },
})

@inject('authStore', 'filterStore', 'bookStore', 'imageStore')
@observer
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

  componentDidMount() {
    this.getImageDatas()
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

  render() {
    const { classes, history, authStore, filterStore } = this.props
    const { filter } = filterStore
    const { auth } = authStore
    return (
      <>
          <CAppBar>
          <CToolbar className={classes.toolbar}>
            <div style={{display:'flex'}}>
              <div className={classes.logoButton}>
              <LogoIcon/>
              </div>
              {!isMobile && <CTypography>PHOTO BOOK</CTypography>}
            </div>

            {/* {auth.isAuth && 
            <div style={{display:'flex'}}>
              <IconButton onClick={() => this.open()} className={classes.iconButton}>
                <RefreshIcon className={classes.icon} />
              </IconButton>
              <IconButton onClick={() => history.push('/filter')} className={classes.iconButton}>
                <FilterListIcon className={classes.icon} />
              </IconButton>
            </div>} */}
          </CToolbar>
        </CAppBar> 
        {/* <CustomCalendar open = {open} handleClose={this.close} /> */}
        {auth.isAuth &&  <PhotoBookContainer/>}
        {!auth.isAuth && <SignInContainer/>}
        {/* <Router history={history}>
          <Suspense fallback={<div style={{background: "transparent"}} />}>
            <Switch>
            <Route exact path={'/'} component={() => <SignInContainer/>} />
            <Route exact path={'/photo'} component={() => <PhotoBookContainer/>} />
            </Switch>
          </Suspense>
        </Router> */}
      </>
    )
  }
}

export default withStyles(customStyle)(CommonContainer)