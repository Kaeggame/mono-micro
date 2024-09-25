namespace cSharpVersion
{
    using System;
    using Shapes;

    class Program
    {
        static void Main(string[] args)
        {
            // Création de différentes formes via la factory
            IShape circle = ShapeFactory.CreateShape("circle", 5);
            IShape square = ShapeFactory.CreateShape("square", 4);
            IShape rectangle = ShapeFactory.CreateShape("rectangle", 6, 3);


            circle.Draw(); 
            Console.WriteLine($"Circle area: {circle.Area()}"); 

            square.Draw();
            Console.WriteLine($"Square area: {square.Area()}");

            rectangle.Draw();
            Console.WriteLine($"Rectangle area: {rectangle.Area()}");



            Console.WriteLine("Let's try to create a triangle...");
            try
            {
                IShape triangle = ShapeFactory.CreateShape("triangle", 3, 4, 5);
            }
            catch (ArgumentException e)
            {
                Console.WriteLine(e.Message);
            }

            /*
            Results :
            Drew a circle with radius: 5
            Circle area: 78,53981633974483
            Drew a square with side length: 4
            Square area: 16
            Drew a rectangle with width: 6 and height: 3
            Rectangle area: 18
            Let's try to create a triangle...
            Shape type not recognized
            */
        }
    }
}