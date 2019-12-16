import React from 'react';
import CommonContainer from './Containers/CommonContainer'
import Helmet from 'react-helmet';

class App extends React.Component {
  render() {
    const {history} = this.props
    return (
      <>
        <Helmet>
          <title>Digilog Photo Book</title>
          <meta name="ioCrops" content="아이오크롭스" />
          <meta name="Digilog" content="디지로그" />
          <meta name="Digilog Photo Book" content="디지로그 포토북" />
          <meta name="디지로그 포토북" content="디지로그 포토북" />
          <meta name="디지로그" content="디지로그" />
          <meta name="아이오크롭스" content="아이오크롭스" />
        </Helmet>
        <CommonContainer history={history}/>
      </>
    )
  }
}

export default App;
