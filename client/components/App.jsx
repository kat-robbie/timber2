import React from 'react'
import { HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import Nav from './Nav'
import Gallery from './Gallery'
import Contact from './Contact'
import Header from './Header'

function App () {
  return (
    <div className='app-container'>
      <Header />
      <Nav />
      <Router>
        <div>
          <Route exact path='/' component={Home}/>
          <Route path='/gallery' component={Gallery}/>
          <Route path='/contact' component={Contact}/>
        </div>
      </Router>
    </div>
  )
}

export default App
