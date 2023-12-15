const React = require('react');
const Layout = require('./Layout');
const AddProduct = require('./AddProduct');
const CardOne = require('./CardOne');


function Main({ title, cards, user }) {
 
  return (
    <Layout title={title} user={user}>
      <AddProduct/>
      <div className="container">
        {cards.map((card) => (

         <CardOne card={card}/>

          <div className="cardone">
            <img
              src={card.img}
              style={{
                width: '300px',
                border: '1px solid gray',
                borderRadius: '8px',
              }}
            ></img>
            <a className="a2" href={`/Page/${card.id}`}>
              ИЗУЧИТЬ ...
            </a>

            <h2>{card.name}</h2>
            <a className="a2" href={`/card/${card.id}`}>
              Изменить
            </a>
          </div>
 dev
        ))}
      </div>
    </Layout>
  );
}

module.exports = Main;
