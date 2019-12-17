import Axios from 'axios'
import moment from 'moment-timezone'

const EndPoint = `${process.env.REACT_APP_IMAGE_API_ENDPOINT}`
const endPoint = "https://apis.iocrops.com/io006/vision-image"
export default class FilterService {
    
    static async getImageDatas (cameraNames, date) {

      const startDate = (date - (date % 86400000)) - (60*60*1000)
      const endDate = startDate + 86400000 - (60*60*1000)
      
      try{
          return await Axios.get(`${endPoint}/${cameraNames}/${startDate}/${endDate}`, {
              headers : { 
                  'Content-Type': 'application/json',
                  'x-api-key' : 
                  'DzWrqduyfX5xT9OWw8eX11FWGL9czXTX9JidrGe7',
              },
              timeout : 3000,
          })
      }catch(e){
          throw e;
      }
    }
}