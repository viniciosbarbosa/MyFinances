import { useState } from "react";
import { BankOperationsProps } from "../../models/interfaces/BankOperationsProps/BankOperationsProps";
import { Card, CardHeader, Container } from "./BankOperationsSytle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollar } from "@fortawesome/free-solid-svg-icons";
import { faPercent } from "@fortawesome/free-solid-svg-icons/faPercent";
import Button from "../shared/Button/Button";

const BankOperations = ({
  currentTypeOperation,
  currentValueOperation,
  emitNewStament,
  title,
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

  console.log(currentTypeOperation);
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
            {currentValueOperation > 0 ? String(currentValueOperation) : "R$ 0"}
          </h3>

          {!renderInputForm && (
            <Button
              action={handleRenderInput}
              priority={currentTypeOperation}
              title={title === "Saldo" ? "Entrada" : "Saida"}
            />
          )}
        </Card>
      </Container>
    </>
  );
};

export default BankOperations;
