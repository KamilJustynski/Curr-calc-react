import Container from "./Container";
import Input from "./Input";
import Select from "./Select";
import Label from "./Label";
import Fieldset from "./Fieldset";
import Form from "./Form";
import Button from "./Button";

function App() {
  return (
    <Container>
      <Form>
        <Fieldset
          title="Przelicznik walut"
          bodyLabelInput={<Label title="*Kwota w PLN:" body={<Input />} />}
          bodyLabelSelect={<Label title="*Przelicz na:" body={<Select />} />}
        />
        <Button title="Przelicz!" />
        <Button title="Reset!" />
      </Form>
    </Container>
  );
}

export default App;
