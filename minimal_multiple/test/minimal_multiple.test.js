const minimal_multiple = require('../minimal_multiple')
const expect = require('chai').expect

describe('minimal_multiple tests',()=>{
	it('should return the smallest multiple',()=>{
		expect(minimal_multiple(4,6)).to.deep.equal(8)
	})
})