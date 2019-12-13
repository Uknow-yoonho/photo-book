
export default class ImageService {
  static parseImageData(data){
    var imageObj = {}
    var viewImages = []
    var downImages = []
    var createdAtFile = []
    data.map((data) => {
        viewImages.push(data.location[3].location)
        downImages.push(data.location[0].location)
        createdAtFile.push(data.createdAtFile)
    })
    imageObj.viewImages = viewImages
    imageObj.downImages = downImages
    imageObj.createdAtFile = createdAtFile
    imageObj.length = viewImages.length
    //console.log(imageObj)
    return imageObj
  }
}






