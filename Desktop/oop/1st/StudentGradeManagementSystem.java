import java.io.*;
import java.util.*;

abstract class Human {
    protected String name;
    protected int id;

    public Human(String name, int id) {
        this.name = name;
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public int getId() {
        return id;
    }
}

class Student extends Human {
    private int mid;
    private int finalExam;
    private int assignment;

    public Student(String name, int id, int mid, int finalExam, int assignment) {
        super(name, id);
        this.mid = mid;
        this.finalExam = finalExam;
        this.assignment = assignment;
    }

    public Student(String name, int id) {
        super(name, id);
        this.mid = 0;
        this.finalExam = 0;
        this.assignment = 0;
    }

    public int getMid() {
        return mid;
    }

    public void setMid(int mid) {
        this.mid = mid;
    }

    public int getFinalExam() {
        return finalExam;
    }

    public void setFinalExam(int finalExam) {
        this.finalExam = finalExam;
    }

    public int getAssignment() {
        return assignment;
    }

    public void setAssignment(int assignment) {
        this.assignment = assignment;
    }

    public int getTotal() {
        return mid + finalExam + assignment;
    }

    public String getGrade() {
        int total = getTotal();
        if (total >= 90) return "A";
        if (total >= 80) return "B";
        if (total >= 70) return "C";
        if (total >= 60) return "D";
        return "F";
    }

    @Override
    public String toString() {
        return id + "-" + name + "-" + mid + "-" + finalExam + "-" + assignment + "-" + getTotal() + "-" + getGrade();
    }
}

class Teacher extends Human {
    private String subject;

    public Teacher(String name, int id, String subject) {
        super(name, id);
        this.subject = subject;
    }

    public String getSubject() {
        return subject;
    }
}

public class StudentGradeManagementSystem {
    private static final String STUDENT_FILE_PATH = System.getProperty("user.home") + "/Desktop/studentManagement.txt";
    private static final String COMPLAIN_FILE_PATH = System.getProperty("user.home") + "/Desktop/complain.txt";
    private static Teacher currentTeacher;
    private static List<Student> students = new ArrayList<>();

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        loadStudents();

        while (true) {
            System.out.println("\nMain Menu:");
            System.out.println("1) Teacher");
            System.out.println("2) Student");
            System.out.println("3) Exit");
            System.out.println("4) About Us");
            System.out.print("Enter choice: ");

            int choice = getIntInput(scanner);
            clearConsole();
            switch (choice) {
                case 1:
                    teacherMenu(scanner);
                    break;
                case 2:
                    studentMenu(scanner);
                    break;
                case 3:
                    saveStudents();
                    System.out.println("Exiting system...");
                    return;
                case 4:
                    aboutUs();
                    break;
                default:
                    System.out.println("Invalid choice! Please try again.");
            }
        }
    }

    private static void aboutUs() {
        System.out.println("\nAbout Us");
        System.out.println("GROUP MEMBERS:........ID");
        System.out.println("1. Aymen Mohammed -1500916");
        System.out.println("2. Furkan Jemil -  1501160");
        System.out.println("3. Fuad Abdellh -  1501158");
        System.out.println("4. Amira Ridwan -  1500878");
        System.out.println("5. Sumeya Abdi -   1501668");
        System.out.println("\nStudent Grade Management System - Developed for academic purposes");
        System.out.println("\nPress enter to continue...");
        new Scanner(System.in).nextLine();
    }

    private static void clearConsole() {
        try {
            if (System.getProperty("os.name").contains("Windows")) {
                new ProcessBuilder("cmd", "/c", "cls").inheritIO().start().waitFor();
            } else {
                System.out.print("\033[H\033[2J");
                System.out.flush();
            }
        } catch (Exception e) {
            System.out.println("Error clearing console: " + e.getMessage());
        }
    }

    private static void teacherMenu(Scanner scanner) {
        while (true) {
            System.out.println("\nTeacher Menu:");
            System.out.println("1) Register");
            System.out.println("2) Login");
            System.out.println("3) Back to Main Menu");
            System.out.print("Enter choice: ");

            int choice = getIntInput(scanner);
            clearConsole();
            switch (choice) {
                case 1:
                    registerTeacher(scanner);
                    break;
                case 2:
                    loginTeacher(scanner);
                    break;
                case 3:
                    return;
                default:
                    System.out.println("Invalid choice! Please try again.");
            }
        }
    }

    private static void registerTeacher(Scanner scanner) {
        System.out.print("\nEnter name: ");
        String name = scanner.nextLine();
        System.out.print("Enter id: ");
        int id = getIntInput(scanner);
        System.out.print("Enter subject: ");
        String subject = scanner.nextLine();

        currentTeacher = new Teacher(name, id, subject);
        System.out.println("\nTeacher registered successfully!");
    }

    private static void loginTeacher(Scanner scanner) {
        System.out.print("\nEnter id: ");
        int id = getIntInput(scanner);

        if (currentTeacher != null && currentTeacher.getId() == id) {
            teacherOperations(scanner);
        } else {
            System.out.println("\nInvalid teacher id!");
        }
    }

    private static void teacherOperations(Scanner scanner) {
        while (true) {
            System.out.println("\nTeacher Operations:");
            System.out.println("1) Add Student Marks");
            System.out.println("2) Update Student Marks");
            System.out.println("3) Delete Student");
            System.out.println("4) Display All Students");
            System.out.println("5) Display Complaints");
            System.out.println("6) Logout");
            System.out.print("Enter choice: ");

            int choice = getIntInput(scanner);
            clearConsole();
            switch (choice) {
                case 1:
                    addStudentMarks(scanner);
                    break;
                case 2:
                    updateStudentMarks(scanner);
                    break;
                case 3:
                    deleteStudentMarks(scanner);
                    break;
                case 4:
                    displayAllStudents(scanner);
                    break;
                case 5:
                    displayComplaints();
                    break;
                case 6:
                    return;
                default:
                    System.out.println("Invalid choice! Please try again.");
            }
        }
    }

    private static void addStudentMarks(Scanner scanner) {
        System.out.print("\nEnter student name: ");
        String name = scanner.nextLine();
        System.out.print("Enter student id: ");
        int id = getIntInput(scanner);
        
        if (findStudentById(id) != null) {
            System.out.println("\nStudent with this ID already exists!");
            return;
        }
        
        System.out.print("Enter mid marks: ");
        int mid = getIntInput(scanner);
        System.out.print("Enter final marks: ");
        int finalExam = getIntInput(scanner);
        System.out.print("Enter assignment marks: ");
        int assignment = getIntInput(scanner);

        Student student = new Student(name, id, mid, finalExam, assignment);
        students.add(student);
        saveStudents();

        System.out.println("\nStudent marks added successfully!");
    }

    private static void updateStudentMarks(Scanner scanner) {
        System.out.print("\nEnter student id: ");
        int id = getIntInput(scanner);
        Student student = findStudentById(id);

        if (student == null) {
            System.out.println("\nStudent not found!");
            return;
        }

        boolean keepUpdating = true;
        while (keepUpdating) {
            System.out.println("\nUpdate Marks for " + student.getName() + ":");
            System.out.println("1) Mid");
            System.out.println("2) Final");
            System.out.println("3) Assignment");
            System.out.println("4) Finish Updating");
            System.out.print("Enter choice: ");
            int choice = getIntInput(scanner);

            switch (choice) {
                case 1:
                    System.out.print("Enter new mid marks: ");
                    student.setMid(getIntInput(scanner));
                    break;
                case 2:
                    System.out.print("Enter new final marks: ");
                    student.setFinalExam(getIntInput(scanner));
                    break;
                case 3:
                    System.out.print("Enter new assignment marks: ");
                    student.setAssignment(getIntInput(scanner));
                    break;
                case 4:
                    keepUpdating = false;
                    break;
                default:
                    System.out.println("Invalid choice! Please try again.");
            }
        }

        saveStudents();
        System.out.println("\nStudent marks updated successfully!");
    }

    private static void deleteStudentMarks(Scanner scanner) {
        System.out.print("\nEnter student id: ");
        int id = getIntInput(scanner);
        Student student = findStudentById(id);

        if (student != null) {
            students.remove(student);
            saveStudents();
            System.out.println("\nStudent deleted successfully!");
        } else {
            System.out.println("\nStudent not found!");
        }
    }

    private static void displayAllStudents(Scanner scanner) {
        System.out.println("\nDisplay Students:");
        System.out.println("1) Alphabetical Order");
        System.out.println("2) Grade (High to Low)");
        System.out.println("3) Default Order");
        System.out.print("Enter choice: ");

        int choice = getIntInput(scanner);
        clearConsole();

        switch (choice) {
            case 1:
                students.sort(Comparator.comparing(Student::getName));
                break;
            case 2:
                students.sort((s1, s2) -> Integer.compare(s2.getTotal(), s1.getTotal()));
                break;
            case 3:
                break;
            default:
                System.out.println("Invalid choice! Displaying in default order.");
        }

        System.out.println("\nID - Name - Mid - Final - Assignment - Total - Grade");
        for (Student student : students) {
            System.out.println(student);
        }
        System.out.println("\nPress enter to continue...");
        scanner.nextLine();
    }

    private static void displayComplaints() {
        System.out.println("\nStudent Complaints:");
        try (Scanner fileScanner = new Scanner(new File(COMPLAIN_FILE_PATH))) {
            while (fileScanner.hasNextLine()) {
                System.out.println(fileScanner.nextLine());
            }
        } catch (FileNotFoundException e) {
            System.out.println("No complaints found!");
        }
        System.out.println("\nPress enter to continue...");
        new Scanner(System.in).nextLine();
    }

    private static void studentMenu(Scanner scanner) {
        while (true) {
            System.out.println("\nStudent Menu:");
            System.out.println("1) Register");
            System.out.println("2) Login");
            System.out.println("3) Back to Main Menu");
            System.out.print("Enter choice: ");

            int choice = getIntInput(scanner);
            clearConsole();
            switch (choice) {
                case 1:
                    registerStudent(scanner);
                    break;
                case 2:
                    loginStudent(scanner);
                    break;
                case 3:
                    return;
                default:
                    System.out.println("Invalid choice! Please try again.");
            }
        }
    }

    private static void registerStudent(Scanner scanner) {
        System.out.print("\nEnter your name: ");
        String name = scanner.nextLine();
        System.out.print("Enter your id: ");
        int id = getIntInput(scanner);

        if (findStudentById(id) != null) {
            System.out.println("\nStudent with this ID already exists!");
            System.out.println("Press enter to continue...");
            scanner.nextLine();
            return;
        }

        Student student = new Student(name, id);
        students.add(student);
        saveStudents();

        System.out.println("\nRegistration successful! Please login to access your account.");
        System.out.println("Press enter to continue...");
        scanner.nextLine();
    }

    private static void loginStudent(Scanner scanner) {
        System.out.print("\nEnter your id: ");
        int id = getIntInput(scanner);

        Student student = findStudentById(id);
        if (student == null) {
            System.out.println("\nStudent doesn't exist! Please register first.");
            System.out.println("Press enter to continue...");
            scanner.nextLine();
            return;
        }

        studentDashboard(scanner, student);
    }

    private static void studentDashboard(Scanner scanner, Student student) {
        while (true) {
            System.out.println("\nWelcome, " + student.getName());
            System.out.println("Student Dashboard:");
            System.out.println("1) View My Grades");
            System.out.println("2) File Complaint");
            System.out.println("3) Change Password");
            System.out.println("4) Logout");
            System.out.print("Enter choice: ");

            int choice = getIntInput(scanner);
            clearConsole();
            switch (choice) {
                case 1:
                    viewStudentGrades(student);
                    break;
                case 2:
                    fileComplaint(scanner, student);
                    break;
                case 3:
                    changePassword(scanner, student);
                    break;
                case 4:
                    return;
                default:
                    System.out.println("Invalid choice! Please try again.");
            }
        }
    }

    private static void viewStudentGrades(Student student) {
        System.out.println("\nYour Grades:");
        System.out.println("ID: " + student.getId());
        System.out.println("Name: " + student.getName());
        System.out.println("Mid Exam: " + student.getMid());
        System.out.println("Final Exam: " + student.getFinalExam());
        System.out.println("Assignment: " + student.getAssignment());
        System.out.println("Total: " + student.getTotal());
        System.out.println("Grade: " + student.getGrade());
        System.out.println("\nPress enter to continue...");
        new Scanner(System.in).nextLine();
    }

    private static void changePassword(Scanner scanner, Student student) {
        System.out.println("\nPassword change feature will be implemented in future versions.");
        System.out.println("Press enter to continue...");
        scanner.nextLine();
    }

    private static void fileComplaint(Scanner scanner, Student student) {
        System.out.print("\nEnter your complaint: ");
        String complaint = scanner.nextLine();

        try (FileWriter writer = new FileWriter(COMPLAIN_FILE_PATH, true)) {
            writer.write("Student ID: " + student.getId() + ", Name: " + student.getName() + ", Complaint: " + complaint + "\n");
            System.out.println("\nComplaint filed successfully!");
        } catch (IOException e) {
            System.out.println("\nError writing to complain file!");
        }
        System.out.println("Press enter to continue...");
        scanner.nextLine();
    }

    private static Student findStudentById(int id) {
        for (Student student : students) {
            if (student.getId() == id) {
                return student;
            }
        }
        return null;
    }

    private static void loadStudents() {
        try (Scanner fileScanner = new Scanner(new File(STUDENT_FILE_PATH))) {
            while (fileScanner.hasNextLine()) {
                String line = fileScanner.nextLine();
                if (line.startsWith("ID-") || line.startsWith("Teacher:")) {
                    continue;
                }
                String[] parts = line.split("-");
                if (parts.length == 7) {
                    int id = Integer.parseInt(parts[0]);
                    String name = parts[1];
                    int mid = Integer.parseInt(parts[2]);
                    int finalExam = Integer.parseInt(parts[3]);
                    int assignment = Integer.parseInt(parts[4]);
                    students.add(new Student(name, id, mid, finalExam, assignment));
                }
            }
        } catch (FileNotFoundException e) {
            System.out.println("Student file not found! Starting with an empty list.");
        }
    }

    private static void saveStudents() {
        try (FileWriter writer = new FileWriter(STUDENT_FILE_PATH)) {
            writer.write("ID-Name-Mid-Final-Assignment-Total-Grade\n");
            if (currentTeacher != null) {
                writer.write("Teacher: " + currentTeacher.getName() + ", Subject: " + currentTeacher.getSubject() + "\n");
            }
            for (Student student : students) {
                writer.write(student + "\n");
            }
        } catch (IOException e) {
            System.out.println("Error writing to student file!");
        }
    }

    private static int getIntInput(Scanner scanner) {
        while (true) {
            try {
                return Integer.parseInt(scanner.nextLine());
            } catch (NumberFormatException e) {
                System.out.print("Invalid input! Please enter a number: ");
            }
        }
    }
}