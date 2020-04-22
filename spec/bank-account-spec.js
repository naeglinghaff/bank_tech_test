describe('Bank Account', () => {
  let BankAccount = require('../src/bank-account.js');
  let Transaction = require('../src/transaction.js');
  let Statement = require('../src/statement.js');

// initializes new bank account
  beforeEach(() => {
    account = new BankAccount;
    jasmine.clock().install();
    var baseDate = new Date(2020, 2, 12);
    jasmine.clock().mockDate(baseDate);
  })

  describe('initilization', () => {
    it('initialises with a balance of 0', () => {
      expect(account._balance).toEqual(0);
    })
  })

  describe('adding money', () => {
    it('creates a new transaction when money is added or withdrawn', () => {
      expect(account.addMoney(100)).toBeInstanceOf(Transaction);
      expect(account.withdraw(100)).toBeInstanceOf(Transaction);
    })

    it('updates the balance when money is added', () => {
      account.addMoney(100);
      expect(account._balance).toEqual(100.00);
    })
  })

  describe('withdrawing money', () => {
    it('updates the balance when money is withdrawn', () => {
      account.addMoney(100);
      account.withdraw(50);
      expect(account._balance).toEqual(50.00);
    })

    it('raises error if there are insufficient funds', () => {
      expect(function(){ account.withdraw(50); }).toThrow("Error: insufficient funds")
    })
  })

  describe('printing statements', () => {
    it('saves a statement object', () => {
      expect(account._statement).toBeInstanceOf(Statement);
    })

    it('delegates to the format method to log the transactions to the console', () => {
      spyOn(account._statement, 'format').and.callThrough();
      account.printStatement()
      expect(account._statement.format).toHaveBeenCalled();
    })
  })

  afterEach( () => {
    jasmine.clock().uninstall();
  })
})
