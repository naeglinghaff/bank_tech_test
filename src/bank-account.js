class BankAccount {
  constructor() {
    this._balance = 0;
  }

  addMoney(amount){
    let Transaction = require('./transaction')
    this._balance += amount;
    let transaction = new Transaction(amount, this._balance);
    return transaction;
  }
}

module.exports = BankAccount;
