function speaker() {
  var sentence = 'Bird is the word.';

  console.log(sentence)
}

speaker()



var volume = 10; //declares a global variable called volume and sets it to 10

function returnEleven() {
  var volume = 11;  //declares a local variable called volume and sets it to 11
  return volume;
}

returnEleven(); // returns 11
volume; // the global variable is still 10

function goToTwelve(){
  volume = 12;  //changes the global variable to 12
  return volume;
}

goToTwelve(); // returns 12
volume; // the global variable volume has been changed to 12


function sayHello() {
  var greeting = "hola";
  greeting = "hello";
  return greeting;
}

sayHello()
// Returns "hello",
// This demonstrates that the variable greeting is now pointing to the string "hello" instead of "hola"

// greeting
// ReferenceError: greeting is not defined
// This demonstrates that the variable greeting is still local instead of global


function preserveDecimal(n) {
  if(n === 'undefined' || n === String) {
    return NaN
  }
  return parseFloat(n)
}
preserveDecimal("nohlhacsj")
