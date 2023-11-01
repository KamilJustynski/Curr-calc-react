import { useState } from "react";
import { useCurrencyRates } from "./useCurrencyRates";

export const useSetResults = () => {
  const [result, setResult] = useState(null);
  const ratesData = useCurrencyRates();

  const calculateResult = (currency, amount) => {
    const rate = ratesData.data[currency].value;

    setResult([(amount / rate).toFixed(2), currency]);
  };

  const [currency, setCurrency] = useState("EUR");
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return {
    onSubmit,
    currency,
    result,
    amount,
    setAmount,
    setCurrency,
  };
};
