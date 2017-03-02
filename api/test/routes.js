const mocha = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const app = require('../app');
chai.use(chaiHttp);


describe('Test routes', function () {
    it('should refresh all the infermedica data', function (done) {
        chai.request(app)
        .get('/refresh_info')
        .end((err,res)=>{
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            done();
        })
    })
});