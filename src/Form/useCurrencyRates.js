import { useState, useEffect } from "react";

export const useCurrencyRates = () => {
  const [ratesData, setRatesData] = useState({
    state: "loading",
  });

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(
          "https://api.exchangerate.host/latest?base=PLN"
        );
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const { rates, date } = await response.json();
        setRatesData({
          state: "succes",
          rates,
          date,
        });
      } catch (error) {
        setRatesData({
          state: "error",
        });
      }
    };
    setTimeout(fetchRates, 2000);
  }, []);

  return ratesData;
};
