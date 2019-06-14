import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'mobx-react'
import axios from 'axios'
import Home from './Home'
import Offer from './Offer'
import EditOffer from './EditOffer'
import throttle from 'lodash.throttle'
import OfferStore from './stores/offer'
import AuthStore from './stores/auth'
import UserStore from './stores/user'
require('../static/pdfkit.standalone.js')

axios.defaults.baseURL = 'https://api.stardev.co'
axios.defaults.baseURL = 'http://localhost:4000'
axios.defaults.headers['content-type'] = 'application/json'

Object.assign(document.body.style, {
  margin: 'auto',
  'font-family': 'Helvetica',
  // 'background-color': Colors.white,
  minHeight: window.innerHeight,
})

const stores = {
  offer: new OfferStore(),
  user: new UserStore(),
  auth: new AuthStore(),
}

const appDiv = document.getElementById('app')
const setAppStyle = () => {
  appDiv.setAttribute(
    'style',
    `
min-height: ${window.innerHeight}px;
`
  )
}
window.addEventListener('resize', throttle(setAppStyle, 250))
setAppStyle()

ReactDOM.render(
  <Provider {...stores}>
    <Router>
      <Route path="/" component={Home} exact />
      <Route path="/offer/:id" component={Offer} />
      <Route path="/offer/:id/edit" component={EditOffer} />
    </Router>
  </Provider>,
  appDiv
)
