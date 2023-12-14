const React = require('react');
const Layout = require('./Layout');

function Page({ title, cardi }) {
  return (
    <Layout title={title} >
      <div className="container1">
{cardi.name}
<img src={cardi.img} style={{ width: '500px' }}></img>
      </div>
    </Layout>
  );
}

module.exports = Page;