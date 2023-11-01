import { useState, useEffect } from "react";
import axios from "axios";

const linkURL = `https://api.currencyapi.com/v3/latest?apikey=cur_live_pgBMEW0JweWFXhSgbtjLzqxuF8DZVOfY6TfEZN4S`;

export const useCurrencyRates = () => {
  const [ratesData, setRatesData] = useState({
    status: "loading",
  });

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get(linkURL);

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const { data } = await response.json();

        setRatesData({
          status: "success",
          data,
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
