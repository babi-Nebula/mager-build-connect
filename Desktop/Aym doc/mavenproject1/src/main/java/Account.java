/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author hp
 */
class Account {
    private double balance;

    // Constructor to initialize the balance
    public Account(double initialBalance) {
        if (initialBalance > 0.0) {
            balance = initialBalance;
        } else {
            balance = 0.0;
        }
    }

    // Method to withdraw money from the account
    public void debit(double amount) {
        if (amount > balance) {
            System.out.println("Debit amount exceeded account balance.");
        } else {
            balance -= amount;
            System.out.println("Successfully debited: " + amount);
        }
    }
 
    // Method to display the current balance
    public double getBalance() {
        return balance;
    }

    public static void main(String[] args) {
        Account myAccount = new Account(500.0); // Initializing the account with $500
        System.out.println("Initial balance: " + myAccount.getBalance());

        myAccount.debit(200.0); // Valid transaction
        System.out.println("Balance after debit: " + myAccount.getBalance());

        myAccount.debit(400.0); // Invalid transaction (exceeds balance)
        System.out.println("Balance after attempted overdraft: " + myAccount.getBalance());
    }
}
