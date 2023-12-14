// components/Layout.jsx
const React = require('react');
// const Headder = require('./Headder');
function Layout({ title, children }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>


        <link href="/styles/style.css" rel="stylesheet" />
        {/* <script defer src="/scripts/script.js" />
        <script defer src="/scripts/add.js" />
        <script defer src="/scripts/delete.js" /> */}
        {/* дефер заставляет ассинхронно грузиться скрипит вместе с дом деревом, но разница в том что асинк остановит дом дерево затем продолжит, а дефер дождется до конца пока у нас не загрузится дом дерево пока что бы выполнить скрипты */}
      </head>
      <body>
        {/* <Headder /> */}
        {children}
      </body>
    </html>
  );
}
module.exports = Layout;
