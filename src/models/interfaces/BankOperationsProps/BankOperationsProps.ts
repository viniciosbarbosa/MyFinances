import { BankStatment } from "../BankStatement/BankStatment";

export interface BankOperationsProps {
  emitNewStament: (bankStatement: BankStatment) => void;
  currentValueOperation: number;
  currentTypeOperation: string;
  title: string;
  balanceValue?: number;
}
