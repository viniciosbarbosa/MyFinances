import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BankMovementProps } from "../../models/interfaces/BankMovementProps/BankMovementProps";
import {
  MovimentDelete,
  Movimentation,
  MovimentsContainer,
  MovimentsHeader,
} from "./BankMovimentsStyle";
import {
  faMoneyBillTransfer,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FormatMoney } from "../../utils/util";

const BankMoviments = ({
  bankMovementList,
  setBankStatementItens,
  setDatasLocalStorage,
}: BankMovementProps) => {
  /* */

  const handleDeleteMovement = (idBankMovement: string) => {
    const DatasBankList = bankMovementList.filter(
      (bankMovement) => bankMovement.id !== idBankMovement
    );

    setBankStatementItens(DatasBankList);
    setDatasLocalStorage(DatasBankList);
  };

  return (
    <div>
      <MovimentsHeader>
        <FontAwesomeIcon icon={faMoneyBillTransfer} color="#4ae081" size="2x" />
        <h2>
          {bankMovementList.length > 0
            ? "Movimentações"
            : "Sem movimentações a exibir"}
        </h2>
      </MovimentsHeader>

      {bankMovementList.length > 0 &&
        bankMovementList.map((moviment) => (
          <MovimentsContainer key={moviment.id}>
            <Movimentation>
              <h2>{moviment.name}</h2>
              <h3
                style={{
                  color: moviment.type === "input" ? "#4ae081" : "#e43f4d",
                }}
              >
                {moviment.type === "input" ? "+ " : "- "}
                {FormatMoney(moviment.value)}
              </h3>

              <MovimentDelete
                onClick={() => moviment.id && handleDeleteMovement(moviment.id)}
              >
                <FontAwesomeIcon icon={faTrash} size="2x" color="#e43f4d" />
              </MovimentDelete>
            </Movimentation>
          </MovimentsContainer>
        ))}
    </div>
  );
};

export default BankMoviments;
