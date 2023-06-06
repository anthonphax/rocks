import React, { Component } from 'react'
export default class Login extends Component {
  render() {
    return (

      <><button className="button-usipav">
        <span>USIPAV</span>
      </button>
        

      <form>
        <h3>Entrar</h3>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
              placeholder="Inserir email" />
        </div>
        <div className="mb-3">
          <label>Senha</label>
          <input
            type="password"
            className="form-control"
            placeholder="Inserir senha" />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1" />
            <label className="custom-control-label" htmlFor="customCheck1">
              Lembrar-se
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Confirmar
          </button>
        </div>
        <p className="forgot-password text-right">
          Esqueceu a <a href="#">senha?</a>
        </p>
      </form></>
    )
  }
}