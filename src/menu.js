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
                    <li><a href="#">
                        <span className='icon'>
                            <IoMdDownload/>
                        </span>
                    DOWNLOAD DE ARQUIVOS</a></li>

                    <li><a href="#">
                        <span className='icon'>
                            <AiFillFilePdf/>
                        </span>
                    CONSULTAS</a></li>                                                
                </ul>
           </div>
           <div className="saida">
                <ul className="saida-ul">
                    <span className='icon-saida'>
                        <IoMdExit/>
                    </span>
                    <li><Link to="/">
                        SAIR</Link></li>
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

