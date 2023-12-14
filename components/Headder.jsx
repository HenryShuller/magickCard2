const React = require('react');

function Headder({ user }) {
  return (
    <div className="contNav">
      <div>
        <a href="/">Главная</a>
      </div>
      {user ? (
        <div>
          {/* <a href="/">ВЫЙТИ</a> */}
        </div>
      ) : (
        <div>
          <a href="/auth/rega">РЕГИСТРАЦИЯ</a>
        </div>
      )}
              {user ? (
          <div>
            <p>Приветик {user.name}!</p>
            <a href="/auth/logout" >
              Выход
            </a>
          </div>

        ):(<div>
        
          <a href="/auth/login" >
            Вход
          </a>
        </div>)}
    </div>
  );
}
module.exports = Headder;
