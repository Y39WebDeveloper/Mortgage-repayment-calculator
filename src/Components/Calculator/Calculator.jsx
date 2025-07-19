import { InputField, RadioInput } from "../";
import "./Calculator.css";

function Calculator({ mortage, setMortage }) {
  function handleMortageAmount(e) {
    setMortage({ ...mortage, amount: e.target.value });
  }
  function handleMortageTerm(e) {
    setMortage({ ...mortage, term: e.target.value });
  }
  function handleMortageRate(e) {
    setMortage({ ...mortage, rate: e.target.value });
  }
  function handleMortageType(e) {
    setMortage({ ...mortage, type: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault()
    if(mortage.amount!=="" && mortage.rate !== "" && mortage.term !== ""){
      if (mortage.type === "repayment") {
        let amount = mortage.amount;
        let rate = mortage.rate / 12 / 100;
        let term = mortage.term * 12;
        let res = amount * rate * ((1 + rate) ** term / ((1 + rate) ** term - 1));
        let total = res*term
        setMortage({ ...mortage, result: res.toFixed(2), total:total.toFixed(2), isEmpty: false, firstSubmit: true });
      }else{
        let amount = mortage.amount;
        let rate = mortage.rate / 12 / 100;
        let term = mortage.term * 12;
        let res = rate*amount;
        let total = res*term;
        setMortage({ ...mortage, result: res.toFixed(2), total:total.toFixed(2), isEmpty: false, firstSubmit: true });
      }
    }else{ 
      setMortage({...mortage, isEmpty: true, firstSubmit: false})
    }
  }

  return (
    <form className="calculator" onSubmit={(e)=>{e.preventDefault()}}>
      <div className="header">
        <h2 className="txt-2">Mortgage Calculator</h2>
        <button
          className="clear-btn txt-4 txt-slate-700"
          onClick={() => {
            setMortage({
              amount: null,
              term: null,
              rate: null,
              type: "repayment",
            });
          }}
        >
          Clear All
        </button>
      </div>
      <div className="inputs">
        <InputField
          inputTitle="Mortgage Amount"
          inputSpan="£"
          fullWidth
          value={mortage.amount}
          setValue={handleMortageAmount}
          firstSubmit={mortage.firstSubmit}
        />
        <InputField
          inputTitle="Mortgage Term"
          inputSpan="years"
          spanPosRight
          value={mortage.term}
          setValue={handleMortageTerm}
          firstSubmit={mortage.firstSubmit}
        />
        <InputField
          inputTitle="Interest Rate"
          inputSpan="%"
          spanPosRight
          value={mortage.rate}
          setValue={handleMortageRate}
          firstSubmit={mortage.firstSubmit}
        />
        <div className="radio-field">
          <span className="txt-4 txt-slate-700">Mortgage Type</span>
          <div className="radios">
            <RadioInput
              name={"Mortgage"}
              value={"repayment"}
              label={"Repayment"}
              setValue={handleMortageType}
              checked={mortage.type}
            />
            <RadioInput
              name={"Mortgage"}
              value={"interest"}
              label={"Interest"}
              setValue={handleMortageType}
              checked={mortage.type}
            />
          </div>
        </div>
      </div>
      <button className="calc-btn txt-3 txt-slate-900" onClick={handleSubmit} type="submit">
        <div className="icon">
          <img src="/assets/images/icon-calculator.svg" alt="calc" />
        </div>
        Calculate Repayments
      </button>
    </form>
  );
}

export default Calculator;
