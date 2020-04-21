let Transaction = require('./transaction')

class BankAccount {
  constructor() {
    this._balance = 0;
  }

  addMoney(amount){
    this._balance += amount;
    return new Transaction(amount, this._balance);
  }

  withdraw(amount){
    if(this._balance === 0) {
      throw ("Error: insufficient funds");
    } else {
    this._balance -= amount;
     return new Transaction(amount, this._balance);
    }
  }
}

module.exports = BankAccount;
