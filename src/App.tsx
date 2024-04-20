import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { BankStatment } from "./models/interfaces/BankStatement/BankStatment";
import FinancialControl from "./components/FinancialControl/FinancialControl";

function App() {
  const [currentBalacesBank, setCurrentBalacesBank] = useState(0);
  const [currentExpensesBank, setCurrentExpensesBank] = useState(0);
  const [bankStatementItens, setBankStatementItens] = useState<
    Array<BankStatment>
  >([]);

  const setNewBankStament = (bankStatment: BankStatment) => {
    if (bankStatment) {
      setBankStatementItens((prevBankStatement) => {
        const bankStatmentsArray = [...prevBankStatement];

        bankStatmentsArray.unshift({
          name: bankStatment.name,
          value: bankStatment.value,
          type: bankStatment.type,
          id: Math.random().toString(),
        });

        return bankStatmentsArray;
      });

      if (bankStatment.type == "input") {
        setCurrentBalacesBank(
          (prevBalances) => prevBalances + Number(bankStatment.value)
        );
      }

      if (bankStatment.type == "output") {
        setCurrentExpensesBank(
          (prevExpenses) => prevExpenses - Number(bankStatment.value)
        );

        currentBalacesBank > 0 &&
          setCurrentBalacesBank(
            (prevBalance) => prevBalance - Number(bankStatment.value)
          );
      }
    }
  };

  return (
    <>
      <Header />
      <FinancialControl
        setNewBankStatement={setNewBankStament}
        balanceBank={currentBalacesBank}
        expensesBank={currentExpensesBank}
      />
    </>
  );
}

export default App;
