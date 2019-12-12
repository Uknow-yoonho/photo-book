import React from 'react'
import { observable, action } from 'mobx'

export class BookStore {
  @observable
  book ={} 

  constructor() {
    this.book = {
      flipPeriod : 1,
      currentPage : [0,0,0,0,0],
    }
  }
}