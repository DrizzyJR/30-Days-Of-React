//Uncomment the function in the exercise you want to test
//Ex1
function grade(score) {
  if (score >= 90) {
    return "A"
  } else if (score >= 70) {
    return "B"
  } else if (score >= 60) {
    return "C"
  } else if (score >= 50) {
    return "D"
  } else {
    return "F"
  }
}
//console.log(grade(22))
//console.log(grade(55))
//console.log(grade(60))
//console.log(grade(70))
//console.log(grade(90))

function season(month) {
  switch (month) {
    case "September":
    case "October":
    case "November":
      return "Autumn"

    case "December":
    case "January":
    case "February":
      return "Winter"

    case "March":
    case "April":
    case "May":
      return "Spring"

    case "June":
    case "July":
    case "August":
      return "Summer"

    default:
      return "Invalid month"
  }
}
//console.log(season("October"))
//console.log(season("January"))
//console.log(season("April"))
//console.log(season("July"))
//console.log(season("foo"))

function work(day) {
  day = day.toLowerCase()
  switch (day) {
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
      return day + " is a working day"

    case "saturday":
    case "sunday":
      return day + " is a weekend"

    default:
      return day + " does not exist"
  }
}
console.log(work("wEdNesday"))
console.log(work("sAturDaY"))
console.log(work("foo"))

