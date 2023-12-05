/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import Converter from "./components/Converter/Converter";
import Header from "./components/Header/Header";

function App() {
  const defaultCurrencies = ["UAH", "USD", "EUR", "GBP", "JPY", "AZN"];
  const [fromCurrency, setFromCurrency] = useState("UAH");
  const [toCurrency, setToCurrency] = useState("USD");
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(1);
  const UAHRates = useRef({});
  const rates = useRef({});

  useEffect(() => {
    fetch("https://openexchangerates.org/api/latest.json?app_id=4cf97350f69e47a9ac7722d0086f67b8")
      .then((res) => res.json())
      .then((data) => {
        rates.current = data.rates;
        onChangeToPrice(toPrice);
        const converted = convertToUahRates(data.rates);
        UAHRates.current = converted;
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    onChangeFromPrice(fromPrice);
  }, [fromCurrency]);

  useEffect(() => {
    onChangeFromPrice(toPrice);
  }, [toCurrency]);

  function onChangeFromPrice(value) {
    const price = value / rates.current[fromCurrency];
    const result = price * rates.current[toCurrency];
    setToPrice(result.toFixed(2));
    setFromPrice(value);
  }
  function onChangeToPrice(value) {
    const result = (rates.current[fromCurrency] / rates.current[toCurrency]) * value;
    setFromPrice(result.toFixed(2));
    setToPrice(value);
  }

  function convertToUahRates(rates) {
    let UAHRates = {};
    for (const currency in rates) {
      if (currency === "UAH") {
        UAHRates.USD = +rates[currency].toFixed(2);
        continue;
      }
      UAHRates[currency] = +(rates.UAH / rates[currency]).toFixed(2);
    }
    return UAHRates;
  }

  return (
    <>
      <Header rates={UAHRates.current} />
      <Converter
        defaultCurrencies={defaultCurrencies}
        fromPrice={fromPrice}
        fromCurrency={fromCurrency}
        setFromCurrency={setFromCurrency}
        onChangeFromPrice={onChangeFromPrice}
        toPrice={toPrice}
        toCurrency={toCurrency}
        setToCurrency={setToCurrency}
        onChangeToPrice={onChangeToPrice}
      />
    </>
  );
}
export default App;
