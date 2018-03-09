const expect = require('chai').expect
const extractUnique = require('../extract_unique_chars')

describe('extract_unique_chars testing',()=>{
	it('filters the unique characters',()=>{
		expect(extractUnique('hello')).to.deep.equal('helo');
		expect(extractUnique('aaa')).to.deep.equal('a')
	})
	it('returns nothing if nothing is passed through',()=>{
		expect(extractUnique()).to.deep.equal('')
	})
})