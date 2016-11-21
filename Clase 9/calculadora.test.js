const expect = require('chai').expect;
const calc = require('./lib/calc.js');

describe('calculadora', () => {
	describe('#add', () => {
		it('should add two numbers', () => {
			expect(calc.add(2,2)).to.be.equal(4);	
		})
	});
	describe('#sub', () => {
		it('should substract two numbers', () => {
			expect(calc.sub(2,2)).to.be.equal(0);
		});
	});
	describe('#mult', () => {
		it('should multiply two numbers', () => {
			expect(calc.mult(2,2)).to.be.equal(4);
		})
	});
	describe('#div', () => {
		it('should divide two numbers', () => {
			expect(calc.div(2,2)).to.be.equal(1);
		})
	});
});

//para compilar ../node_modules/.bin/mocha *.test.js
//mock: replica las funcionalidades de algo para tests (con sinon.js). Ejemplo
//ser una base de datos falsa para pruebas.

//tarea: binary search tree: TDD con append, max, min, height