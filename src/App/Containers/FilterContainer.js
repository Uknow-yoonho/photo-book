import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { inject, observer } from 'mobx-react'
import { Redirect } from 'react-router-dom';

const customStyle = theme => ({

})

@inject('authStore')
@observer
class FilterContainer extends React.Component {
  render() {
    const { authStore } = this.props
    const { auth } = authStore

    if (!auth.isAuth) { 
      return <Redirect to={'/'} />;
    }
    return (
      <div>
        필터 페이지
      </div>
    )
  }
}

export default withStyles(customStyle)(FilterContainer)