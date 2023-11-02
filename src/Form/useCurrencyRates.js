import { useState, useEffect } from "react";
import axios from "axios";

const linkURL = `https://api.currencyapi.com/v3/latest?apikey=cur_live_pgBMEW0JweWFXhSgbtjLzqxuF8DZVOfY6TfEZN4S&base_currency=PLN`;

export const useCurrencyRates = () => {
  const [ratesData, setRatesData] = useState({
    status: "loading",
    data: null,
  });

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get(linkURL);

        if (response.status !== 200) {
          throw new Error(response.statusText);
        }

        const { data, meta } = response.data;

        setRatesData({
          status: "success",
          data,
          meta,
        });
      } catch (error) {
        setRatesData({
          status: "error",
          data: null,
        });
      }
    };
    setTimeout(fetchRates, 2000);
  }, []);

  return ratesData;
};