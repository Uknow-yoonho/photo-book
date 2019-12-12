import React from 'react';
import CommonContainer from './Containers/CommonContainer'

class App extends React.Component {
  render() {
    const {history} = this.props
    return (
      <>
        <CommonContainer history={history}/>
      </>
    )
  }
}

export default App;
