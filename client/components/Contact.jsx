import React from 'react'


const Contact = () => {
  return (
    <div className="contact">
      Contact
      <div>
        <img src="https://github.com/kat-robbie/timber2/blob/master/public/images/email.gif?raw=true" alt="Woodgrain Header" />
      </div>
    </div>
  )
}

var emailAddress = ('ianrobbie@' + 'xtra.co.nz');
document.write('<a href="mailto:' + emailAddress + '">' + emailAddress + '</a>');




export default Contact
