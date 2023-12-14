const React = require('react');
const Layout = require('./Layout');

function Main({ title, cards }) {
  return (
    <Layout title={title}>
      <h1>Hello MAZA-FUCKA!</h1>
      <div>
        {cards.map((card) => (
          <div>
            <img src={card.img}></img>
            <h2>{card.name}</h2>
            <a href={`/card/${card.id}`}>Изменить</a>
          </div>
        ))}
      </div>
    </Layout>
  );
}

module.exports = Main;
