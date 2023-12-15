const React = require('react');
const Layout = require('./Layout');

function Page({ card }) {
  return (
    <Layout>
      <div className="container1">
        <h1 className="h1">{card.name}</h1>
        <h2 className="h1">Цена: {card.price}</h2>
        <img className="card1" src={card.img} style={{ width: '400px' }} />
      </div>
    </Layout>
  );
}

module.exports = Page;
