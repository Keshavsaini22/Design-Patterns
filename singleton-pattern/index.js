//Many people think singleton pattern is a code smell that you should avoid. So it is not mostly used



//Singleton pattern is a creational design pattern that ensures that a class has only one instance and provides a global point of access to it.
//global access to it.
// Make one instance globally and make it available to use it and make difficult or impossible to make second instance of class



//Singleton class has private constructor so that no one can create instance of class from outside. So make static methods.


//Image
//Singleton class has static function getInstance that has return type of Singleton i.e class and also of variable of type Singleton i.e class 
// And it is not called like ->
// Singleton s = new Singleton();
// s.getInstance();
// But like->
// Singleton.getInstance()
