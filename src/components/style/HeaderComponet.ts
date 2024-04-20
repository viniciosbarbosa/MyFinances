import styled from "styled-components";

const HeaderComponent = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;

  & h2 {
    margin-left: 1rem;
    font-weight: 500;
    font-size: 2.5rem;
    color: #dddcda;
  }
`;

export default HeaderComponent;
