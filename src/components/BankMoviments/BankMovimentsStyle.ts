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

  @media (max-width: 500px) {
    display: block;
    text-align: center;
  }
`;

const MovimentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
  @media (max-width: 500px) {
    margin-bottom: 3rem;
  }
`;

const Movimentation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  height: 10vh;
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

  @media (max-width: 500px) {
    width: 90%;
    height: auto;
    display: block;

    h2,
    h3 {
      left: 0px;
      text-align: center;
    }
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

  @media (max-width: 500px) {
    left: initial;
    right: 1rem;
    bottom: 1rem;
    float: inline-end;
  }
`;

const MovimentFilter = styled.button`
  background: transparent;
  border: none;
  padding: 7px 10px;
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 500px) {
    padding: 2rem;
  }
`;

export {
  MovimentsHeader,
  MovimentsContainer,
  Movimentation,
  MovimentDelete,
  MovimentFilter,
};
