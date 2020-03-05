const initialState = {
    income: 0,
    expense: 0,
    total: 0,
    transactions: []
  };

const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TRANSACTION": {
        const newTransactions = [...state.transactions, action.payload];
        return { ...state, transactions: newTransactions };
      }
      case "DELETE_TRANSACTION": {
        const newTransactions = state.transactions.filter(
          transaction => transaction.id !== action.payload
        );
  
        return { ...state, transactions: newTransactions };
      }
  
      case "UPDATE": {
        console.log('updated');
        let newIncome = 0;
        let newExpense = 0;
        let newTotal = 0;
  
        state.transactions.forEach(transaction => {
          if (transaction.amount > 0) {
            newIncome += parseInt(transaction.amount);
          }
          if (transaction.amount < 0) {
            newExpense += parseInt(transaction.amount);
          }
          newTotal += parseInt(transaction.amount);
        });
        return {
          ...state,
          income: newIncome,
          expense: newExpense,
          total: newTotal
        };
      }
      default:
        return state;
    }
  };

  export default reducer;