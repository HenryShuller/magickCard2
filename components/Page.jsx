const React = require('react');
const Layout = require('./Layout');

function Page({ title, card }) {
  return (
    <Layout>
      <div className="container1">
        {card.name}
        <img src={card.img} style={{ width: '500px' }}></img>
      </div>
    </Layout>
  );
}

module.exports = Page;
