export const addTransaction = (dispatch, payload) => {
  return new Promise((resolve, reject) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload
    });
    resolve();
  });
};
export const deleteTransaction = (dispatch, payload) => {
  return new Promise((resolve, reject) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload
    });
    resolve();
  });
};

export const update = dispatch =>
  dispatch({
    type: "UPDATE"
  });
