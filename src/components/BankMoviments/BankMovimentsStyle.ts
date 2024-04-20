import styled from "styled-components";

const MovimentsHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

  h2 {
    margin-left: 1rem;
    font-weight: 500;
    font-size: 2.2rem;
    color: #dddcda;
  }
`;

const MovimentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const Movimentation = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  height: 8vh;
  background-color: #36383e;
  border-radius: 2.4rem;

  h2 {
    font-weight: 500;
    font-size: 2.2rem;
    color: #dddcda;
  }

  h3 {
    font-weight: 500;
    font-size: 2.2rem;
  }
`;

const BalanceBtn = styled.div`
  color: #4ae081;
`;

const ExpenseBtn = styled.div`
  color: #e43f4d;
`;

export {
  MovimentsHeader,
  MovimentsContainer,
  Movimentation,
  BalanceBtn,
  ExpenseBtn,
};
