import React from 'react'
import { Links } from '../datas/datas'
import Card from './Card'

function Projets() {
  return (
    <div className="projets" id="projets">
      <div className="content_projects">
        <h2>Mes réalisations</h2>
        <div className="wrapper">
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
      </div>
    </div>
  )
}

export default Projets
