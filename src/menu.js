import React from "react";
import logoImg from './assets/desenho.png';
import './menu.css';
import { IoMdExit } from 'react-icons/io';
import { IoMdDownload } from 'react-icons/io';
import { AiFillFilePdf } from 'react-icons/ai';
import Login from './login';
import { Link, Routes, Route } from 'react-router-dom';

export default function Menu(){
    return(
       <nav>
           <div className="logo">
                <img className="imgLogo" src={logoImg} alt='cerebro' />
           </div>
           <div className="itens-inicio">
                <ul>
                    <li className="li-item"><Link className="a" to="/">
                        <span className='icon'>
                            <IoMdDownload/>
                        </span>
                    DOWNLOAD DE ARQUIVOS</Link></li>

                    <li className="li-item"><Link className="a" to="/">
                        <span className='icon'>
                            <AiFillFilePdf/>
                        </span>
                    CONSULTAS</Link></li>     

                    <li className="li-saida">
                        <Link className="a" to="/">SAIR
                            <span className='icon-saida'>
                                <IoMdExit/>
                            </span>
                        </Link></li>
                </ul>                                             
           </div>
           <main>
                  <Routes>
                    <Route path='/' component={Login} />
                    <Route path='menu' component={Menu}/>
                  </Routes>
                </main>
       </nav>
    );
}

