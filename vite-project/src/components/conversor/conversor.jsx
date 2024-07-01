import React, { useState, useEffect } from "react";

const ConversorMonedas = () => {
  const [rates, setRates] = useState({});
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(null);

  useEffect(() => {
    fetch(
      "https://v6.exchangerate-api.com/v6/ec8f0bbb2d567ceeea2b3fae/latest/USD"
    )
      .then((response) => response.json())
      .then((data) => setRates(data.conversion_rates))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleConvert = () => {
    if (rates[fromCurrency] && rates[toCurrency]) {
      const rate = rates[toCurrency] / rates[fromCurrency];
      setResult(amount * rate);
    }
  };

  return (
    <div>
      <h1>Conversor de Monedas</h1>
      <div>
        <label>
          De:
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            {Object.keys(rates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label>
          A:
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            {Object.keys(rates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label>
          Cantidad:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleConvert}>Convertir</button>
      {result && (
        <div>
          <h2>
            Resultado: {result.toFixed(2)} {toCurrency}
          </h2>
        </div>
      )}
    </div>
  );
};

export default ConversorMonedas;
