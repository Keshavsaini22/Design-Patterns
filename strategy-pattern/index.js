//Behavioral Design Pattern
// A strategy pattern is a behavioral design pattern that allows the behavior of an object to be selected at runtime.



//BOOK DEFINITION->
// Having family or set of algorithms that I want to encapsulate and make them interchangeable.
// Strategy lets the algorithm vary independently from client that use it.
// If I change the content of algo then I don't want to change the client of algo at a  same time.
// Less inheritance implementation.



// EXAMPLE- Duck has 3 behavior fly, display, quack. Many types of ducks (WILD AND CITY) fly differently and display differently and quack differently.
// So every type of duck has its own behavior which is encapsulated in a strategy.
// IQuarkBehavior, IFlyBehavior, IDisplayBehavior ARE STRATEGIES. And their implementations(SimpleQuack, SimpleFly, SimpleDisplay,NoQuack etc etc) are concrete strategies or algorithms.



//https://www.geeksforgeeks.org/strategy-pattern-set-1/