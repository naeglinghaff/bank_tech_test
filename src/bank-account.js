let Transaction = require('./transaction')
let Statement = require('./statement')

class BankAccount {
  constructor(statement = new Statement, transaction = Transaction) {
    this._balance = 0;
    this._statement = statement;
    this._transactionClass = transaction;
  }

  addMoney(amount){
    this._balance += amount;
    let transaction = new this._transactionClass(amount, this._balance, true);
    this._statement.transactions.push(transaction);
    return transaction;
  }

  withdraw(amount){
    if(this._balance === 0) {
      throw ("Error: insufficient funds");
    } else {
      this._balance -= amount;
      let transaction = new this._transactionClass(amount, this._balance, false);
      this._statement.transactions.push(transaction);
      return transaction;
    }
  }

  printStatement(){
    return this._statement.format();
  }
}

module.exports = BankAccount;
