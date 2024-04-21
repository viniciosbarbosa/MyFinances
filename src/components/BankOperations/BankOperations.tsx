import React, { useState } from "react";
import { BankOperationsProps } from "../../models/interfaces/BankOperationsProps/BankOperationsProps";
import {
  ActionsContainer,
  Card,
  CardHeader,
  Container,
  FormContainer,
  FormInput,
} from "./BankOperationsSytle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollar } from "@fortawesome/free-solid-svg-icons";
import { faPercent } from "@fortawesome/free-solid-svg-icons/faPercent";
import Button from "../shared/Button/Button";
import { FormatMoney } from "../../utils/util";

const BankOperations = ({
  currentTypeOperation,
  currentValueOperation,
  emitNewStament,
  title,
  balanceValue,
}: BankOperationsProps) => {
  const [renderInputForm, setRenderInputForm] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [inputNameOperation, setInputNameOperation] = useState("");
  const [inputValueOperation, setInputValueOperation] = useState("");

  const handleRenderInput = () => setRenderInputForm(!false);

  const hideInputForm = () => {
    setRenderInputForm(false);
    setIsFormValid(true);
    setInputNameOperation("");
    setInputValueOperation("");
  };

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      inputNameOperation.trim().length === 0 ||
      inputValueOperation.trim().length === 0
    ) {
      setIsFormValid(false);
      return false;
    }

    if (
      balanceValue !== undefined &&
      balanceValue >= Number(inputValueOperation)
    ) {
      hideInputForm();
      emitNewStament({
        name: inputNameOperation,
        value: inputValueOperation,
        type: currentTypeOperation,
      });
    } else if (currentTypeOperation === "input") {
      hideInputForm();
      emitNewStament({
        name: inputNameOperation,
        value: inputValueOperation,
        type: currentTypeOperation,
      });
    } else {
      alert("Saldo Insuficiente , favor fazer um deposito !");
      hideInputForm();
    }
  };

  const handleInputForm = (
    event: React.FormEvent<HTMLInputElement>,
    genericInput: string,
    setGenericInput: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const eventTarget = event.currentTarget as HTMLInputElement;
    const eventValue = eventTarget.value;
    genericInput.trim().length > 0
      ? setIsFormValid(true)
      : setIsFormValid(false);
    setGenericInput(eventValue);
  };
  return (
    <>
      <Container>
        <Card>
          <CardHeader>
            {title === "Saldo" ? (
              <FontAwesomeIcon icon={faDollar} color="#4ae081" size="2x" />
            ) : (
              <FontAwesomeIcon icon={faPercent} color="#e43f4d" size="2x" />
            )}
            <h2>{title}</h2>
          </CardHeader>

          <h3>
            {currentValueOperation > 0
              ? FormatMoney(String(currentValueOperation))
              : "R$ 0"}
          </h3>

          {!renderInputForm && (
            <Button
              action={handleRenderInput}
              priority={currentTypeOperation}
              title={title === "Saldo" ? "Entrada" : "Saida"}
              disable={balanceValue == 0}
            />
          )}

          {renderInputForm && (
            <form onSubmit={formSubmitHandler}>
              <FormContainer invalid={!isFormValid}>
                <FormInput
                  type="text"
                  placeholder="Nome"
                  value={inputNameOperation}
                  onChange={(event) =>
                    handleInputForm(
                      event,
                      inputNameOperation,
                      setInputNameOperation
                    )
                  }
                />

                <FormInput
                  type="text"
                  placeholder="Valor"
                  value={inputValueOperation}
                  onChange={(event) =>
                    handleInputForm(
                      event,
                      inputValueOperation,
                      setInputValueOperation
                    )
                  }
                />
              </FormContainer>

              <ActionsContainer>
                <Button
                  title="Cancelar"
                  priority="output"
                  action={hideInputForm}
                />

                <Button title="Adicionar" priority="input" type="submit" />
              </ActionsContainer>
            </form>
          )}
        </Card>
      </Container>
    </>
  );
};

export default BankOperations;
