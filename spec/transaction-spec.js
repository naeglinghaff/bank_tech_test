describe('Transaction', () => {
  let Transaction;

  beforeEach(() => {
    Transaction = require('../src/transaction.js')
    jasmine.clock().install();
  })

  describe('initialization', () => {
    it('initializes with a timestamp', () => {
      var baseDate = new Date(2020, 2, 12);
      jasmine.clock().mockDate(baseDate);
      transaction = new Transaction;
      expect(transaction._created_at).toEqual("Thu Mar 12 2020");
    })

    it('initializes with a monetary value', () => {
      transaction = new Transaction(25, 25);
      expect(transaction._value).toEqual("25.00");
    })

    it('initializes with the updated bank account balance', () => {
      transaction = new Transaction(25, 25);
      expect(transaction._current_balance).toEqual("25.00");
    })

    it('initializes with a boolean', () => {
      transaction = new Transaction(10, 6, true);
      expect(transaction._credit).toBeInstanceOf(Boolean);
    })
  })

  afterEach( () => {
    jasmine.clock().uninstall();
  })

})
