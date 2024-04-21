import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { BankStatment } from "./models/interfaces/BankStatement/BankStatment";
import FinancialControl from "./components/FinancialControl/FinancialControl";
import BankMoviments from "./components/BankMoviments/BankMoviments";
import { FilterDatasLocalStorage } from "./models/interfaces/FilterDatasLocalStorage/FilterDatasLocalStorage";

function App() {
  const [currentBalacesBank, setCurrentBalacesBank] = useState(0);
  const [currentExpensesBank, setCurrentExpensesBank] = useState(0);
  const [bankStatementItens, setBankStatementItens] = useState<
    Array<BankStatment>
  >([]);

  const setDatasLocalStorage = (
    newDataToLocalStorage?: Array<BankStatment>
  ) => {
    if (newDataToLocalStorage) {
      const datasOperationsBank = JSON.stringify(newDataToLocalStorage);

      localStorage.setItem("datasBank", datasOperationsBank);
    }
  };

  useEffect(() => {
    const datasLocalStorage = localStorage.getItem("datasBank");

    const getDatas = () => {
      if (datasLocalStorage !== null && datasLocalStorage !== undefined) {
        const dataJsonLocalStorage = JSON.parse(datasLocalStorage);
        filterDatasLocalStorage({
          filter: "input",
          datas: dataJsonLocalStorage,
        });
        filterDatasLocalStorage({
          filter: "output",
          datas: dataJsonLocalStorage,
        });
        setBankStatementItens(dataJsonLocalStorage);
      } else {
        return;
      }
    };

    const filterDatasLocalStorage = ({
      filter,
      datas,
    }: FilterDatasLocalStorage) => {
      const dataOperationView = (paramOperation: string) => {
        const dataBalanceBank: BankStatment[] = datas.filter(
          (dataBalance) => dataBalance.type === paramOperation
        );

        const totalValueBalanceBank = dataBalanceBank.reduce(
          (total, data) => total + parseFloat(data.value),
          0
        );

        return totalValueBalanceBank;
      };

      if (filter === "input") {
        const balanceBank = dataOperationView("input");
        const expenseBank = dataOperationView("output");

        setCurrentBalacesBank(balanceBank - expenseBank);
      } else if (filter === "output") {
        const expenseBank = dataOperationView("output");
        setCurrentExpensesBank(expenseBank);
      }
    };

    getDatas();
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

        setDatasLocalStorage(bankStatmentsArray);
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

      <BankMoviments
        bankMovementList={bankStatementItens}
        setBankStatementItens={setBankStatementItens}
        setDatasLocalStorage={setDatasLocalStorage}
      />
    </>
  );
}

export default App;
