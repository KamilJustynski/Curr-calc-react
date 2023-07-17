import "./style.css";

const Select = () => (
  <select name="currency" className="form__input">
    <option value="USD">USD</option>
    <option value="EUR">EUR</option>
    <option value="GBP">GBP</option>
    <option value="CHF">CHF</option>
  </select>
);

export default Select;
