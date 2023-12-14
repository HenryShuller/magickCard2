const React = require('react');
const Layout = require('./Layout');

function PutCardPage({ card }) {
  return (
    <Layout>
      <div>
        <form className="putForm" data-id={card.id}>
          <input
            type="text"
            className="inputAuth"
            name="name"
            value={card.name}
          />
          <input
            type="text"
            className="inputAuth"
            name="img"
            value={card.img}
          />
          <input
            type="text"
            className="inputAuth"
            name="price"
            value={card.price}
          />
          <input
            type="text"
            className="inputAuth"
            name="newold"
            value={card.newold}
          />
          <button className="butn" type="submit">
            Изменить
          </button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = PutCardPage;
