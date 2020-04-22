let Transaction = require('./transaction')
let Statement = require('./statement')

class BankAccount {
  constructor() {
    this._balance = 0;
    this._statement = new Statement;
  }

  addMoney(amount){
    this._balance += amount;
    let transaction = new Transaction(amount, this._balance, true);
    this._statement.transactions.push(transaction);
    return transaction;
  }

  withdraw(amount){
    if(this._balance === 0) {
      throw ("Error: insufficient funds");
    } else {
      this._balance -= amount;
      let transaction = new Transaction(amount, this._balance, false);
      this._statement.transactions.push(transaction);
      return transaction;
    }
  }

  printStatement(){
    return this._statement.format();
  }
}

module.exports = BankAccount;
