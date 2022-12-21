import logo from "./logo.svg";
import "./App.css";
import Stock from "./Stock";
import { STOCKS } from "./constants";
import Counter from "./Counter";
import { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
function App() {
  const [stocks, setStocks] = useState(STOCKS);
  const [securityName, setSecurityName] = useState('');
  const [symbol,setSymbol]= useState("");
  const [lastTradedPrice, setLastTradedPrice]= useState(0);
    const addStock = () => {
    setStocks([
      ...stocks,
      {
        securityId:new Date().getTime(),
        securityName:securityName,
        symbol: symbol,
        indexId: 58,
        totalTradeQuantity: 285,
        lastTradedPrice: lastTradedPrice,
        percentageChange: -1.197183099,
        lastUpdatedDateTime: "2022-12-15 14:59:50.329564",
        previousClose: 710,
      },
    ]);
  };
 const removeStock = (givenId) =>
 setStocks(stocks.filter((a)=>a.securityId !== givenId));
  return (
    <div className="App">
      { <Counter /> }
      {stocks.map((stock) => (
        <Stock key={stock.securityId} {...stock} onRemove={removeStock} />
      ))}
      <BsPlusCircle color={"green"} size={32} onClick={addStock} />
      <h1>{securityName}</h1>
       <input value={securityName} onChange={(e)=> setSecurityName(e.target.value)}/>
       <input value={symbol} onChange={(e)=> setSymbol(e.target.value)}/>
       <input value={lastTradedPrice} onChange={(e)=> setLastTradedPrice(e.target.value)}/>
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;