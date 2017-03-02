const mocha = require('mocha');
const expect = require('chai').expect;
const api = require('../routes/infermedica');

describe('Obtains data from Infermedica API', function () {
    it('should get a list with possible conditions', (done) => {
        api.getConditions()
            .then((response) => {
                expect(response).to.be.a('array');
                expect(response).to.have.length.above(0);
                done();
            })
            .catch((err) => {
                done(err);
            })
    });

    it('should get a list with possible lab tests', (done) => {
        api.getLabTests()
            .then((response) => {
                expect(response).to.be.a('array');
                expect(response).to.have.length.above(0);
                done();
            })
            .catch((err) => {
                done(err);
            })
    });

    it('should get a list with possible risk factors', (done) => {
        api.getRiskFactors()
            .then((response) => {
                expect(response).to.be.a('array');
                expect(response).to.have.length.above(0);
                done();
            })
            .catch((err) => {
                done(err);
            })
    });

    it('should get a list with possible symptoms', (done) => {
        api.getSymptoms()
            .then((response) => {
                expect(response).to.be.a('array');
                expect(response).to.have.length.above(0);
                done();
            })
            .catch((err) => {
                done(err);
            })
    });




})