import React, { Component } from 'react'
export default class SignUp extends Component {
  render() {
    return (
      <form>
        <h3>Criar Conta</h3>
        <div className="mb-3">
          <label>Primeiro Nome</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>
        <div className="mb-3">
          <label>Sobrenome</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>
        <div className="mb-3">
          <label>Endereço de email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Senha</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Confirmar
          </button>
        </div>
        <p className="forgot-password text-right">
          Já possui conta? <a href="/sign-in">Fazer Login?</a>
        </p>
      </form>
    )
  }
}