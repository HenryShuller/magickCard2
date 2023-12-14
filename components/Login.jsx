const React = require('react');
const Layout = require('./Layout');

function Login ({title}){
    return(
        <Layout title={title}>
        <div className='authCont'>
          <form className='formLog'>
            <input name='email' className='inputAuth' placeholder='почта'/>
            <input name='password' className='inputAuth' placeholder='пароль' type='password'/>
            <button type='submit' className=''>Войти</button>
          </form>
        
        </div>
    
        </Layout>
    )}
    module.exports=Login