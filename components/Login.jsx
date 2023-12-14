const React = require('react');
const Layout = require('./Layout');

function Login({ title }) {
  return (
    <Layout title={title}>
      <div className="ccc">
        <div className="authCont">
          <form className="formLog">
            <input name="email" className="inputAuth" placeholder="почта" />
            <input
              name="password"
              className="inputAuth"
              placeholder="пароль"
              type="password"
            />
            <button className="butn" type="submit">
              Войти
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
module.exports = Login;
