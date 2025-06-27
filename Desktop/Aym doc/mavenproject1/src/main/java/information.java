/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author hp
 */
public class information {
    
        String name;
        int idno;
        
        void display()
        {
        System.out.println("Name="+name);
                System.out.println("idno="+idno);
    }
       public static void main(String arg[]){
           information i=new information();
           i.name="alex";
           i.idno=45456;
           i.display();
           
       }
    
}
