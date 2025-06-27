/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author hp
 */
class Book {
    private String title;
    private String author;
    private double price;

    // Constructor to initialize all attributes
    public Book(String title, String author, double price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }

    // Getters
    public String getTitle() {
        return title;
    }

    public String getAuthor() {
        return author;
    }

    public double getPrice() {
        return price;
    }

    // Setters
    public void setTitle(String title) {
        this.title = title;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    // Method to display book details
    public void displayDetails() {
        System.out.println("Title: " + title);
        System.out.println("Author: " + author);
        System.out.println("Price: $" + price);
    }

    // Method to check if the book is expensive
    public boolean isExpensive() {
        return price > 20.0;
    }

    public static void main(String[] args) {
        Book book1 = new Book("Java Programming", "James Gosling", 25.99);
        Book book2 = new Book("Python Basics", "Guido van Rossum", 18.50);

        book1.displayDetails();
        System.out.println("Is the book expensive? " + book1.isExpensive());
        
        System.out.println();

        book2.displayDetails();
        System.out.println("Is the book expensive? " + book2.isExpensive());
    }
}
