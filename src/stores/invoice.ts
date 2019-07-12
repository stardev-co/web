import { observable } from 'mobx'
import axios from 'axios'

export interface Invoice {
  _id: string
  amount: number
  currency: string
  description: string
}

export default class InvoiceStore {
  @observable
  _byId: { [key: string]: Invoice } = {}

  byId(_id: string) {
    return this._byId[_id] || ({} as Invoice)
  }

  async loadById(_id: string) {
    try {
      const { data: invoice } = await axios.get('/invoices', {
        params: {
          _id,
        },
      })
      this._byId[invoice._id] = invoice
    } catch (err) {
      console.log('Error loading invoice by id', _id)
      throw err
    }
  }
}
