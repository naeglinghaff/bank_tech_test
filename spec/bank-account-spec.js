describe('Bank Account', () => {
  let BankAccount = require('../src/bank-account.js');
  let Transaction = require('../src/transaction.js')

// initializes new bank account
  beforeEach(() => {
    account = new BankAccount;
    jasmine.clock().install();
    var baseDate = new Date(2020, 2, 12);
    jasmine.clock().mockDate(baseDate);
  })

  it('should initialise with a balance of 0', () => {
    expect(account._balance).toEqual(0);
  })

  it('should create a new transaction when money is added', () => {
    expect(account.addMoney(100)).toBeInstanceOf(Transaction);
  })

  it('should update the balance when money is added', () => {
    account.addMoney(100);
    expect(account._balance).toEqual(100.00);
  })

  afterEach( () => {
    jasmine.clock().uninstall();
  })
})
