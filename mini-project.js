    function checkResult(name, marks) {
   

function checkResult(name, marks) {
  let result;

  if (marks >=33) {
    result = "Pass";
  } else {
    result = "Fail";
  }

  console.log("Student Name: " + name);
  console.log("Mark: " + marks);
  console.log("Result: " + result)
  console.log("");
}
console.log("=========================");
console.log("Studemt Result Checker");
console.log("==========================");
console.log("");

checkResult("Zihad", 33);
checkResult("Rahim", 34);
checkResult("Karim", 35)
checkResult("forida", 75)
checkResult("Josim", 9)

console.log("=======================");
console.log("End Of Report");
console.log("=========================")
    }