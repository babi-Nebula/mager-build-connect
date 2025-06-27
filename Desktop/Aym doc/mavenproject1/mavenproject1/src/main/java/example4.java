/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author hp
 */
import java.util.Scanner;
public class example4 {
    public static void main(String arg[]){
        double mark;
        Scanner sc = new Scanner(System.in);
        System.out.println("enter your mark:");
        mark=sc.nextDouble();
        while(mark<=100&&mark>=0){
            if(mark>=90)
                System.out.println("A+");
        
        else if(mark>=85)
                 System.out.println("A");
                
        else if(mark>=80)
             System.out.println("A-");
            
         else if(mark>=75)
             System.out.println("B+");
            else if(mark>=70)
             System.out.println("B");
            else if(mark>=65)
             System.out.println("B-");
            else if(mark>=60)
             System.out.println("c+");
            else if(mark>=55)
             System.out.println("c");
            else if(mark>=50)
             System.out.println("c-");
            else if(mark>=45)
             System.out.println("D");
            else
                
             System.out.println("F");
        }
    }
}

    
    
    

