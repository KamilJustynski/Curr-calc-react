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
import { useSetResults } from "./useSetResults";
import { useCurrencyRates } from "./useCurrencyRates";
import { Loading } from "../Loading";
import { Error } from "../Error";

const Form = () => {
  const { onSubmit, currency, result, amount, setAmount, setCurrency } =
    useSetResults();

  const ratesData = useCurrencyRates();

  return (
    <FormContainer onSubmit={onSubmit}>
      {ratesData.status === "loading" ? (
        <Loading />
      ) : ratesData.status === "error" ? (
        <Error />
      ) : (
        <>
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
                  {Object.keys(ratesData.rates).map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
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
            Tabela kursów średnich NBP nr 137/A/NBP/2023 z dnia {ratesData.date}
          </FormParagraph>
          <FormButton type="submit">Przelicz!</FormButton>
        </>
      )}
    </FormContainer>
  );
};

export default Form;
