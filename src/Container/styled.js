import styled from "styled-components";

export const MainContainer = styled.div`
  max-width: 800px;
  margin: 130px auto;
  padding: 20px;
  background-color: white;
  height: max-content;
  border-radius: 50px;

  @media (max-width: 600px) {
    margin: 60px 10px;
  }
`;
