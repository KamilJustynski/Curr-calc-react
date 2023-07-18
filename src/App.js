import { useState } from "react";
import Container from "./Container";
import Form from "./Form";
import { currencies } from "./curriencies";

function App() {
  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies.find(({ short }) => short === currency).rate;

    setResult([(amount / rate).toFixed(2), currency]);
  };

  return (
    <Container>
      <Form result={result} calculateResult={calculateResult} />
    </Container>
  );
}

export default App;
