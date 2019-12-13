import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { PBContainer } from './styled'
import { Redirect } from 'react-router-dom';
import PhotoFeed from '../Components/PhotoFeed'
import { inject, observer } from 'mobx-react'

const customStyle = theme => ({

})

@inject('filterStore', 'imageStore')
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
      console.log(cam, idx)
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
    //ilterStore.getImageDatas()
  }


  render() {
    const { filterStore, imageStore } = this.props
    const { filter } = filterStore
    const { image } = imageStore
    return (
      <PBContainer>
        {filter.dispCam[0] && <PhotoFeed imageData={image.image1} />}
        {filter.dispCam[1] && <PhotoFeed imageData={image.image2} />}
        {filter.dispCam[2] && <PhotoFeed imageData={image.image3} />}
        {filter.dispCam[3] && <PhotoFeed imageData={image.image4} />}
        {filter.dispCam[4] && <PhotoFeed imageData={image.image5} />}
      </PBContainer>
    )
  }
}

export default withStyles(customStyle)(PhotoBookContainer)