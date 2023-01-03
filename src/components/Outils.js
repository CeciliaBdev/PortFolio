import React from 'react'
import html from '../assets/html_logo.png'
import css from '../assets/css_logo.png'
import js from '../assets/js_logo.png'
import react from '../assets/react_logo.png'
import reduxtoolkit from '../assets/redux_toolkit_logo.jpeg'
import tailwind from '../assets/tailwind_logo.png'
import figma from '../assets/figma_logo.png'
import notion from '../assets/notion_logo.webp'
import git from '../assets/git_logo.png'
import github from '../assets/github_logo.png'

function Outils() {
  return (
    <div className="outils" id="outils">
      <div className="wrap_tools">
        <div className="dev">
          <h2>Développement</h2>
          <div className="logos">
            <img src={html} alt="html" width="50px" />
            <img src={css} alt="css" width="40px" />
            <img src={js} alt="js" width="50px" />
            <img src={react} alt="react" width="70px" />
            <img src={reduxtoolkit} alt="toolkit" width="70px" />
            <img src={tailwind} alt="tailwind" width="80px" />
          </div>
        </div>
        <div className="tools">
          <h2>Outils</h2>
          <div className="logos">
            <img src={figma} alt="figma" width="70px" />
            <img src={notion} alt="notion" width="80px" />
            <img src={git} alt="git" width="60px" />
            <img src={github} alt="github" width="50px" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Outils
