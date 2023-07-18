import "./style.css";

const Fieldset = ({title, bodyLabelInput, bodyLabelSelect}) => (
  <fieldset className="form__fieldset">
    <legend className="form__legend">{title}</legend>
    {bodyLabelInput}
    {bodyLabelSelect}
    <p className="form__paragraph form__paragraph--size">
      Kwota po przeliczeniu:<strong> N/A</strong>
    </p>
  </fieldset>
);

export default Fieldset;