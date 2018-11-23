const split = function(equation) {
  return equation.split("=");
}

const seperateEquation = function(equation) {
  let eqn = {};
  let splittedEqn = split(equation);
  eqn["lhs"] = "+"+splittedEqn[1];
  eqn["rhs"] = splittedEqn[0];
  if(splittedEqn[0].includes('x')){
    eqn["lhs"] = "+"+splittedEqn[0];
    eqn["rhs"] = splittedEqn[1];
  }
  return eqn;
}

const getDivider = function(equation) {
  let eqn = equation["lhs"].split(" ");
  let divider;
  for(element of eqn) {
    if(element.includes("x")) {
      divider = element.split("");
      divider.pop();
    }
  }
  let number = eqn.filter(e => e.match("x")==null).join("");
  equation["rhs"] = equation["rhs"] + number;
  equation["divisor"] = divider.join("");
  return equation;
}

const checkIndex = function(array,operator){
  let result = [];
  for(let index=0; index<array.length; index++){
    if(array[index] == operator){
      result.push(index);
    }
  }
  return result;
};

const revOperator = function(operator){
  let opr = ['+','-','*','/'];
  let revOpr = ['-','+','/','*'];
  let index = checkIndex(opr,operator);
  return revOpr[index];
}

const revCalculation = function(equation) {
  let eqn = equation.split("");
  let operators = ["+","-","*","/"];
  let opr;
  for(character of eqn) {
    for(operator of operators) {
      if(character == operator) {
        opr = character;
      }
    }
  }
  let index = checkIndex(eqn,opr);
  eqn[index] = revOperator(opr);
  return eval(eqn.join("")); 
}

module.exports = {getDivider, seperateEquation, revCalculation, checkIndex, split,revOperator};
