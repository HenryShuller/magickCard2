const React = require('react');

function CardOne({ card }) {
  return (
    <div className="cardone">
      <img src={card.img} className="card1" style={{ width: '200px' }}></img>
      <h2 className="h3">{card.name}</h2>
      <a className="a2" href={`/Page/${card.id}`}>
        Изучить
      </a>
      <a className="a2" href={`/card/${card.id}`}>
        Изменить
      </a>
    </div>
  );
}

module.exports = CardOne;
