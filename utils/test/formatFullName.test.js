const formatFullname = require('../formatFullname');
const expect = require('chai').expect;

describe('FormatFullname', () => {

    it('it should return an error if the arg fullname is empty', () => {
        expect(formatFullname('')).to.equal('Error');
    });

    it('it should return a correct format of name and lastName', () => {
        expect(formatFullname('JOHn DOe')).to.equal('John Doe');
        expect(formatFullname('JOhN dOe')).to.equal('John Doe');
        expect(formatFullname('JOHN doe')).to.equal('John Doe');
    });

    it('it should return an error if fullName arg is not a string', () => {
        expect(formatFullname(20)).to.equal("Error");
        expect(formatFullname([])).to.equal("Error");
        expect(formatFullname({})).to.equal("Error");
        expect(formatFullname(function () { })).to.equal("Error");
        expect(formatFullname(undefined)).to.equal("Error");

    });



})





