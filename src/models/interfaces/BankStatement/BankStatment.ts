export interface BankStatment {
  name: string;
  value: string;
  type: "input" | "output";
  id?: string;
}
