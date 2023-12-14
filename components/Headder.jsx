const React = require('react');

function Headder({ user }) {
  return (
    <div className="contNav">
      <div>
        <a className='a1' href="/">Главная</a>
      </div>
      {user ? (
        <div>
          <a className='a1' href="/">ВЫЙТИ</a>
        </div>
      ) : (
        <div>
          <a className='a1' href="/auth/rega">РЕГИСТРАЦИЯ</a>
        </div>
      )}
              {user ? (
          <div>
            <p>Приветик {user.name}!</p>
            <a className='a1' href="/auth/logout" >
              Выход
            </a>
          </div>

        ):(<div>
        
          <a className='a1' href="/auth/login" >
            Вход
          </a>
        </div>)}
    </div>
  );
}
module.exports = Headder;
