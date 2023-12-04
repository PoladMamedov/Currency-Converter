/* eslint-disable react/prop-types */
import CurrencyInput from "../CurrencyInput/CurrencyInput";

function Converter({
  defaultCurrencies,
  fromPrice,
  fromCurrency,
  setFromCurrency,
  onChangeFromPrice,
  toPrice,
  toCurrency,
  setToCurrency,
  onChangeToPrice,
}) {
  return (
    <div className="container currency-converter">
      <CurrencyInput
        defaultCurrencies={defaultCurrencies}
        value={fromPrice}
        currency={fromCurrency}
        onChangeCurrency={setFromCurrency}
        onChangeValue={onChangeFromPrice}
      />
      <span>&#8596;</span>
      <CurrencyInput
        defaultCurrencies={defaultCurrencies}
        value={toPrice}
        currency={toCurrency}
        onChangeCurrency={setToCurrency}
        onChangeValue={onChangeToPrice}
      />
    </div>
  );
}

export default Converter;
