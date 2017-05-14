import React from 'react'


const Contact = () => {
  return (
    <div className="contact">
      Contact
    </div>
  )
}

function newContent() {
    alert("load new content");
    document.open();
    document.write("<h1>Out with the old - in with the new!</h1>");
    document.close();
  }
  
export default Contact
