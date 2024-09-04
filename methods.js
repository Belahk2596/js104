let account = {
    balance: 100,
    deposit(amount) {
        account.balance += amount;
        console.log(`Deposited $${amount} Account balance is now $${account.balance}.`)
    },
    withdraw(amount) {
        account.balance -= amount;
        console.log(`Withdrawn $${amount} Account balance is now $${account.balance}.`)

    }
};
console.log(account.balance);
account.deposit(100);
console.log(account.balance);
account.withdraw(75);
console.log(account.balance);