const expect = require('chai').expect
const extract_unique_chars = require('./extract_unique_chars')

describe('extract_unique_chars testing', ()=>{
	it('filters the unique characters', ()=>{
		expect(extract_unique_chars('hello')).to.deep.equal('helo');
		expect(extract_unique_chars('aaaa')).to.deep.equal('a')
	})
})