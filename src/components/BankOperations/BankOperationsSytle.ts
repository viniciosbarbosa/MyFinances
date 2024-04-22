import styled from "styled-components";
import { FormContainerProps } from "../../models/interfaces/FormContainerProps/FormContainerProps";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  background-color: #36383e;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 500px;
  height: 300px;
  border-radius: 1.2rem;

  @media (max-width: 500px) {
    margin-bottom: 1.5rem;
    margin: 20px;
    padding: 20px 0px;
    height: auto;
  }

  & h2 {
    margin-left: 1rem;
    font-weight: 500;
    font-size: 2.2rem;
    color: #dddcda;
  }

  ,
  h3 {
    margin-left: 1rem;
    font-weight: 500;
    font-size: 2.2rem;
    color: #dddcda;
  }
`;

const CardHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -2rem;
`;

const FormContainer = styled.div<FormContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  @media (max-width: 500px) {
    display: block;
  }

  input {
    background: ${(props: FormContainerProps) =>
      props.invalid ? "#e43f4d7a" : "transparent"};

    box-shadow: ${(props: FormContainerProps) =>
      props.invalid ? "inset 0 0 0 2px #e43f4d;" : ""};
  }
`;

const FormInput = styled.input`
  box-shadow: inset #dddcda 0 0 0 2px;
  border: 0;
  background: rgba(0, 0, 0, 0);
  appearance: none;
  width: 50%;
  position: relative;
  border-radius: 10px;
  padding: 9px 12px;
  line-height: 1.4;
  color: #dddcda;
  font-size: 16px;
  font-weight: 400;
  height: 30px;
  transition: all 0.2s ease;

  @media (max-width: 500px) {
    display: block;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 1.5rem;
    height: auto;
  }

  &:hover {
    box-shadow: 0 0 0 0 #fff inset, #4ae081 0 0 0 2px;
  }

  ,
  &:focus {
    background: #ffffff00;
    outline: 0;
    box-shadow: 0 0 0 0 #fff inset, #4ae081 0 0 0 3px;
  }
`;

const ActionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
`;

export {
  Container,
  Card,
  CardHeader,
  FormContainer,
  FormInput,
  ActionsContainer,
};
