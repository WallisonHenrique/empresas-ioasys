import React, { Component } from "react";
import {
  Form,
  FieldInput,
  Button,
  VisibilityPassword,
  Warning
} from "./styles";
import iconEmail from "../../img/ic-email.svg";
import iconPassword from "../../img/ic-cadeado.svg";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typePassword: "password"
    };
    this.formElements = {};
  }

  handlePassword = () => {
    const isPassword = this.state.typePassword === "password";
    if (isPassword) this.setState({ typePassword: "text" });
    else this.setState({ typePassword: "password" });
  };

  handleSubmit = event => {
    event.preventDefault();
    const data = Object.assign(
      ...Object.entries(this.formElements).map(e => ({ [e[0]]: e[1].value }))
    );
    this.props.callback(data);
  };

  registerRef = element => {
    if (element !== null) {
      this.formElements[element.name] = element;
    }
  };

  render() {
    const { errorMessage } = this.props;
    const { typePassword } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FieldInput icon={iconEmail} invalid={errorMessage}>
          <label className="sr-only">Email</label>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            required={true}
            autoComplete="off"
            ref={this.registerRef}
          />
        </FieldInput>
        <FieldInput icon={iconPassword} invalid={errorMessage}>
          <label className="sr-only">Senha</label>
          <input
            type={typePassword}
            name="password"
            placeholder="Senha"
            required={true}
            ref={this.registerRef}
          />
          {!errorMessage && (
            <VisibilityPassword type="button" onClick={this.handlePassword}>
              <span className="sr-only">Exibir senha</span>
            </VisibilityPassword>
          )}
        </FieldInput>
        <Warning>{errorMessage && errorMessage}</Warning>
        <Button invalid={errorMessage}>Entrar</Button>
      </Form>
    );
  }
}

export default LoginForm;
