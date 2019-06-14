import { observable } from 'mobx'

export default class BaseStore<T> {
  @observable
  protected _byId: { [key: string]: T }

  byId(_id: string) {
    return this._byId[_id] || {}
  }

  setById(_id: string, model: T) {
    this._byId[_id] = model
  }
}
