//Looping a triangle.

for (var number = "#"; number.length < 8; number +="#"){
  console.log(number);
}

//Fizzbuzz soln.

// for loop 1 - 100

  for (i=1; i<=100; i++) {

  // if the number is divisible by 3, write "Fizz"
  if ( i % 3 === 0 ) {
      if (i % 5 === 0){
          console.log("FizzBuzz");
      }
      else{
    console.log("Fizz");
      }
  }
else if(i % 5 === 0)
  // if the number is divisible by 5, write "Buzz"
  {
    console.log("Buzz")
  }
  // otherwise, write just the number
  else {
    console.log(i);
  }
}

//Chessboard

var board = "";
var size = 8;

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);
