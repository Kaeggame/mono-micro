using System;

namespace  cSharpVersion.Shapes{
    public static class ShapeFactory
    {
        public static IShape CreateShape(string shapeType, params double[] parameters)
        {
            switch (shapeType.ToLower())
            {
                case "circle":
                    return new Circle(parameters[0]);
                case "square":
                    return new Square(parameters[0]);
                case "rectangle":
                    return new Rectangle(parameters[0], parameters[1]);
                default:
                    throw new ArgumentException("Shape type not recognized");
            }
        }
    }
}