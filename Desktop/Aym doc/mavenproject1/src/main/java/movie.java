/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author hp
 */
public class movie {
    String title;
    String studio;
    String rating;
    movie(String t, String s, String r){
        title=t;
        studio=s;
        rating=r;
    }
    
    void show(){
     
        System.out.println("title="+title);
        System.out.println("studio="+studio);
        System.out.println("rating="+rating);        
    }
    public static void main(String[] args){
        movie m =new movie("troy","21 century","4.2");//Parametrised constructer
           movie s =new movie("troy","21 century","4.2");//Parametrised constructer
      s.show();// hulet gize mareg kefelegn new enji keza wuchi chigr yelewm
                m.show();
    }
}
