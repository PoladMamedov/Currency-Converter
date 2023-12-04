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
    <>
      <CurrencyInput
        defaultCurrencies={defaultCurrencies}
        value={fromPrice}
        currency={fromCurrency}
        onChangeCurrency={setFromCurrency}
        onChangeValue={onChangeFromPrice}
      />
      <CurrencyInput
        defaultCurrencies={defaultCurrencies}
        value={toPrice}
        currency={toCurrency}
        onChangeCurrency={setToCurrency}
        onChangeValue={onChangeToPrice}
      />
    </>
  );
}

export default Converter;
