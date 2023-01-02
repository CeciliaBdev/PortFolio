import React from 'react'
import avatar from '../assets/avatar.png'

function Apropos() {
  return (
    <div className="apropos" id="apropos">
      <div className="apropos_content">
        <div className="title">
          <h1>I'm Cécilia</h1>
          <h2 data-text="Developpeur front end react">
            Developpeur front end react
          </h2>
        </div>
        <div className="avatar">
          <img src={avatar} alt="cecilia" />
        </div>
      </div>
    </div>
  )
}

export default Apropos
