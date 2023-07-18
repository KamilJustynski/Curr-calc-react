import "./style.css";
import { currencies } from "../curriencies";
import { useState } from "react";

const Form = ({ calculateResult, result }) => {
  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <fieldset className="form__fieldset">
        <legend className="form__legend">Przelicznik walut</legend>
        <p className="form__paragraph">
          <label className="form__label">
            <span className="form__span">*Kwota w PLN:</span>
            <input
              required
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              placeholder="Kwota w PLN"
              className="form__input"
              type="number"
              step="0.01"
              min="0.01"
            />
          </label>
        </p>
        <p className="form__paragraph">
          <label className="form__label">
            <span className="form__span">*Przelicz na:</span>
            <select
              className="form__input"
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
            >
              {currencies.map((currency) => (
                <option key={currency.short} value={currency.short}>
                  {currency.name}
                </option>
              ))}
            </select>
          </label>
        </p>
        <p className="form__paragraph form__paragraph--size">
          Kwota po przeliczeniu:
          <strong> {result}</strong>
        </p>
      </fieldset>
      <p className="form__paragraph--modifier">
        Tabela kursów średnich NBP nr 137/A/NBP/2023 z dnia 18-07-2023
      </p>
      <button type="submit" className="form__button">
        Przelicz!
      </button>
      <button type="reset" className="form__button">
        Reset!
      </button>
    </form>
  );
};

export default Form;
