const React = require('react');
const Layout = require('./Layout');

function Rega ({title}){
    return(
        <Layout title={title}>
        <div className="ccc">
        {/* <h2 className='h2Auth'style={{color: "white", display: 'flex', justifyContent: 'center'}}>Зарегестрируйся</h2> */}
        <div className='authCont'>
          <form  method='POST' className='formReg'>
            <input name='name' className='inputAuth' placeholder='имя'required/>
            <input name='password' className='inputAuth' placeholder='пароль'type='password' required/>
            <input name='email' className='inputAuth' placeholder='почта'required/>
            <input name='city' className='inputAuth' placeholder='город'required/>
            <button className='butn' type='submit' >Зарегестрироваться</button>
          </form>
        </div>
        </div>
        </Layout>
    )}
    module.exports=Rega