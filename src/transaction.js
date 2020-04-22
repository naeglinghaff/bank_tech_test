class Transaction {

  constructor(amount, current_balance, credit) {
    this._created_at = new Date().toDateString();
    this._value = (Math.round(amount * 100) / 100).toFixed(2);
    this._current_balance = (Math.round(current_balance * 100) / 100).toFixed(2);
    this._credit = credit;
  }
}

module.exports = Transaction;
