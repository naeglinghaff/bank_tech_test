describe('Bank Account', () => {
  let BankAccount = require('../src/bank-account.js');
  let Transaction = require('../src/transaction.js');

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

    it('parses in a statement object', () => {
      var statement = { transactions: [] };
      var account_2 = new BankAccount(statement);
      expect(account_2._statement).toEqual(statement);
    })

    it('parses in a mocked Transaction class', () => {
      var statement = { transactions: [] };
      var fakeClass = { constructor : function(){ return true; } };
      var account_2 = new BankAccount(statement, fakeClass);
      expect(account_2._transactionClass).toEqual(fakeClass);
    })
  })

  describe('adding money', () => {
    it('calls on Transaction class when money is added or withdrawn', () => {
      var statement = { transactions: [] };
      var fakeClass = spyOn(Transaction, 'constructor');
      var account_2 = new BankAccount(statement, fakeClass);
      account_2.addMoney(100)
      account_2.withdraw(100)
      expect(fakeClass).toHaveBeenCalledTimes(2);
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
