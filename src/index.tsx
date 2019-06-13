import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'mobx-react'
import axios from 'axios'
import Home from './Home'
import Offer from './Offer'
import throttle from 'lodash.throttle'

axios.defaults.baseURL = 'https://api.stardev.co'
axios.defaults.baseURL = 'http://localhost:4000'
axios.defaults.headers['content-type'] = 'application/json'

Object.assign(document.body.style, {
  margin: 'auto',
  'font-family': 'Helvetica',
  // 'background-color': Colors.white,
  minHeight: window.innerHeight,
})

const stores = {}

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
    </Router>
  </Provider>,
  appDiv
)
