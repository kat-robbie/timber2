import React from 'react'
import { HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import Nav from './Nav'
import About from './About'
import Gallery from './Gallery'
import Contact from './Contact'
import Header from './Header'
import Image from './Image'
import Footer from './Footer'
import Testimonials from './Testimonials'

function App () {
  return (
    <div className="app"><div/>

      <div className="topdivider"></div>

      <Header />

      <div className="divider"></div>

      <Gallery />

      <div className="divider"></div>

      <Contact />
      <Footer />

    </div>
  )
}

export default App

// <Router>
//   <div>
//     <Route exact path='/' component={Header}/>
//     <Route path='/about' component={About}/>
//     <Route path='/gallery' component={Gallery}/>
//     <Route path='/contact' component={Contact}/>
//   </div>
// </Router>
