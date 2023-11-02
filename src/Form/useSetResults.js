import { useState } from "react";
import { useCurrencyRates } from "./useCurrencyRates";

export const useSetResults = () => {
  const [result, setResult] = useState(null);
  const ratesData = useCurrencyRates();
  const [currency, setCurrency] = useState("EUR");
  const [amount, setAmount] = useState("");

  const calculateResult = (currency, amount) => {
    const rate = ratesData.data[currency].value;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rate,
      currency,
    });
  };

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
