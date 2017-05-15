
class _Main{
  static function main(args: string[]): void{
    var date = new Date(); // Date object
    log date;
    var numberArray = new Array.<number>(); // array objects can hold array of number type
    var stringArray = new Array.<string>(); // array of string type
    var hash = new Map.<string>; // paranthesis can also be omitted
    var array  = ['a', 'b'] : Array.<string>; // declaring array with predefined element tring type
    var arrayOne = [1, 2, 3];
    var hashOne = { name: 'jsx' } : Map.<string>;
    var hashTwo = { name: 'a', age: '12' };
    log numberArray;
    log stringArray;
    log hash;
    log array;
    log arrayOne;
    log hashOne;
    log hashTwo;

  }
}
// Objects are instances of classes.
// Object classes Array, Date, Map
// keyword new in front of class name are used to declare object.
