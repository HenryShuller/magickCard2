const React = require('react');

function Headder({ user }) {
  return (
    <div className="contNav">
      <div>
        <a className="a1" href="/">
          Главная
        </a>
      </div>

      {user ? (
        <div className="centerdiv">
          <div>
            {' '}
            <a className="a1" href="/auth/logout">
              Выход
            </a>
          </div>
          <div>
            {' '}
            <p className="p1">Приветик {user.name}!</p>
          </div>
        </div>
      ) : (
        <>
          <div>
            <a className="a1" href="/auth/rega">
              РЕГИСТРАЦИЯ
            </a>
          </div>
          <div>
            <a className="a1" href="/auth/login">
              Вход
            </a>
          </div>
        </>
      )}
    </div>
  );
}
module.exports = Headder;
