import React from 'react'


const Testimonials = () => {
  return (
    <div className="container">
      <div className="row">
        <h2 className="gallery">Gallery</h2>
      </div>
      <div className="row">
        <div className="six columns">
          <img className="itemImage" src="./images/table.jpeg" alt="Item Image" />
          <h4 className="itemName">Breakfast table</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="six columns">
          <img className="itemImage" src="./images/kubb.jpg" alt="Item Image" />
          <h4 className="itemName">Kubb Game</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
  )
}
export default Testimonials
