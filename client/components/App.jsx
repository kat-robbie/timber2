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
    <div>
      <Header />

      <div className="divider"></div>

      <Gallery />
      <Testimonials />
      <About />

      <div className="divider"></div>

      <Contact />
      <Footer />

    </div>
  )
}

export default App

// <Router>
//   <div>
//     <Route exact path='/' component={Home}/>
//     <Route path='/about' component={About}/>
//     <Route path='/gallery' component={Gallery}/>
//     <Route path='/contact' component={Contact}/>
//   </div>
// </Router>
// <Header />
// <Nav />
// <Image />
