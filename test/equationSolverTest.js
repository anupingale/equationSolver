const assert = require("assert");
const {getDivider, seperateEquation, revCalculation, checkIndex, split,revOperator} = require('../src/equationSolver.js');

describe('split', function() {
  it('should split equation at = symbol into an array', function(){
    assert.deepEqual(split("2x+3=5"),['2x+3','5']);
    assert.deepEqual(split("3x=7"),['3x','7']);
  });
});

describe('revOperator', function() {
  it('should send reverse operator', function() {
    assert.deepEqual(revOperator("+"),"-");
    assert.deepEqual(revOperator("*"),"/");
    assert.deepEqual(revOperator("/"),"*");
    assert.deepEqual(revOperator("-"),"+");
  });
});

describe('checkIndex', function() {
  it('should return index of given operator', function() {
    assert.deepEqual(checkIndex([1,2,3,4,"+"],"+"),[4]);
    assert.deepEqual(checkIndex(["+"],"+"),[0]);
  });
  it('should return empty array when empty array is provided', function() {
    assert.deepEqual(checkIndex([]),[]);
  });
  it('should return empty array when array is not defined', function() {
    assert.deepEqual(checkIndex(""),[]);
  });
  it('should return multiple indexes if input has multiple operators', function() {
    assert.deepEqual(checkIndex([1,2,3,"+","+"],"+"),[3,4]);
  });
  
});

describe('reverse calculation', function() {
  it('should calculate the given eqn by using opposite operator', function(){
    assert.equal(revCalculation('3-5'),'8');
    assert.deepEqual(revCalculation('3+5'),-2);
    assert.deepEqual(revCalculation('10*2'),5);
  });
});

describe('seperateEquation', function() {
  it('should seperate equation according to the position of the array', function() {
    assert.deepEqual(seperateEquation("2x+3=5"),{"lhs":"+2x+3","rhs":"5"});
    assert.deepEqual(seperateEquation("5=2x+10"),{"lhs":"+2x+10","rhs":"5"});
    assert.deepEqual(seperateEquation("5x+3=20+15"),{"lhs":"+5x+3","rhs":"20+15"});
  });
});

describe('get Divider', function() {
  assert.deepEqual(getDivider({"lhs":"2x +2","rhs":"5"}),{"lhs":"2x +2","rhs":"5+2", "divisor":"2"});
  assert.deepEqual(getDivider({"lhs":"+4 +3x","rhs":"2"}),{"lhs":"+4 +3x","rhs":"2+4", "divisor":"+3"});
});
