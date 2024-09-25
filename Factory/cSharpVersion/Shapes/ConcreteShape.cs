using System;

namespace cSharpVersion.Shapes{
    public class Circle : IShape
    {
        public double Radius { get; }

        public Circle(double radius)
        {
            Radius = radius;
        }

        public double Area()
        {
            return Math.PI * Radius * Radius;
        }

        public void Draw()
        {
            Console.WriteLine($"Drew a circle with radius: {Radius}");
        }
    }

    public class Square : IShape
    {
        public double SideLength { get; }

        public Square(double sideLength)
        {
            SideLength = sideLength;
        }

        public double Area()
        {
            return SideLength * SideLength;
        }

        public void Draw()
        {
            Console.WriteLine($"Drew a square with side length: {SideLength}");
        }
    }

    public class Rectangle : IShape
    {
        public double Width { get; }
        public double Height { get; }

        public Rectangle(double width, double height)
        {
            Width = width;
            Height = height;
        }

        public double Area()
        {
            return Width * Height;
        }

        public void Draw()
        {
            Console.WriteLine($"Drew a rectangle with width: {Width} and height: {Height}");
        }
    }
}