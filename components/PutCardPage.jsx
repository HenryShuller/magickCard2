const React = require('express');
const Layout = require('./Layout');

module.exports = function PutCardPage({ card }) {
  return (
    <Layout>
      <div>
        <form id="putForm" data-id={card.id}>
          <input type="text" name="name" value={card.name} />
          <input type="text" name="img" value={card.img} />
          <input type="text" name="price" value={card.price} />
          <input type="text" name="newold" value={card.newold} />
          <button type="submit">Изменить</button>
        </form>
      </div>
    </Layout>
  );
};
