import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { BankStatment } from "./models/interfaces/BankStatement/BankStatment";
import FinancialControl from "./components/FinancialControl/FinancialControl";
import BankMoviments from "./components/BankMoviments/BankMoviments";
import { json } from "react-router-dom";

function App() {
  const [currentBalacesBank, setCurrentBalacesBank] = useState(0);
  const [currentExpensesBank, setCurrentExpensesBank] = useState(0);
  const [bankStatementItens, setBankStatementItens] = useState<
    Array<BankStatment>
  >([]);

  const setDatasLocalStorage = () => {
    const datasOperationsBank = JSON.stringify(bankStatementItens);
    console.log(datasOperationsBank);
    localStorage.setItem("datasBank", datasOperationsBank);
  };

  useEffect(() => {
    const datasLocalStorage = localStorage.getItem("datasBank");
    if (datasLocalStorage !== null) {
      const dataJsonLocalStorage = JSON.parse(datasLocalStorage);
      setBankStatementItens(dataJsonLocalStorage);
    } else {
      return;
    }
  }, []);

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

        setDatasLocalStorage();
        return bankStatmentsArray;
      });

      if (bankStatment.type == "input") {
        setCurrentBalacesBank(
          (prevBalances) => prevBalances + Number(bankStatment.value)
        );
      }

      if (bankStatment.type == "output") {
        setCurrentExpensesBank(
          (prevExpenses) => prevExpenses + Number(bankStatment.value)
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

      <BankMoviments bankMovementList={bankStatementItens} />
    </>
  );
}

export default App;
