//CREATIONAL PATTERN

// In book they talk about 3 part regarding factor pattern
// 1. Simple factory- They say it is not a pattern
// 2. Factory method
// 3. Abstract factory


//WHY NEED IT->
// It say that when you are trying to instantiate(create an object of a class) then lets encapsulate that instantiation
// so that we can make it uniform across all places so that you can use factory whenever
// you want to instantiate and factory is responsible for instantiating appropriately.
// Basically create a wrapper around a keyword new and it is little bit silly but is useful in many cases where instantiation is complex.


//Factory is responsible for the business logic of creation of something of a particular
// shared type.


//EXAMPLE-> Im creating a zoo. So there will be animals and i want to create animals. 2 cases
// 1. create random animals where there is logic of choosing animals randomly
// 2. create balanced animals in which we will have a state or having balanced animals
// So create 2 factory that will have  the logic of creating animals but different logics for different cases


//DEFINITION FROM BOOK->
// Factory pattern is a creational design pattern that provides an interface for creating objects but lets subclasses decide which class to instantiate.
// Factory pattern lets a class defer instantiation to subclasses. It supports OPEN/CLOSED principle.


//UML DIAGRAM IN BOOK->   ALSO THESE ARE COMPONENTS OF FACTORY PATTERN
// Product is animal, creator is  animal factory, Concrete product is  dog, cat,duck etc, Concrete creator is  Random animal factory, Balanced animal factory


//In simple factory there is no polymorphism concept implemented. There is only one factory which don't have any super class or parent class or interface.


//Example of game with asteroid hitting a man and there are different level and asteroids changes according to level and so on. We can make different factories for asteroids passing levels and according to levels asteroids changes and difficulty.


//https://medium.com/@eshikashah2001/exploring-the-factory-method-design-pattern-4d270b6ff935
//https://www.geeksforgeeks.org/factory-method-for-designing-pattern/