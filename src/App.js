import React  from "react";
import styles from "./App.module.css";

// Components
import Header from "./components/Header/Header";
import Balance from "./components/Balance/Balance";
import TotalContainer from "./components/TotalContainer/TotalContainer";
import TransactionContainer from "./components/TransactionContainer/TransactionContainer";
import NewTransaction from "./components/NewTransaction/NewTransaction";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <Header />
        <Balance />
        <TotalContainer />
        <TransactionContainer />
        <NewTransaction />
      </div>
    </div>
  );
}

export default App;
