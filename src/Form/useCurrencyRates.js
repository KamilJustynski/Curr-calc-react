import { useState, useEffect } from "react";
import axios from "axios";

export const useCurrencyRates = () => {
  const [ratesData, setRatesData] = useState({
    state: "loading",
  });

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get(
          "https://api.exchangerate.host/latest?base=PLN"
        );

        const { rates, date } = await response.data;
        setRatesData({
          state: "succes",
          rates,
          date,
        });
      } catch {
        setRatesData({
          state: "error",
        });
      }
    };
    setTimeout(fetchRates, 2000);
  }, []);

  return ratesData;
};
