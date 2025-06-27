/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author hp
 */
class Rectangle {
    private double length;
    private double width;

    // Constructor to initialize length and width
    public Rectangle(double length, double width) {
        this.length = length;
        this.width = width;
    }

    // Method to calculate area
    public double calculateArea() {
        return length * width;
    }

    // Method to calculate perimeter
    public double calculatePerimeter() {
        return 2 * (length + width);
    }

    // Method to check if the rectangle is a square
    public boolean isSquare() {
        return length == width;
    }

    public static void main(String[] args) {
        Rectangle rect1 = new Rectangle(10, 5);
        Rectangle rect2 = new Rectangle(7, 7);

        System.out.println("Rectangle 1: ");
        System.out.println("Area: " + rect1.calculateArea());
        System.out.println("Perimeter: " + rect1.calculatePerimeter());
        System.out.println("Is Square? " + rect1.isSquare());

        System.out.println();

        System.out.println("Rectangle 2: ");
        System.out.println("Area: " + rect2.calculateArea());
        System.out.println("Perimeter: " + rect2.calculatePerimeter());
        System.out.println("Is Square? " + rect2.isSquare());
    }
}
