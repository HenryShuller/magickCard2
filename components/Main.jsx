const React = require('react');
const Layout = require('./Layout');

function Main({ title, cards, user }) {
  return (
    <Layout title={title} user={user}>
      {/* <h1>Hello MAZA-FUCKA!</h1> */}
      <div className="container">
        {cards.map((card) => (
          <div className="cardone">
            <img src={card.img} style={{ width: '200px' }}></img>
            <h2>{card.name}</h2>
            <a className='a2' href={`/card/${card.id}`}>Изменить</a>
          </div>
        ))}
      </div>
    </Layout>
  );
}

module.exports = Main;
