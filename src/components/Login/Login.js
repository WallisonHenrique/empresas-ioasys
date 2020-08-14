import React, { Component } from "react";
import { Container, Wrapper, Logo, Title, Description } from "./styles";
import logo from "../../img/logo-home.png";
import { withRouter } from "react-router-dom";
import { LoginWrapper } from "./LoginWrapper";
import LoginForm from "./LoginForm";
import Loading from "../../utils/Loading";

export const Login = withRouter(
  LoginWrapper(
    class Login extends Component {
      constructor(props) {
        super(props);
        this.state = {
          errorMessage: null,
          loading: false
        };
      }

      signin = credentials => {
        this.setState({ loading: true });
        this.props
          .signin(credentials)
          .catch(err => {
            const errorMessage =
              "Credenciais informadas são inválidas, tente novamente.";
            return this.setState({
              errorMessage: errorMessage,
              loading: false
            });
          })
          .then(this.props.history.push("/home"));
      };

      render() {
        return (
          <Container>
            <Wrapper>
              <Logo src={logo} />
              <Title>BEM-VINDO AO EMPRESAS</Title>
              <Description>
                Lorem ipsum dolor sit amet, contetur adipiscing elit. Nunc
                accumsan.
              </Description>
              <LoginForm
                callback={this.signin}
                errorMessage={this.state.errorMessage}
              />
            </Wrapper>
            {this.state.loading && <Loading />}
          </Container>
        );
      }
    }
  )
);

export default Login;
