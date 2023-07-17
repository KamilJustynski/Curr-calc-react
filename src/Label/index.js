import "./style.css";

const Label = ({ title, body }) => (
  <label className="form__label">
    <span className="form__span">{title}</span>
    {body}
  </label>
);

export default Label;