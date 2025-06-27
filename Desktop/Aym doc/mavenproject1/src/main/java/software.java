/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author hp
 */
public class software {
    int a;
    int b;
    int c;
    void product(){
        System.out.println("product = "+(a*b*c));
    }
    public static void main(String arg[])
    {
        software s=new software();
        s.a=10;
        s.b=6;
        s.c=5;
        s.product();
    }
}
