const React = require('react');
const Layout = require('./Layout');

function Main({ cards }) {
  return (
    <Layout>
      <h1>Hello MAZA-FUCKA!</h1>
      <div>
        {cards.map((card) => {
          card.name;
        })}
      </div>
    </Layout>
  );
}

module.exports = Main;
