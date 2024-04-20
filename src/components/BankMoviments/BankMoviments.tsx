import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BankMovementProps } from "../../models/interfaces/BankMovementProps/BankMovementProps";
import {
  BalanceBtn,
  ExpenseBtn,
  Movimentation,
  MovimentsContainer,
  MovimentsHeader,
} from "./BankMovimentsStyle";
import { faMoneyBillTransfer } from "@fortawesome/free-solid-svg-icons";
import { FormatMoney } from "../../utils/util";

const BankMoviments = ({ bankMovementList }: BankMovementProps) => {
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
                className={
                  moviment.type === "input"
                    ? BalanceBtn.styledComponentId
                    : ExpenseBtn.styledComponentId
                }
              >
                {moviment.type === "input" ? "+ " : "- "}
                {FormatMoney(moviment.value)}
              </h3>
            </Movimentation>
          </MovimentsContainer>
        ))}
    </div>
  );
};

export default BankMoviments;
