class Transaction {
  constructor(amount) {
    this._created_at = new Date();
    this._value = (Math.round(amount * 100) / 100).toFixed(2);
  }

}

module.exports = Transaction;
