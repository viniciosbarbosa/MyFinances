import styled from "styled-components";

interface ButtonProps {
  priority?: string; // Definindo a propriedade priority como um atributo customizado
}

const ButtonComponent = styled.button<ButtonProps>`
  display: inline-block;
  outline: none;
  cursor: pointer;
  font-weight: 600;
  border-radius: 3px;
  padding: 12px 24px;
  border: 0;
  color: #fafafa;
  line-height: 1.15;
  font-size: 17px;
  transition: 0.3s;
  &:disabled {
    background-color: #e43f4d43;
  }

  ${(props) =>
    props.priority === "input"
      ? `background-color: #4ae081; /* Green background */`
      : `background-color: #e43f4d; /* Red background */`}

  &:hover {
    transition: all 0.1s ease;
    box-shadow: 0 0 0 0 #fff,
      0 0 0 3px
        ${(props) => (props.priority === "input" ? "#4ae081" : "#e43f4d")};
  }
`;

export { ButtonComponent };
