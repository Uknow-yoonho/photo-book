import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import SignIn from '../Components/SignIn'
import { Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react'

const customStyle = theme => ({
})

@inject('authStore')
@observer
class SignInContainer extends React.Component {
  render() {
    const { authStore } = this.props
    const { auth } = authStore

    // if (auth.isAuth) { 
    //   return <Redirect to={'/photo'} />;
    // }

    return (
      <>
        <SignIn />
      </>
    )
  }
}

export default withStyles(customStyle)(SignInContainer)