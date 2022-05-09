import logImg from './assets/imgLogo.png'
import logLat from './assets/desenho.png'
import './login.css';
import { FaUserAlt } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import { IoEnter } from 'react-icons/io5';
import Menu from './menu';
import { Link, Routes, Route } from 'react-router-dom';


function Login() {
  return (
    <div className="container">
        <span className="img_lateral-cer">
          <img className="img-late" src={logLat} alt='cerebro' />
        </span>
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
              <span className="login-form-img">
                <img className="imgLogo" src={logImg} alt='imagem da logo' />
              </span>
              
            <div className='wrap-input'>
                <span className='icon'>
                  <FaUserAlt/>
                </span>
                <input className="input" 
                type="email" 
                placeholder='Usuário'/>
            </div>

            <div className='wrap-input'>
                <span className='icon'>
                  <RiLockPasswordFill/>
                </span>
                <input className="input" 
                type="password" 
                placeholder='Senha'/>
            </div>

            <div className='container-login-form-btn'>
                <Link className="login-form-btn" to='/menu'>
                  Login 
                  <span className='icon-btn'>
                    <IoEnter/>
                  </span>
                </Link>

                <main>
                  <Routes>
                    <Route path='/' component={Login} />
                    <Route path='menu' component={Menu}/>
                  </Routes>
                </main>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
