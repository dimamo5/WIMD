const mocha = require('mocha');
const expect = require('chai').expect;
const mwAPI = require('../routes/merrian_webster');
const infermedicaAPI = require('../routes/infermedica');


describe('Obtains data from Infermedica API', function () {
    it('should get a list with possible conditions', (done) => {
        infermedicaAPI.getConditions()
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
        infermedicaAPI.getLabTests()
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
        infermedicaAPI.getRiskFactors()
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
        infermedicaAPI.getSymptoms()
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

describe('Obtains data from Merrian-Webster API',function(){
    it('Search Term',function(){
        mwAPI.getInfoTerm('doctor')
        .then((response)=>{
            expect(response).to.be.a('string');
            expect(response).to.have.length.above(25);
        })
    });
})