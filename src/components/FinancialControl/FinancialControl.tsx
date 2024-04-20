import { FinancialControlProps } from "../../models/interfaces/FinancialControlProps/FinancialControlProps";
import FinanceContainer from "./FinancialControlStyle";
import { BankStatment } from "../../models/interfaces/BankStatement/BankStatment";
import BankOperations from "../BankOperations/BankOperations";

const FinancialControl = ({
  setNewBankStatement,
  balanceBank,
  expensesBank,
}: FinancialControlProps) => {
  const receiveNewBankStatement = (bankStatement: BankStatment) => {
    bankStatement && setNewBankStatement(bankStatement);
  };

  return (
    <FinanceContainer>
      <BankOperations
        title="Saldo"
        emitNewStament={receiveNewBankStatement}
        currentTypeOperation="input"
        currentValueOperation={balanceBank}
      />

      <BankOperations
        title="Despesas"
        emitNewStament={receiveNewBankStatement}
        currentTypeOperation="output"
        currentValueOperation={expensesBank}
      />
    </FinanceContainer>
  );
};

export default FinancialControl;
