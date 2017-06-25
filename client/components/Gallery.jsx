import React from 'react'


const Gallery = () => {
  return (
    <div className="galleryfour">
      <div className="container">
        <div className="row">
          <h2>Gallery</h2>
        </div>
        <div className="row">
          <div className="three columns pictures">
            <img src="./images/table.jpeg" alt="table" />
          </div>
          <div className="three columns pictures">
            <img src="./images/kubb.jpg" alt="kubb" />
          </div>
          <div className="three columns pictures">
            <img src="./images/woodtray.jpeg" alt="past client logo" />
          </div>
          <div className="three columns pictures">
            <img src="./images/woodenrobot.jpg" alt="past client logo" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Gallery
