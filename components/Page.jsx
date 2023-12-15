const React = require('react');
const Layout = require('./Layout');

function Page({ title, cardi }) {
  console.log(cardi , '6666666666');
  return (

    <div className="container1">
      {cardi.name}
      <img src={cardi.img} style={{ width: '500px' }}></img>
      
    </div>
    

    <Layout title={title}>
      <div className="container">
        <h1 className="h1">{cardi.name}</h1>
        <h1 className="h2">{cardi.newold}</h1>

        <button>
          Купи<h1 className="h3">{cardi.price}</h1>
        </button>

        <img
          className="h4"
          src={cardi.img}
          style={{
            width: '500px',
            border: '1px solid gray',
            borderRadius: '8px',
          }}
        ></img>
      </div>
    </Layout>
 dev
  );
}

module.exports = Page;
