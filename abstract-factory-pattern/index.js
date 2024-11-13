//CREATIONAL PATTERN


// ABSTRACT FACTORY PATTERN-> It provide an interface for creating families of related or dependent objects without specifying their concrete classes.
//It uses multiple factory methods.


//Difference between both -> Factory method pattern constructs a single object while Abstract factory pattern creates multiple objects.
//Uml diagrams of both with comparison are in folder-> There are two functions in interface of factory in abstract factory but it is one in factory method pattern


// Components of Abstract Factory Pattern
// 1.Abstract Factory:
// Abstract Factory provides a high-level blueprint that defines rules for creating families of related object without specifying their concrete classes.
// It provides a way such that concrete factories follow a common interface, providing consistent way to produce related set of objects.
// 2.Concrete Factories:
// Concrete Factories implement the rules specified by the abstract factory. It contain the logic for creating specific instances of objects within a family.
// Also multiple concrete factories can exist, each produce a distinct family of related objects.
// 3.Abstract Products:
// Abstract Products represents a family of related objects by defining a set of common methods or properties.
// It acts as an abstract or interface type that all concrete products within a family must follow to and provides a unified way for concrete products to be used interchangeably.
// 4.Concrete Products:
// They are the actual instances of objects created by concrete factories.
// They implement the methods declared in the abstract products, ensuring consistency within a family and belong to a specific category or family of related objects.
// 5.Client:Client utilizes the abstract factory to create families of objects without specifying their concrete types and interacts with objects through abstract interfaces provided by abstract products.


//https://www.geeksforgeeks.org/abstract-factory-pattern/