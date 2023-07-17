import "./style.css";

const Button = ({ title }) => (
  <button type="submit" className="form__button">
    {title}
  </button>
);

export default Button;
