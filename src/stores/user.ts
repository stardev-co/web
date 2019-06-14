import { observable } from 'mobx'
import BaseStore from './base'
import axios from 'axios'

export interface User {
  _id: string
  username: string
  email: string
}

export default class UserStore extends BaseStore<User> {
  async loadById(_id: string) {
    try {
      const { data: user } = await axios.get('/users', {
        params: { _id },
      })
      this.setById(user._id, user)
    } catch (err) {
      console.log('Error loading user by id', _id)
      throw err
    }
  }
}
