/* eslint-disable react/prop-types */

function CurrencyInput({ defaultCurrencies, value, currency, onChangeValue, onChangeCurrency }) {
  return (
    <div className="currency-item">
      <input
        className="currency-item__input"
        onChange={(e) => onChangeValue(e.target.value)}
        value={value}
        type="number"
        placeholder={0}
      />
      <select
        className="currency-item__select"
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
