import { Header, Content } from "./styled";
import { FormContainer } from "../Form/styled";

export const Loading = () => {
  return (
    <FormContainer>
      <Header>Przelicznik walut</Header>
      <Content>
        Prosze chwilkę poczekać... <br></br> Ładuje kursy z Europejskiego Banku
        Centralnego...
      </Content>
    </FormContainer>
  );
};
