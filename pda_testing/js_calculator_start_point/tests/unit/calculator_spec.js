var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true);
  });

  it('can add', function(){
    calculator.previousTotal = 25;
    calculator.add(5);
    assert.equal(30, calculator.runningTotal);
  });

  it('can subtract', function(){
    calculator.previousTotal = 25;
    calculator.subtract(5);
    assert.equal(20, calculator.runningTotal);
  });

  it('can multiply', function(){
    calculator.previousTotal = 5;
    calculator.multiply(5);
    assert.equal(25, calculator.runningTotal);
  })

  it('can divide', function(){
    calculator.previousTotal = 169;
    calculator.divide(13);
    assert.equal(13, calculator.runningTotal);
  })

  it('can concatenate multiply number clicks', function(){
    calculator.numberClick(5);
    calculator.numberClick(2);
    assert.equal(52, calculator.runningTotal);
  })

  it('can incorporate multiply operator clicks', function(){
    calculator.numberClick(5);
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.operatorClick('*');
    calculator.numberClick(20);
    calculator.operatorClick('=');
    assert.equal(140, calculator.runningTotal);
  })

  it('can clear the numbers without affecting the operation', function(){
    calculator.numberClick(5);
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.operatorClick('*');
    calculator.numberClick(20);
    calculator.operatorClick('=');
    calculator.clearClick();
    assert.equal(0, calculator.runningTotal);
    assert.equal(true, calculator.newTotal);
  })

});
