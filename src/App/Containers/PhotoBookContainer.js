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
    padding: 5,
  }
})

@inject('filterStore', 'imageStore', 'bookStore', 'authStore')
@observer
class PhotoBookContainer extends React.Component {

  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.getImageDatas()
  }

  getImageDatas = () => {
    const { filterStore, imageStore } = this.props
    const { filter } = filterStore
    filter.dispCam.map((cam, idx) => {
      filterStore.getImageDatas(
        filter.cameraNames[idx], filter.date
        )
      .then((res) => {
        imageStore.parseImageData(res, idx)
      })
      .catch((err) => {
        console.error(err)
      })
    })
  }


  render() {
    const { filterStore, imageStore, classes, bookStore } = this.props
    const { filter } = filterStore
    const { image } = imageStore
    const activeStep = bookStore.book.currentPage
    const { authStore } = this.props
    const { auth } = authStore

    if (!auth.isAuth) { 
      return <Redirect to={'/'} />;
    }

    return (
      <PBContainer className={classes.root}>
        <div className={classes.info}>
          <Info />
        </div>
        {filter.dispCam[0] && 
        <PhotoFeed imageData={image.image1} activeStep={activeStep} idx={0} />}
        {filter.dispCam[1] && 
        <PhotoFeed imageData={image.image2} activeStep={activeStep} idx={1} />}
        {filter.dispCam[2] && 
        <PhotoFeed imageData={image.image3} activeStep={activeStep} idx={2} />}
        {filter.dispCam[3] && 
        <PhotoFeed imageData={image.image4} activeStep={activeStep} idx={3} />}
        {filter.dispCam[4] && 
        <PhotoFeed imageData={image.image5} activeStep={activeStep} idx={4} />}
        <div style={{height:150}}/>
      </PBContainer>
    )
  }
}

export default withStyles(customStyle)(PhotoBookContainer)