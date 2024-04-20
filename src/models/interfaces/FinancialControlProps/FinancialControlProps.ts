import { BankStatment } from "./../BankStatement/BankStatment";
export interface FinancialControlProps {
  setNewBankStatement: (bankStament: BankStatment) => void;
  balanceBank: number;
  expensesBank: number;
}
