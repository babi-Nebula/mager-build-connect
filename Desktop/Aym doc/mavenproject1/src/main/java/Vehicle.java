import java.time.Year;

// Parent class: Vehicle
class Vehicle {
    protected String make;
    protected String model;
    protected int year;

    // Constructor for Vehicle
    public Vehicle(String make, String model, int year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // Method to display vehicle information
    public void displayVehicleInfo() {
        System.out.println("Make: " + make);
        System.out.println("Model: " + model);
        System.out.println("Year: " + year);
    }
}

// Subclass: Car
class Car extends Vehicle {
    private double mileage;

    // Constructor for Car
    public Car(String make, String model, int year, double mileage) {
        super(make, model, year);
        this.mileage = mileage;
    }

    // Method to display car information
    public void displayCarInfo() {
        displayVehicleInfo();
        System.out.println("Mileage: " + mileage + " km");
    }

    // Method to check if the car is vintage
    public boolean isVintage() {
        int currentYear = Year.now().getValue();
        return (currentYear - year) > 20;
    }

    public static void main(String[] args) {
        Car car1 = new Car("Toyota", "Corolla", 2000, 150000);
        Car car2 = new Car("Honda", "Civic", 2015, 80000);

        System.out.println("Car 1 Info:");
        car1.displayCarInfo();
        System.out.println("Is Vintage? " + car1.isVintage());
        
        System.out.println();
        
        System.out.println("Car 2 Info:");
        car2.displayCarInfo();
        System.out.println("Is Vintage? " + car2.isVintage());
    }
}
