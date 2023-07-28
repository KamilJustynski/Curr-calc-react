import styled, { css } from "styled-components";

export const FormContainer = styled.form``;

export const FormFieldset = styled.fieldset`
  border-radius: 30px;
  padding: 50px;
  margin: 20px;
`;

export const FormLegend = styled.legend`
  font-size: 30px;
  border: 1px solid ${({ theme }) => theme.color.blue};
  border-radius: 50px;
  padding: 10px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.blue};
  font-weight: bolder;
`;

export const FormParagraph = styled.p`
  margin-top: 20px;
  padding: 10px 0;

  ${({ size }) =>
    size &&
    css`
      font-size: 20px;
    `}

  ${({ modifier }) =>
    modifier &&
    css`
      text-align: center;
    `}
`;

export const FormLabel = styled.label`
  font-size: 20px;
`;

export const FormSpan = styled.span`
  display: inline-block;
  width: 150px;
`;

export const FormInput = styled.input`
  border-radius: 20px;
  padding: 10px;
  max-width: 450px;
  width: 100%;
  box-shadow: 2px 2px 10px 0px ${({ theme }) => theme.color.gray};
`;

export const FormSelect = styled.select`
  border-radius: 20px;
  padding: 10px;
  max-width: 450px;
  width: 100%;
  box-shadow: 2px 2px 10px 0px ${({ theme }) => theme.color.gray};
`;

export const FormButton = styled.button`
  width: 100%;
  margin-top: 20px;
  padding: 10px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.color.blue};
  color: ${({ theme }) => theme.color.white};
  font-weight: bolder;
  cursor: pointer;
  border: none;
  font-size: 20px;

  &:hover {
    background-color: ${({ theme }) => theme.color.mediumBlue};
    transition: 0.1s;
  }

  &:active {
    background-color: ${({ theme }) => theme.color.lightBlue};
  }
`;
