const React = require('react');
const Layout = require('./Layout');

function Rega ({title}){
    return(
        <Layout title={title}>
        <div className='authCont'>
          <h2 className='h2Auth'>Зарегестрируйся</h2>
          <form  method='POST' className='formReg'>
            <input name='name' className='inputAuth' placeholder='имя'required/>
            <input name='password' className='inputAuth' placeholder='пароль'type='password' required/>
            <input name='email' className='inputAuth' placeholder='почта'required/>
            <input name='city' className='inputAuth' placeholder='город'required/>
            


            
           
            <button type='submit' >Зарегестрироваться</button>
          </form>
        
        </div>
    
        </Layout>
    )}
    module.exports=Rega