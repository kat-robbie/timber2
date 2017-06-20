import React from 'react'
import { HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import Nav from './Nav'
import About from './About'
import Gallery from './Gallery'
import Contact from './Contact'
import Header from './Header'
import Image from './Image'

function App () {
  return (
    <div>
      <div className="hero">
        <div className="container">
          <div className="row">
            <div className="six columns">
              <h1>Basic Page</h1>
              <h2>Test test test test</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <button className="button button-primary">Press the button</button>
            </div>
          </div>
        </div>
      </div>

      <div className="divider"></div>

      <div className="services">
        <div className="container">
          <div className="row">
            <div className="four columns">
              <i className="fa fa-rocket fa-4x u-pull-left" aria-hidden="true"></i>
              <h3>Rocket Man</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="four columns">
              <i className="fa fa-rocket fa-4x u-pull-left" aria-hidden="true"></i>
              <h3>Rocket Man</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="four columns">
              <i className="fa fa-rocket fa-4x u-pull-left" aria-hidden="true"></i>
              <h3>Rocket Man</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <h2 className="testimonial">Testimonials</h2>
        </div>
        <div className="row">
          <div className="six columns">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <img className="profile" src="./images/summer-profile-pic.jpg" alt="Profile Picture" />
            <h4 className="name">Kat is cool</h4>
          </div>
          <div className="six columns">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <img className="profile" src="./images/summer-profile-pic.jpg" alt="Profile Picture" />
            <h4 className="name">Kat is cool</h4>
          </div>
        </div>
      </div>

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
