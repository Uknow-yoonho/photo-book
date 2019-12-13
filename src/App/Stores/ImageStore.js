import React from 'react'
import { observable, action } from 'mobx'
import moment from 'moment'
import ImageService from './Services/Image.Service'

export class ImageStore {
  @observable
  image = {}

  constructor() {
    this.image = {
      image1 : {},
      image2 : {},
      image3 : {},
      image4 : {},
      image5 : {},
    }
  }

  @action 
  parseImageData(res, idx){
    //console.log(res, idx)
    if(idx == 0) {this.image.image1=ImageService.parseImageData(res.data)}
    if(idx == 1) {this.image.image2=ImageService.parseImageData(res.data)}
    if(idx == 2) {this.image.image3=ImageService.parseImageData(res.data)}
    if(idx == 3) {this.image.image4=ImageService.parseImageData(res.data)}
    if(idx == 4) {this.image.image5=ImageService.parseImageData(res.data)}
  }
}