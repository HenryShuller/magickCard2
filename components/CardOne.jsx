const React = require('react');

function CardOne({ card }) {
  return (
    <div className="cardone" className="card1" data-id={card.id}>
      <img src={card.img} style={{ width: '200px' }}></img>
      <a className="a2" href={`/Page/${card.id}`}>
        Изучить
      </a>
      <a className="a2" href={`/card/${card.id}`}>
        Изменить
      </a>
      <button type='button' className='btndelet'> Удалить</button>
    </div>
  );
}

module.exports = CardOne;
