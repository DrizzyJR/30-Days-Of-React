// ---- LEVEL 1 ----
// 1.
const array1 = []
console.log("Array1: " + array1)

// 2.
const array2 = [1, 2, 3, 4, 5, 6, 7]
console.log("Array2: " + array2)

//3.
console.log("Array2 Length: " + array2.length)

//4.
console.log("First: " + array2[0], "\nMiddle: " + array2[3] + "\nLast: " + array2[array2.length - 1])

//5.
const mixedDataTypes = [1, 2.5, "yo", array1, -10, "aaaa"]
console.log(mixedDataTypes)

//6.
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

//7.
console.log(itCompanies)

//8.
console.log("Nr.Companies: " + itCompanies.length)

//9.
console.log("First: " + itCompanies[0] + "\nMiddle: " + itCompanies[3] + "\nLast: " + itCompanies[itCompanies.length - 1])

//10.
let str_res = ""
for (let i = 0; i <= itCompanies.length - 1; i++) {
  str_res += itCompanies[i] + "\n"
}
console.log(str_res)

//11.
str_res = ""
for (let i = 0; i <= itCompanies.length - 1; i++) {
  str_res += itCompanies[i].toUpperCase() + "\n"
}
console.log(str_res)

//12.
str_res = ""
for (let i = 0; i < itCompanies.length - 1; i++) {
  str_res += itCompanies[i] + ", "
}
str_res += "and " + itCompanies[itCompanies.length - 1] + " are big IT companies."
console.log(str_res)

//13.
function findCompany(company_name) {
  return itCompanies.indexOf(company_name) == -1 ? company_name + " not found" : company_name
}
console.log(findCompany("Facebook"))
console.log(findCompany("facebook"))
console.log(findCompany("Jumbo"))

//14.
function hasOs(word) {
  let o_counter = 0;
  for (let i = 0; i <= itCompanies.length - 1; i++) {
    if (word.charAt(i) === 'o' || word.charAt(i) === 'O') {
      o_counter++;
    }
  }
  return o_counter >= 2;
}
let new_itCompanies = itCompanies.filter(hasOs)
console.log(new_itCompanies)

//15.
console.log(new_itCompanies.sort())

//16.
console.log(new_itCompanies.reverse())

//17.
console.log(new_itCompanies.slice(2))

//18.
console.log(new_itCompanies.slice(1, 0))
