import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { PBContainer } from './styled'
import { Redirect } from 'react-router-dom';
import PhotoFeed from '../Components/PhotoFeed'
import Info from '../Components/Info'
import { inject, observer } from 'mobx-react'

const customStyle = theme => ({
  root : {
    height : '100vh',
    overflow: 'auto',
  },
  info : {
    textAlign: 'center',
    padding: 15,
  }
})

@inject('filterStore', 'imageStore', 'bookStore', 'authStore')
@observer
class PhotoBookContainer extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { filterStore, imageStore, classes, bookStore } = this.props
    const { filter } = filterStore
    const { image } = imageStore
    const activeStep = bookStore.book.currentPage
    const { authStore } = this.props
    const { auth } = authStore

    return (
      <PBContainer className={classes.root}>
        <div className={classes.info}>
          <Info />
        </div>
          {Array.isArray(image.image1.viewImages) && (image.image1.viewImages.length != 0 ?
          filter.dispCam[0] && <PhotoFeed imageData={image.image1} activeStep={activeStep} idx={0} /> : <></>)}
          {Array.isArray(image.image2.viewImages) && (image.image2.viewImages.length != 0 ?
          filter.dispCam[1] && <PhotoFeed imageData={image.image2} activeStep={activeStep} idx={1} /> : <></>)}
          {Array.isArray(image.image3.viewImages) && (image.image3.viewImages.length != 0 ?
          filter.dispCam[2] && <PhotoFeed imageData={image.image3} activeStep={activeStep} idx={2} /> : <></>)}
          {Array.isArray(image.image4.viewImages) && (image.image4.viewImages.length != 0 ?
          filter.dispCam[3] && <PhotoFeed imageData={image.image4} activeStep={activeStep} idx={3} /> : <></>)}
          {Array.isArray(image.image5.viewImages) && (image.image5.viewImages.length != 0 ?
          filter.dispCam[4] && <PhotoFeed imageData={image.image5} activeStep={activeStep} idx={4} /> : <></>)}
        <div style={{height:150}}/>
      </PBContainer>
    )
  }
}

export default withStyles(customStyle)(PhotoBookContainer)