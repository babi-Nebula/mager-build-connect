/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author hp
 */
public class room {
    
    int roomNo;
    String roomType;
     double roomArea;
    
       void setData (int rno, String rtype,double rarea){
           roomNo=rno;
           roomType=rtype;
           roomArea=rarea;
           
       }
       
       void displayData(){
           System.out.println("roomNo="+roomNo);
           System.out.println("roomType="+roomType);
            System.out.println("roomArea="+roomArea);
       }
        public static void main(String arg[]){
            room r=new room();
            r.setData(10,"Single bed",20.0);
                    r.displayData();
            
        }
   }