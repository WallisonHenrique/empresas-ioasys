import React, { Component } from "react";
import { Container, Nav, Content, FieldSearch, NotFound } from "./styles";
import lupa from "../../img/ic-search-copy-2.svg";
import ListCompanies from "../ListCompanies/ListCompanies";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.textInput = React.createRef();
  }

  componentDidMount() {
    this.textInput.current.focus();
  }

  handleClick = () => {
    this.setState({ text: "" });
    this.textInput.current.focus();
  };

  handleChange = event => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.history.push(`/pesquisa/${this.textInput.current.value}`);
  };

  resultSearch = () => {
    const isResult = this.props.enterprises;

    if (isResult === undefined) {
      return false;
    }

    if (isResult.enterprises.length > 0) {
      return <ListCompanies enterprises={this.props.enterprises} />;
    } else {
      return (
        <NotFound>
          Nenhuma empresa foi encontrada para a busca realizada.
        </NotFound>
      );
    }
  };

  render() {
    const { text } = this.state;

    return (
      <Container>
        <Nav>
          <form onSubmit={this.handleSubmit}>
            <FieldSearch icon={lupa}>
              <input
                type="text"
                name="search"
                value={text}
                placeholder="Pesquisar"
                ref={this.textInput}
                onChange={this.handleChange}
                autoComplete="off"
              />
              {text && (
                <button type="button" onClick={this.handleClick}>
                  <span className="sr-only">Limpar pesquisa</span>
                </button>
              )}
            </FieldSearch>
          </form>
        </Nav>
        <Content className="container-fluid">{this.resultSearch()}</Content>
      </Container>
    );
  }
}

export default Search;
