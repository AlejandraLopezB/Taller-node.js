const expect = require('chai').expect;
const fibonacci = require('../lib/fib.js');

describe('fibonacci', () => {
    describe('#fib', () => {
        it('should be a method', () => {
            expect(typeof fibonacci.fib).to.be.equal("function");
        });
        it('should one number', () => {
            let result = fibonacci.fib(2);
            expect(result).to.be.equal(1);
            //expect(calc.add(2,3)).to.be.equal(5);
        });
        it('should throw error if the parameters is not a Number or number is not greater than zero', () => {
            expect(fibonacci.fib).to.throw(Error);
        });
    });
});