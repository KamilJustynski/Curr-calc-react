import styled from "styled-components";

export const MainContainer = styled.div`
  max-width: 800px;
  margin: 130px auto;
  padding: 20px;
  background-color: ${({ theme }) => theme.color.white};
  height: max-content;
  border-radius: 50px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin: 60px 10px;
  }
`;
