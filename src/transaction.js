class Transaction {

  constructor(amount, current_balance) {
    this._created_at = new Date();
    this._value = (Math.round(amount * 100) / 100).toFixed(2);
    this._current_balance = (Math.round(current_balance * 100) / 100).toFixed(2);
  }

}

module.exports = Transaction;
