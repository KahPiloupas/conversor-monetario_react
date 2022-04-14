import React, { Component } from "react";
import "./styles.css";
export default class Conversor extends Component {
  constructor(props) {
    super(props);
    console.log(props.moedaA);

    this.state = {
      moedaA_valor: "",
      moedaB_valor: 0,
      conversionData: {},
      moedaA: props.moedaA,
      moedaB: props.moedaB,
    };

    this.converter = this.converter.bind(this);
  }

  converter(event) {
    event.preventDefault();
    const url = `https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL`;

    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(this.state.moedaA);
        const moedaB_valor = (
          this.state.moedaA !== "BRL"
            ? parseFloat(this.state.moedaA_valor) * data[this.state.moedaA].high
            : parseFloat(this.state.moedaA_valor) / data[this.state.moedaB].high
        ).toFixed(2);
        this.setState({ moedaB_valor });
        this.setState({ conversionData: data });
        return data;
      });
  }

  render() {
    return (
      <div className="conversor">
        <h2>
          {this.props.moedaA} to {this.props.moedaB}
        </h2>
        <form onSubmit={this.converter}>
          <input
            type="text"
            onChange={(event) => {
              this.setState({ moedaA_valor: event.target.value });
            }}
          ></input>
          <button type="submit">Converter</button>
        </form>
        <h2>{this.state.moedaB_valor}</h2>
      </div>
    );
  }
}
