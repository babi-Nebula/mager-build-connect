/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author hp
 */
class Employee {
    private String firstName;
    private String lastName;
    private double monthlySalary;

    // Constructor
    public Employee(String firstName, String lastName, double monthlySalary) {
        this.firstName = firstName;
        this.lastName = lastName;
        setMonthlySalary(monthlySalary);
    }

    // Setters
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setMonthlySalary(double monthlySalary) {
        if (monthlySalary > 0.0) {
            this.monthlySalary = monthlySalary;
        } else {
            this.monthlySalary = 0.0;
        }
    }

    // Getters
    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public double getMonthlySalary() {
        return monthlySalary;
    }

    public double getYearlySalary() {
        return monthlySalary * 12;
    }

    // Method to give a 10% raise
    public void giveRaise() {
        monthlySalary *= 1.10;
    }

    public static void main(String[] args) {
        // Creating Employee objects
        Employee emp1 = new Employee("John", "Doe", 3000.0);
        Employee emp2 = new Employee("Jane", "Smith", 4000.0);

        // Display initial yearly salaries
        System.out.println(emp1.getFirstName() + " " + emp1.getLastName() + " Yearly Salary: " + emp1.getYearlySalary());
        System.out.println(emp2.getFirstName() + " " + emp2.getLastName() + " Yearly Salary: " + emp2.getYearlySalary());

        // Give 10% raise
        emp1.giveRaise();
        emp2.giveRaise();

        // Display yearly salaries after raise
        System.out.println("After 10% raise:");
        System.out.println(emp1.getFirstName() + " " + emp1.getLastName() + " Yearly Salary: " + emp1.getYearlySalary());
        System.out.println(emp2.getFirstName() + " " + emp2.getLastName() + " Yearly Salary: " + emp2.getYearlySalary());
    }
}
