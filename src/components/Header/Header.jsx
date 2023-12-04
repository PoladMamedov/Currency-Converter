/* eslint-disable react/prop-types */

function Header({ defaultCurrencies, rates }) {

  return (
    <header>
      <div className="container">
      <h1 className="header-title">Currency Converter</h1>
        <ul className="header-ratelist">
          {defaultCurrencies.map((key) => {
            if (key === "UAH") return;
            return <li key={key}>{key + ": " + rates[key] + " UAH"}</li>;
          })}
        </ul>
      </div>
    </header>
  );
}

export default Header;
