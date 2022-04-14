// import logo from "./logo.svg";
import "./App.css";
import Conversor from "./Components/Conversor";

function App() {
  return (
    <div className="App">
      <div className="image">
        <div className="linha">
          <h1>Conversor Monetário</h1>
          <div className="linhas">
            <Conversor moedaA="USD" moedaB="BRL"></Conversor>
            <Conversor moedaA="BRL" moedaB="USD"></Conversor>
          </div>
          <div className="linhas">
            <Conversor moedaA="EUR" moedaB="BRL"></Conversor>
            <Conversor moedaA="BRL" moedaB="EUR"></Conversor>
          </div>
          <div className="linhas">
            <Conversor moedaA="BTC" moedaB="BRL"></Conversor>
            <Conversor moedaA="BRL" moedaB="BTC"></Conversor>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
