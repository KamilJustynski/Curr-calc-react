import { useState } from "react";
import { currencies } from "../curriencies";


export const useSetResults = () => {
  const [result, setResult] = useState("");

  const calculateResult = (currency, amount) => {
    const rate = currencies.find(({ short }) => short === currency).rate;

    setResult([(amount / rate).toFixed(2), currency]);
  };

  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return {
    onSubmit,
    currency,
    currencies,
    result,
    amount,
    setAmount,
    setCurrency,
  };
};
