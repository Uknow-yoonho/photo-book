import Axios from 'axios'
import moment from 'moment'

const EndPoint = `${process.env.REACT_APP_IMAGE_API_ENDPOINT}`
const endPoint = "https://apis.iocrops.com/io006/vision-image"
export default class FilterService {
    
    static async getImageDatas (cameraNames, date) {
      //console.log(cameraNames, date)
      const startDate = date - (date % 86400000) - ((60 * 60 * 9) * 1000)
      const endDate = startDate + 86400000
      console.log(startDate, endDate)
      try{
          return await Axios.get(`${endPoint}/${cameraNames}/${startDate}/${endDate}`, {
              headers : { 
                  'Content-Type': 'application/json',
                  'x-api-key' : 
                  'DzWrqduyfX5xT9OWw8eX11FWGL9czXTX9JidrGe7',
              },
              timeout : 1000000,
          })
      }catch(e){
          throw e;
      }
    }
    
    static dateParse(date){
        return moment(date).format("YYYY-MM-DD")
    }
    static timeParse(date){
        return moment(date).format("kk:mm:ss")
    }

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
        return imageObj
    }
}