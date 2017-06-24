import React from 'react'


const Gallery = () => {
  return (
    <div className="container">
      <div className="row">
        <h2 className="gallery">Gallery</h2>
      </div>
      <div className="row">
        <div className="six columns">
          <img className="itemImage" src="./images/summer-profile-pic.jpg" alt="Item Image" />
          <h4 className="itemName">Breakfast table</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="six columns">
          <img className="itemImage" src="./images/summer-profile-pic.jpg" alt="Item Image" />
          <h4 className="itemName">Product item</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
  )
}
export default Gallery
