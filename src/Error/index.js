import { Header, Content } from "./styled";
import { FormContainer } from "../Form/styled";

export const Error = () => {
  return (
    <FormContainer>
      <Header>Przelicznik walut</Header>
      <Content>
        Przepraszamy... <br></br>Coś poszło nie tak, sprawdź połączenie internetowe!
      </Content>
    </FormContainer>
  );
};
