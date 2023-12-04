/* eslint-disable react/prop-types */

function CurrencyInput({ defaultCurrencies, value, currency, onChangeValue, onChangeCurrency }) {
  return (
    <div className="currency">
      {/* <ul className="currencies">
        {defaultCurrencies.map((cur) => (
          <li
            onClick={() => {
              console.log(cur);
              onChangeCurrency(cur);
            }}
            key={cur}
          >
            {cur}
          </li>
        ))}
      </ul> */}

      <input onChange={(e) => onChangeValue(e.target.value)} value={value} type="number" placeholder={0} />

      <select
        value={currency}
        onChange={(e) => {
          onChangeCurrency(e.target.value);
        }}
      >
        {defaultCurrencies.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CurrencyInput;
