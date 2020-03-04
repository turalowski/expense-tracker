var validator = require('validator');
var isEmpty = require("./is-empty")
const validateTransaction = (transaction) => {
    const {title, amount} = transaction;
    const errors = {};
    if(isEmpty(title)) {
        errors.title = "Title is empty";
    }

    else if(!validator.isLength(title, {min: 3, max: 15})) {
        errors.title = "Title need to be between 3 and 15 characters"
    }

    if(amount === 0) {
        errors.amount = "Amount is empty";
    }

    else if(!validator.isInt(amount)) {
        errors.amount = "Amount need to be integer"
    }

    return ({
        errors,
        isValid: isEmpty(errors)
    })
}

export default validateTransaction;