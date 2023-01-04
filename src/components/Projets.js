import React from 'react'
import { useRef } from 'react'
import { Links } from '../datas/datas'
import Card from './Card'

function Projets() {
  let scrl = useRef(null)

  const slide = (shift) => {
    scrl.current.scrollLeft += shift
  }

  return (
    <div className="projets" id="projets">
      <div className="content_projects">
        <div className="content_grid_arrow">
          <i
            className="fas fa-chevron-left prevButton"
            onClick={() => slide(-1300)}
          ></i>
          <div className="wrapper" ref={scrl}>
            {Links.map((link) => {
              // console.log(link)
              return (
                <Card
                  cover={link.cover}
                  title={link.title}
                  id={link.id}
                  key={link.id}
                  site={link.site}
                />
              )
            })}
          </div>
          <i
            className="fas fa-chevron-right nextButton"
            onClick={() => slide(1300)}
          ></i>
        </div>
      </div>
    </div>
  )
}

export default Projets
