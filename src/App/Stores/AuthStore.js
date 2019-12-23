import React from 'react'
import { observable, action } from 'mobx'

export class AuthStore {
  @observable
  auth ={} 

  constructor() {
    this.auth = {
      isAuth : false,
      password : 'digilog2019'
    }
  }

  @action
  signIn(password) {
    if(password === this.auth.password){
      this.auth.isAuth = true
    }
    return this.auth.isAuth
  } 
}