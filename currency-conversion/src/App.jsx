import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import InputBox from "./components/InputBox";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const Options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };


  return (
    <div>
      <div>
        <div>
          <form onSubmit={(e) => {
            e.preventDefault();
          }}>
            <div>
              <InputBox lable="From" amount={amount} currencyOptions={Options}
              onCurrencyChange={(Currency) => setFrom(Currency)}
              onAmountChange={(amount) => setAmount(amount)}
              selectCurrency={from}/>
            </div>
            <div>
              <button type="button" onClick={swap}>Swap</button>
            </div>
            <div>
              <InputBox lable="To" amount={convertedAmount} currencyOptions={Options}
              onCurrencyChange={(Currency) => setTo(Currency)}
              selectCurrency={to} ></InputBox>
            </div>
            <div>
              <button type="submit" onClick={convert}>
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
