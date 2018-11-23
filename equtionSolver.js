const {revCalculation, seperateEquation, getDivider} = require("./src/equationSolver.js");
const main = function() {
  let equation = process.argv[2];
  let seperatedEquation = seperateEquation(equation);
  let divisor = getDivider(seperatedEquation);
  let calculate = revCalculation(divisor["rhs"]);
   console.log(calculate/+divisor["divisor"]);
}

main();
