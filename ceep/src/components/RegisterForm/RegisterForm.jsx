import React, { Component } from "react";
import "./style.css";
class RegisterForm extends Component {

  constructor(props) {
    super(props);
    this.title = "";
    this.text = "";
  }

  _handleTitleChange(event) {
    event.stopPropagation();
    this.title = event.target.value
  }

  _handleTextChange(event) {
    event.stopPropagation();
    this.text = event.target.value
  }

  _createCard(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.createNote(this.title, this.text);
  }

  render() {
    return (
      <form className="register-form"
        onSubmit={this._createCard.bind(this)}
      >
        <input
          type="text"
          placeholder="Título"
          className="register-form_input"
          onChange={this._handleTitleChange.bind(this)}
        />
        <textarea
          rows={10}
          placeholder="Escreva sua nota..."
          className="register-form_input"
          onChange={this._handleTextChange.bind(this)}
        />
        <button className="register-form_input register-form_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default RegisterForm;