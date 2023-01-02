import React from 'react'

function Card(card) {
  return (
    <div className="card_wrapper">
      <div className="card">
        <a href={card.site} target="_blank" rel="noopener noreferrer">
          <img
            src={card.cover}
            alt={card.title}
            className="image"
            width="100%"
          />
        </a>
      </div>
      <p className="title_card">{card.title}</p>
    </div>
  )
}

export default Card
