package app;

import java.util.Scanner;

public class App {

    public static void main(String[] args) throws Exception {

        // Creating and initializing an input reader from keyboard
        Scanner sc = new Scanner(System.in);

        System.out.println("Are you new to Java?\nyes/no");
        String enteredVal = sc.next();
        
        // Do not use: if(enteredVal == "yes"){some logic}
        // This wont work as expected
        if(enteredVal.equals("yes")){
            System.out.println("Hello Welcome to Java!\n");
        }
        else{
            System.out.println("Remember that practice makes perfect so... Practice , Practice, Practice!\n");
        }

        // Closing Scanner to prevent memmory leaks
        sc.close();
    }
}