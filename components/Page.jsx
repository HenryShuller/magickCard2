const React = require('react');
const Layout = require('./Layout');

function Page({ title, cardi }) {
  console.log(cardi , '6666666666');
  return (
    <div className="container1">
      {cardi.name}
      <img src={cardi.img} style={{ width: '500px' }}></img>
      
    </div>
    
  );
}

module.exports = Page;
