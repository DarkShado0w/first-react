import logo from './logo.svg';
import './App.css';
import Stock from './Stock';
import {STOCKS} from "./constants";
import Counter from './Counter';
import {useState} from "react";
function App() {
  const [stocks, setStocks] = useState(STOCKS);
  
  
  const courseName ="MERN";
  const url = "https://google.com";
  const scores = [20,23,25,23,22,12];
  return (
    <div className="App">
      <Counter /> 
      {STOCKS.map((stock)=>(
        <Stock 
        key={stock.securityId} securityName= {stock.securityName} symbol={stock.symbol} lastTradePrice={stock.lastTradePrice}/>
      ))}
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React and {courseName}
        </a>
        
        <ul>
          {scores.map(s=><li>{s}</li>)}
        </ul>
      </header>
      < Stock />
    </div>
  );
}

export default App;