import React from 'react'
import { observable, action } from 'mobx'
import moment from 'moment'
import FilterService from './Services/Filter.Service'

export class FilterStore {
  @observable
  filter ={} 

  constructor() {
    this.filter = {
      date : moment(new Date("2019/12/06")).valueOf(),
      dispCam : [true,true,true,true,true],
      cameraNames : ["PTZ1","PTZ2","PTZ3","PTZ4","WIDE1"],
      datePeriod : 1
    }
  }

  @action
  async getImageDatas(cameraNames, date) {
    try{
      return await FilterService.getImageDatas(cameraNames, date)
    }catch(e){
        throw e;
    }
  }

  @action
  nextDay() {
    //console.log(this.filter.date + (60 * 60 * 24))
    this.filter.date = this.filter.date + (60 * 60 * 24 * 1000)
  }

  @action
  nextMonth() {
    //console.log(this.filter.date + (60 * 60 * 24 * 30))
    this.filter.date = this.filter.date + (60 * 60 * 24 * 30 * 1000)
  }

  @action
  prevDay() {
    //console.log(this.filter.date - (60 * 60 * 24))
    this.filter.date = this.filter.date - (60 * 60 * 24 * 1000)
  }

  @action
  prevMonth() {
    //console.log(this.filter.date - (60 * 60 * 24 * 30))
    this.filter.date = this.filter.date - (60 * 60 * 24 * 30 * 1000)
  }
}