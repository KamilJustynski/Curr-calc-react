import {
  FormContainer,
  FormFieldset,
  FormLegend,
  FormParagraph,
  FormLabel,
  FormSpan,
  FormInput,
  FormSelect,
  FormButton,
} from "./styled";
import { currencies } from "../curriencies";
import { useState } from "react";

const Form = () => {
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

  return (
    <FormContainer onSubmit={onSubmit}>
      <FormFieldset>
        <FormLegend>Przelicznik walut</FormLegend>
        <FormParagraph>
          <FormLabel>
            <FormSpan>*Kwota w PLN:</FormSpan>
            <FormInput
              required
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              placeholder="Kwota w PLN"
              type="number"
              step="0.01"
              min="0.01"
            />
          </FormLabel>
        </FormParagraph>
        <FormParagraph>
          <FormLabel>
            <FormSpan>*Przelicz na:</FormSpan>
            <FormSelect
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
            >
              {currencies.map((currency) => (
                <option key={currency.short} value={currency.short}>
                  {currency.name}
                </option>
              ))}
            </FormSelect>
          </FormLabel>
        </FormParagraph>
        <FormParagraph size>
          Kwota po przeliczeniu:
          <strong> {result}</strong>
        </FormParagraph>
      </FormFieldset>
      <FormParagraph modifier>
        Tabela kursów średnich NBP nr 137/A/NBP/2023 z dnia 18-07-2023
      </FormParagraph>
      <FormButton type="submit">Przelicz!</FormButton>
    </FormContainer>
  );
};

export default Form;
