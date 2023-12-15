const React = require('react');

function CardOne({ card }) {
  return (
    <div className="cardone">
      <img src={card.img} style={{ width: '200px' }}></img>
      <a className="a2" href={`/Page/${card.id}`}>
        ИЗУЧИТЬ ...
      </a>

      <h2>{card.name}</h2>
      <a className="a2" href={`/card/${card.id}`}>
        Изменить
      </a>
    </div>
  );
}

module.exports = CardOne;
