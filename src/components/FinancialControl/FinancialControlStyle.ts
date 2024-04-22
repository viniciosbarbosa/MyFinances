import styled from "styled-components";

const FinanceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > div:nth-child(2) {
    margin-left: 1.5rem;
  }

  @media (max-width: 500px) {
    > div:nth-child(2) {
      margin-left: 0;
    }

    display: block;
  }
`;

export default FinanceContainer;
