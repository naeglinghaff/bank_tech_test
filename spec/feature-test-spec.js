describe('Bank Account', () => {
  let BankAccount = require('../src/bank-account');

  it('should not throw any errors for user input', () => {
    let account = new BankAccount;
    expect( function() { account.addMoney(10); }).not.toThrow();
    expect( function() { account.withdraw(15); }).not.toThrow();
    expect( function() { account.printStatement(); }).not.toThrow();
  })
})
