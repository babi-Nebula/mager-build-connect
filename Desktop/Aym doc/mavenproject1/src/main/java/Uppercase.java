
import java.util.Scanner;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author hp
 */
public class Uppercase {
     public static void main(String arg[]){
         Scanner sc =new Scanner(System.in);
         System.out.println("Enter te number of character;");
         int num =sc.nextInt();
         sc.nextLine();
         System.out.println("Enter:" + num+ " character;");
         String input =sc.nextLine();
         if(input .length()== num){
             String uppercase =input.toUpperCase();
             
              System.out.println("Uppercase:" + uppercase);
         }else{
             System.out.println("Error: Enter" + num +"character");
         }
         
     }
}
