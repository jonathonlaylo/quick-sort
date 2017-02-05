/*jshint esversion: 6 */

const chai = require('chai');

chai.should();

const quickSort = require('../quick-sort.js');

describe('The Cases of Edge', ()=>{

  it('should be a function', ()=>{
    quickSort.should.be.a('function');
  });
});