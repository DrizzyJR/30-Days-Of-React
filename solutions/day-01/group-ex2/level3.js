//Uncomment the function in the exercise you want to test
//Ex1
function daysInMonth(month) {
  switch (month) {
    case "January":
    case "March":
    case "May":
    case "July":
    case "August":
    case "October":
    case "December":
      return month + " has 31 days."

    case "April":
    case "June":
    case "September":
    case "November":
      return month + " has 30 days."

    case "February":
      return month + " 28 days."
    default:
      return month + " is invalid";
  }
}
console.log(daysInMonth("March"))
console.log(daysInMonth("June"))
console.log(daysInMonth("February"))
console.log(daysInMonth("foo"))

//Ex2
function daysInMonthYear(month, year) {
  const isLeap = isLeapYear(year)
  switch (month) {
    case "January":
    case "March":
    case "May":
    case "July":
    case "August":
    case "October":
    case "December":
      return month + " has 31 days."

    case "April":
    case "June":
    case "September":
    case "November":
      return month + " has 30 days."

    case "February":
      return isLeap
        ? month + " has 29 days"
        : month + " has 28 days"
    default:
      return month + " is invalid";
  }
}
function isLeapYear(year) {
  return year % 4 == 0
    ? true
    : false
}
console.log(daysInMonthYear("February", 2000))
console.log(daysInMonthYear("February", 1999))
