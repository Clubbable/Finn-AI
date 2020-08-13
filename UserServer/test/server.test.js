let chai = require('chai');
let chaiHttp = require('chai-http');

let app = require('../server');

let should = chai.should();
chai.use(chaiHttp);

describe('App', () => {
    it('should respond status 200', (done) => {
      chai.request(app)
          .get('/user/id')
          .end((err, res) => {
                res.should.have.status(200);
            done();
          });
    });
    it('should GET the users response', (done) => {
        chai.request(app)
            .get('/user/user/1')
            .end((err, res) => {
                  res.should.have.status(200);
              done();
            });
      });

    it('should save this user', function(done) {
        chai.request(app)
        .post('/user/save')
        .send({
            id: "3",
            firstName: 'admin',
            lastName:'test',
            email:"shfhfkk@email.com"
        })
        .end(function(err, res) {
            console.log(res)
            res.should.have.status(200);
            done();
        });
    });
});