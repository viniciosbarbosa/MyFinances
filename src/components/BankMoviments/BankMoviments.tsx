import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BankMovementProps } from "../../models/interfaces/BankMovementProps/BankMovementProps";
import {
  MovimentDelete,
  MovimentFilter,
  Movimentation,
  MovimentsContainer,
  MovimentsHeader,
} from "./BankMovimentsStyle";
import {
  faHandHoldingDollar,
  faMoneyBillTransfer,
  faReceipt,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FormatMoney } from "../../utils/util";
import { useEffect, useState } from "react";
import { BankStatment } from "../../models/interfaces/BankStatement/BankStatment";

const BankMoviments = ({
  bankMovementList,
  setBankStatementItens,
  setDatasLocalStorage,
}: BankMovementProps) => {
  /* */

  const [dataFilter, setDatasFilter] = useState<BankStatment[]>([]);

  useEffect(() => {
    setDatasFilter(bankMovementList);
  }, [bankMovementList]);

  const handleDeleteMovement = (idBankMovement: string) => {
    const DatasBankList = bankMovementList.filter(
      (bankMovement) => bankMovement.id !== idBankMovement
    );

    setBankStatementItens(DatasBankList);
    setDatasLocalStorage(DatasBankList);
  };

  const filterBalace = () => {
    const allBalance = bankMovementList.filter((bankBalance) => {
      return bankBalance.type === "input";
    });
    setDatasFilter(allBalance);
  };

  const filterExpense = () => {
    const allBalance = bankMovementList.filter((bankBalance) => {
      return bankBalance.type === "output";
    });
    setDatasFilter(allBalance);
  };

  const filterAllDatas = () => {
    const allBalance = bankMovementList.filter((bankBalance) => {
      return bankBalance.type;
    });

    console.log(allBalance);

    setDatasFilter(allBalance);
  };

  return (
    <div>
      <MovimentsHeader>
        <h2>
          {bankMovementList.length > 0
            ? "Movimentações"
            : "Sem movimentações a exibir"}
        </h2>

        <MovimentFilter onClick={filterAllDatas}>
          <FontAwesomeIcon
            icon={faMoneyBillTransfer}
            color="#f2e60e"
            size="2x"
          />
        </MovimentFilter>

        <MovimentFilter onClick={filterBalace}>
          <FontAwesomeIcon
            icon={faHandHoldingDollar}
            size="2x"
            color="#5ce081"
          />
        </MovimentFilter>

        <MovimentFilter onClick={filterExpense}>
          <FontAwesomeIcon icon={faReceipt} size="2x" color="#e43f4e" />
        </MovimentFilter>
      </MovimentsHeader>

      {dataFilter.length > 0 &&
        dataFilter.map((moviment) => (
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
