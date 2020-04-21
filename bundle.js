(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var Transaction = require('./src/transaction.js');
var BankAccount = require('./src/bank-account.js');

"use strict";

let account = new BankAccount();
account.addMoney(100);
account.withdraw(50);
account.printStatement();

module.exports = {
  Transaction : Transaction,
  BankAccount : BankAccount
};

},{"./src/bank-account.js":2,"./src/transaction.js":3}],2:[function(require,module,exports){
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

},{"./transaction":3}],3:[function(require,module,exports){
class Transaction {

  constructor(amount, current_balance) {
    this._created_at = new Date();
    this._value = (Math.round(amount * 100) / 100).toFixed(2);
    this._current_balance = (Math.round(current_balance * 100) / 100).toFixed(2);
  }
}

module.exports = Transaction;

},{}]},{},[1]);
