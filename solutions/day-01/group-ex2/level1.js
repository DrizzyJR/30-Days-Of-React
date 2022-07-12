//Uncomment the function in the exercise you want to test
//Ex1
function age() {
  let age = prompt("Enter your age: ")

  age >= 18
    ? console.log("You are old enough to drive")
    : console.log("You are left with " + (18 - age) + " years to drive")
}
//age()

//Ex2
function compareAges() {
  let myAge = prompt("Enter my age: ")
  let yourAge = prompt("Enter your age: ")

  if (myAge > yourAge) {
    console.log("I'm older than you")
  }
  else if (myAge < yourAge) {
    console.log("You're older than me")
  }
  else {
    console.log("We have the same age")
  }
}
//compareAges()

//Ex3
let a = 4
let b = 3

function compareIfElse(a, b) {
  if (a > b) {
    return a + " is greater than " + b
  } else if (b > a) {
    return b + " is greater than " + a
  }
}

function compareTernary(a, b) {
  return a > b
    ? a + " is greater than " + b
    : b + " is greater than " + a
}
//console.log(compareIfElse(a, b))
//console.log(compareTernary(a, b))

function isEven(num) {
  return num % 2 == 0
    ? num + " is an even number"
    : num + " is an odd number"
}
console.log(isEven(2))
console.log(isEven(9))

