import { BankStatment } from "../BankStatement/BankStatment";

export interface FilterDatasLocalStorage {
  filter: string;
  datas: Array<BankStatment>;
}
