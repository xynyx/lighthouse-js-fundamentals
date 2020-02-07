/*
 * Programming Quiz: Bank Accounts 1 (7-3)
 */

var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    printAccountSummary: function() {   
        return "Welcome!\nYour balance is currently $" + 
        // since you're accessing the property of an object, you can't just say "balance", you have to specify the object first (savingsAccount.balance)
        // object PROPERTY = key:value pair
        savingsAccount.balance + " and your interest rate is " + savingsAccount.interestRatePercent + "%.";
    }
};

console.log(savingsAccount.printAccountSummary());



/* add a printAccountSummary() method that returns the following account message:

Welcome!
Your balance is currently $1000 and your interest rate is 1%. */

/* All the following are valid ways to access properties and call methods from the savingsAccount object

savingsAccount.balance;
savingsAccount["balance"];
savingsAccount.withdraw(50); */
