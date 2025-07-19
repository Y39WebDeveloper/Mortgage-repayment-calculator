import { useState } from "react";
import "./App.css";
import { Calculator, Result } from "./Components";

function App() {
  const [mortage, setMortage] = useState({
    amount: "",
    term: "",
    rate: "",
    type: "repayment",
    result: 0,
    total: 0,
    isEmpty: true,
    firstSubmit: true
  });
  
  // let amount = 300000
  // let term = 25*12
  // let rate = (5.25/12/100)
  // let result = amount*rate*(((1+rate)**term)/((1+rate)**term-1));
  // console.log(rate)
  // console.log(result.toFixed(2))
  // console.log((result*term).toFixed(2))

  return (
    <div className="app">
      <Calculator mortage={mortage} setMortage={setMortage} />
      <Result result={mortage.result} total={mortage.total} isEmpty={mortage.isEmpty} />
    </div>
  );
}

export default App;
