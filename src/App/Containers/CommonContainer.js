import React, { Suspense, lazy } from "react";
import { Router, Switch, Route } from "react-router-dom"
import { IconButton } from '@material-ui/core'
import { CAppBar, CToolbar, CTypography } from './styled'
import { withStyles } from '@material-ui/core/styles'
import DateSelection from '../Components/DateSelection'
import FilterListIcon from '@material-ui/icons/FilterList';

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
    icon : {
        width: 30,
        height: 30,
    },
})


class CommonContainer extends React.Component {
  render() {
      const { classes, history } = this.props
    return (
      <>
        <CAppBar>
          <CToolbar className={classes.toolbar}>
            <CTypography onClick={() => history.push('/')} >PHOTO BOOK</CTypography>
            <DateSelection />
            <IconButton onClick={() => history.push('/filter')} className={classes.iconButton}>
              <FilterListIcon className={classes.icon} />
            </IconButton>
          </CToolbar>
        </CAppBar>

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