const API_KEY = "4cf97350f69e47a9ac7722d0086f67b8";
const BASE_URL = "https://openexchangerates.org/api/latest.json";

export function convertBaseToUAH(rates) {
  for (const currency in rates) {
    if (currency === "UAH") {
      rates.USD = +rates[currency].toFixed(2);
      delete rates[currency];
      continue;
    }
    if (currency === "USD") continue;
    rates[currency] = +(rates.UAH / rates[currency]).toFixed(2);
  }
  console.log(rates)
  return rates;
}
export async function getCurrencyRatesForUSD(currencies) {
  const res = await fetch(`${BASE_URL}?app_id=${API_KEY}&symbols=${currencies.toString()}`).then((res) => res.json());
  return res;
}
