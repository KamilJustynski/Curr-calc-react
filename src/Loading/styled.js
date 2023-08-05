import styled from "styled-components";

export const Header = styled.header`
  font-size: 30px;
  border-radius: 50px;
  padding: 20px;
  font-weight: bolder;
  color: ${({ theme }) => theme.color.blue};
  display: flex;
  justify-content: center;
  padding-top: 150px;
`;

export const Content = styled.p`
  font-size: 20px;
  padding: 20px;
  display: flex;
  justify-content: center;
  text-align: center
`;
