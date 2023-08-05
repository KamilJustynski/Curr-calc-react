import { useState, useEffect } from "react";
import axios from "axios";

const linkURL = "https://api.exchangerate.host/latest?base=PLN";

export const useCurrencyRates = () => {
  const [ratesData, setRatesData] = useState({
    status: "loading",
  });

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get(linkURL);

        const { rates, date } = await response.data;
        setRatesData({
          status: "succes",
          rates,
          date,
        });
      } catch {
        setRatesData({
          status: "error",
        });
      }
    };
    setTimeout(fetchRates, 2000);
  }, []);

  return ratesData;
};
