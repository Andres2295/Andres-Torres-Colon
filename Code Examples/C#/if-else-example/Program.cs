using System;

namespace else_if_example
{
    class Program
    {
        static void Main(string[] args)
        {
            
            Console.WriteLine("Are you new to C#?\nyes/no");
            string enteredVal = Console.ReadLine().ToString();

            if(enteredVal == "yes"){
                Console.WriteLine("Hello Welcome to C#!\n");
            }
            else{
                Console.WriteLine("Remember that practice makes perfect so... Practice , Practice, Practice!\n");
            }

            Console.ReadLine();
        }
    }
}
