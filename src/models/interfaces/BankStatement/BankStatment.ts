export interface BankStatment {
  name: string;
  value: string;
  type: "input" | "output" | string;
  id?: string;
  newDataToLocalStorage?: string;
}
