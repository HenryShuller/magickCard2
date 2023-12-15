const React = require('react');
const Layout = require('./Layout');
const AddProduct = require('./AddProduct');
const CardOne = require('./CardOne');

function Main({ title, cards, user }) {
  return (
    <Layout title={title} user={user}>
      <AddProduct />
      <div className="container">
        {cards.map((card) => (
          <CardOne card={card} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = Main;
