import { observable } from 'mobx'
import axios from 'axios'
import AuthStore from './auth'
import BaseStore from './base'

class Offer {
  _id: string
  createdAt: string
  updatedAt: string
  text: string
}

export default class OfferStore extends BaseStore<Offer> {
  async loadById(_id: string) {
    try {
      const { data } = await axios.get('/offers', {
        params: {
          _id,
          token: AuthStore.token,
        },
      })
      this.setById(data._id, data)
    } catch (err) {
      console.log('Error loading offer by id', _id)
      throw err
    }
  }

  async create(offer: { text: string }) {
    try {
      const { data } = await axios.post('/offers', {
        ...offer,
        token: AuthStore.token,
      })
      this.setById(data._id, data)
    } catch (err) {
      console.log('Error creating offer', JSON.stringify(offer))
      throw err
    }
  }

  async edit(_id: string, offer: Offer) {
    try {
      const { data } = await axios.put(
        '/offers',
        {
          ...offer,
        },
        {
          params: {
            _id,
            token: AuthStore.token,
          },
        }
      )
      this.setById(data._id, data)
    } catch (err) {
      console.log('Error updating offer by id', _id)
      throw err
    }
  }
}
