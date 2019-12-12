import React from 'react'
import { observable, action } from 'mobx'
import moment from 'moment'

export class FilterStore {
  @observable
  filter ={} 

  constructor() {
    this.filter = {
      date : moment(),
      dispCam : [true,true,true,true,true],
    }
  }
}