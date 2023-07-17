import "./style.css";

const Input = () => (
  <input
    required
    placeholder="Kwota w PLN"
    className="form__input"
    type="number"
    step="0.01"
    min="0.01"
  />
);

export default Input;
