import React from 'react'

import icon from "../../assets/images/icons/email.svg"

import "./styles.css";

const LoginPage = () => {
  return (
    <div id="login-page" className="login-page-content">
        <h2>Entre com sua conta</h2>
        <div className='inputs'>
          <div className="input-email">
            <label htmlFor="">E-mail: </label>
            <input type="email" name="email" id="email" />
          </div>
          <div className='input-password'>
            <label htmlFor="">Senha: </label>
            <input type="password" name="password" id="password" />
          </div>
        </div>
        <div className="button">
          <button type="submit">
            <img src={icon} alt="Entrar" />
            Entrar
          </button>
        </div>
    </div>
  )
}

export default LoginPage
