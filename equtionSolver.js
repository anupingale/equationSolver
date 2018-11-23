const {revCalculation, seperateEquation, getDivider} = require("./src/equationSolver.js");
const main = function() {
  let equation = process.argv[2];
  let seperatedEquation = seperateEquation(equation);
  let divisor = getDivider(seperatedEquation);
  let calculate = revCalculation(divisor["rhs"]);
  if(divisor['divisor'] == "+") {
     divisor['divisor'] = '1';
  }
   let output = calculate/+eval(divisor["divisor"]);
   console.log('Value of x is '+ output);
}

main();
