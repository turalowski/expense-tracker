import React ,{useState, useEffect} from "react";
import styles from "./App.module.css";

// Components
import Header from "./components/Header/Header";
import Balance from "./components/Balance/Balance";
import TotalContainer from "./components/TotalContainer/TotalContainer"
import TransactionContainer from "./components/TransactionContainer/TransactionContainer";
import NewTransaction from "./components/NewTransaction/NewTransaction"
function App() {
  const memory = [
    {
      title: "Flower",
      amount: 500
    },
    {
      title: "Computer",
      amount: -400
    }
  ]
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);
  const [transactions, setTransactions] = useState(memory);

  useEffect(() => {

    let newIncome = 0;
    let newExpense = 0;
    let newTotal = 0;
    
    transactions.forEach(transaction => {
      if(transaction.amount > 0) {
        newIncome += parseInt(transaction.amount);
      }
      if(transaction.amount < 0) {
        newExpense += parseInt(transaction.amount)
      }

      newTotal += parseInt(transaction.amount);
      setIncome(newIncome);
      setExpense(newExpense);
      setTotal(newTotal);
      console.log(income,expense,total);
    })
  });

  const addTransaction = transaction => {
    const newTransactions = [...transactions, transaction];
    setTransactions(newTransactions);
  }

  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <Header />
        <Balance balance={total}/>
        <TotalContainer income={income} expense={expense}/>
        <TransactionContainer transactions={transactions} />
        <NewTransaction addTransaction={addTransaction}/>
      </div>
    </div>
  );
}

export default App;
