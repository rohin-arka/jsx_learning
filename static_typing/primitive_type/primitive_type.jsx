// class declaration
class _Main{
  // main function which returns nothing
 static function main(args: string[]) : void{
   // string type
   var helloWorld : string;
   helloWorld = 'Hello world';
   log helloWorld;
   var firstOperand = 1;
   var secondOperand : number;
   secondOperand = 2;
   log firstOperand + secondOperand;
   var bool : boolean;
   bool =  true;
   log bool;
 }
}

// // is a way of single line comment in jsx
// _Main class has a class method (static function main) that takes an array of string type
// and returns nothing.
// _Main.main(:string[]):void is the entry point of jsx applications.

// There are mainly three types of primitve type in jsx
  // string, number, boolean and all are immutable.
  // type annotation can be done as keyword for declaring variable var variable name : type;
  // eg: var helloWorld : string;
  // helloWorld = 'hello people';
  // or type annotation can be ommited by directly initializing variable with its type.
  // as var helloworld = 'Good Day';
  // NOTE: unlike dynamic type language once type is defined in program compiling time cannot
  // be changed at execution time example:
  // var helloWorld : string; helloWorld = 1;
  // log is a function which takes an arrgument and prints in console.
  // log is like  a console.log() in javascript
