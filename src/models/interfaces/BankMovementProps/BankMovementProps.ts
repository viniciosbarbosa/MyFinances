import { BankStatment } from "../BankStatement/BankStatment";

export interface BankMovementProps {
  bankMovementList: Array<BankStatment>;
  setBankStatementItens: React.Dispatch<React.SetStateAction<BankStatment[]>>;
  setDatasLocalStorage: (newData: any) => void;
}
