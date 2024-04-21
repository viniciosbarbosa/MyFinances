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
  justify-content: space-between;
  align-items: center;
  width: 70%;
  height: 8vh;
  background-color: #36383e;
  border-radius: 1.1rem;

  h2 {
    font-weight: 500;
    font-size: 2.2rem;
    color: #dddcda;
    position: relative;
    left: 6rem;
  }

  h3 {
    font-weight: 500;
    font-size: 2.2rem;
  }
`;

const MovimentDelete = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  background: transparent;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 5px;
  position: relative;
  right: 6rem;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.15);
  }
`;

export { MovimentsHeader, MovimentsContainer, Movimentation, MovimentDelete };
