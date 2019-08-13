import chaiHttp from 'chai-http';
import chai from 'chai';
import app from '../index';
import dummy from './dummyData';
import { User } from '../sequelize/models';
import { genToken, hashedPassword } from '../helpers/auth';


chai.use(chaiHttp);
const { expect } = chai;
const { dummyUser } = dummy;

const userToken = genToken(dummyUser.validUser);

before(() => {
  const { password } = dummyUser.newUser;
  dummyUser.newUser.password = hashedPassword(password);
  User.create(dummyUser.newUser);
});


describe('POST /api/v1/users', () => {
  it('Should return error if user tries to signup with an invalid firstName', (done) => {
    chai.request(app)
      .post('/api/v1/users')
      .send(dummyUser.invalidFirstName)
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(400);
        expect(res).to.be.an('object');
        expect(res.body).to.have.keys('status', 'error');
        expect(res.body.error)
          .to.deep.equal('First name cannot contain number or special characters');
        expect(res.body.status).to.deep.equal('failed');
        done();
      });
  });
});

describe('POST /api/v1/users', () => {
  it('Should return error if user tries to signup with an invalid firstName', (done) => {
    chai.request(app)
      .post('/api/v1/users')
      .send(dummyUser.firstNumFirstName)
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(400);
        expect(res).to.be.an('object');
        expect(res.body).to.have.keys('status', 'error');
        expect(res.body.error)
          .to.deep.equal('First name cannot contain number or special characters');
        expect(res.body.status).to.deep.equal('failed');
        done();
      });
  });
});

describe('POST /api/v1/users', () => {
  it('Should return error if user tries to signup with missing firatName field', (done) => {
    chai.request(app)
      .post('/api/v1/users')
      .send(dummyUser.missingFirstName)
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(400);
        expect(res).to.be.an('object');
        expect(res.body).to.have.keys('status', 'error');
        expect(res.body.error).to.deep.equal('First name is required');
        expect(res.body.status).to.deep.equal('failed');
        done();
      });
  });
});

describe('POST /api/v1/users', () => {
  it('Should return error if user tries to signup  with a few characters for name', (done) => {
    chai.request(app)
      .post('/api/v1/users')
      .send(dummyUser.lessFirstName)
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(400);
        expect(res).to.be.an('object');
        expect(res.body).to.have.keys('status', 'error');
        expect(res.body.error).to.deep.equal('First name must be at least 2 characters long');
        expect(res.body.status).to.deep.equal('failed');
        done();
      });
  });
});

describe('POST /api/v1/users', () => {
  it('Should return error if user tries to signup  with a few numbers for name', (done) => {
    chai.request(app)
      .post('/api/v1/users')
      .send(dummyUser.numFirstName)
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(400);
        expect(res).to.be.an('object');
        expect(res.body).to.have.keys('status', 'error');
        expect(res.body.error).to.deep.equal('First name must be a string');
        expect(res.body.status).to.deep.equal('failed');
        done();
      });
  });
});

describe('POST /api/v1/users', () => {
  it('Should return error if user tries to signup with an invalid lasttName', (done) => {
    chai.request(app)
      .post('/api/v1/users')
      .send(dummyUser.invalidLastName)
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(400);
        expect(res).to.be.an('object');
        expect(res.body).to.have.keys('status', 'error');
        expect(res.body.error)
          .to.deep
          .equal('Last name cannot contain number or special characters');
        expect(res.body.status).to.deep.equal('failed');
        done();
      });
  });
});

describe('POST /api/v1/users', () => {
  it('Should return error if user tries to signup with an invalid Last name', (done) => {
    chai.request(app)
      .post('/api/v1/users')
      .send(dummyUser.firstNumLastName)
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(400);
        expect(res).to.be.an('object');
        expect(res.body).to.have.keys('status', 'error');
        expect(res.body.error)
          .to.deep.equal('Last name cannot contain number or special characters');
        expect(res.body.status).to.deep.equal('failed');
        done();
      });
  });
});

describe('POST /api/v1/users', () => {
  it('Should return error if user tries to signup with missing lasttName field', (done) => {
    chai.request(app)
      .post('/api/v1/users')
      .send(dummyUser.missingLastName)
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(400);
        expect(res).to.be.an('object');
        expect(res.body).to.have.keys('status', 'error');
        expect(res.body.error).to.deep.equal('Last name is required');
        expect(res.body.status).to.deep.equal('failed');
        done();
      });
  });
});

describe('POST /api/v1/users', () => {
  it('Should return error if user tries to signup  with a few characters for name', (done) => {
    chai.request(app)
      .post('/api/v1/users')
      .send(dummyUser.lessLastName)
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(400);
        expect(res).to.be.an('object');
        expect(res.body).to.have.keys('status', 'error');
        expect(res.body.error)
          .to.deep.equal('Last name must be at least 2 characters long');
        expect(res.body.status).to.deep.equal('failed');
        done();
      });
  });
});

describe('POST /api/v1/users', () => {
  it('Should return error if user tries to signup  with a few numbers for name', (done) => {
    chai.request(app)
      .post('/api/v1/users')
      .send(dummyUser.numLastName)
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(400);
        expect(res).to.be.an('object');
        expect(res.body).to.have.keys('status', 'error');
        expect(res.body.error).to.deep.equal('Last name must be a string');
        expect(res.body.status).to.deep.equal('failed');
        done();
      });
  });
});

describe('POST /api/v1/users', () => {
  it('Should return error if user tries to signup with an invalid UserName', (done) => {
    chai.request(app)
      .post('/api/v1/users')
      .send(dummyUser.invalidUserName)
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(400);
        expect(res).to.be.an('object');
        expect(res.body).to.have.keys('status', 'error');
        expect(res.body.error).to.deep.equal('User name must contain only alpha-numeric characters');
        expect(res.body.status).to.deep.equal('failed');
        done();
      });
  });
});

describe('POST /api/v1/users', () => {
  it('Should return error if user tries to signup with an invalid User name', (done) => {
    chai.request(app)
      .post('/api/v1/users')
      .send(dummyUser.firstNumUserName)
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(400);
        expect(res).to.be.an('object');
        expect(res.body).to.have.keys('status', 'error');
        expect(res.body.error).to.deep.equal('User name cannot begin with a number');
        expect(res.body.status).to.deep.equal('failed');
        done();
      });
  });
});

describe('POST /api/v1/users', () => {
  it('Should return error if user tries to signup with missing userName field', (done) => {
    chai.request(app)
      .post('/api/v1/users')
      .send(dummyUser.missingUserName)
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(400);
        expect(res).to.be.an('object');
        expect(res.body).to.have.keys('status', 'error');
        expect(res.body.error).to.deep.equal('User name is required');
        expect(res.body.status).to.deep.equal('failed');
        done();
      });
  });
});

describe('POST /api/v1/users', () => {
  it('Should return error if user tries to signup  with a few characters for name', (done) => {
    chai.request(app)
      .post('/api/v1/users')
      .send(dummyUser.lessUserName)
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(400);
        expect(res).to.be.an('object');
        expect(res.body).to.have.keys('status', 'error');
        expect(res.body.error).to.deep.equal('User name must be at least 2 characters long');
        expect(res.body.status).to.deep.equal('failed');
        done();
      });
  });
});

describe('POST /api/v1/users', () => {
  it('Should return error if user tries to signup  with a few numbers for name', (done) => {
    chai.request(app)
      .post('/api/v1/users')
      .send(dummyUser.numUserName)
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(400);
        expect(res).to.be.an('object');
        expect(res.body).to.have.keys('status', 'error');
        expect(res.body.error).to.deep.equal('User name must be a string');
        expect(res.body.status).to.deep.equal('failed');
        done();
      });
  });
});

describe('POST /api/v1/users', () => {
  it('Should return error if user tries to signup  with invalid email', (done) => {
    chai.request(app)
      .post('/api/v1/users')
      .send(dummyUser.invalidEmail)
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(400);
        expect(res).to.be.an('object');
        expect(res.body).to.have.keys('status', 'error');
        expect(res.body.error).to.deep.equal('email must be a valid email');
        expect(res.body.status).to.deep.equal('failed');
        done();
      });
  });
});

describe('POST /api/v1/users', () => {
  it('Should return error if user tries to signup with missing email field', (done) => {
    chai.request(app)
      .post('/api/v1/users')
      .send(dummyUser.missingEmail)
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(400);
        expect(res).to.be.an('object');
        expect(res.body).to.have.keys('status', 'error');
        expect(res.body.error).to.deep.equal('email is required');
        expect(res.body.status).to.deep.equal('failed');
        done();
      });
  });
});

describe('POST /api/v1/users', () => {
  it('Should return error if user tries to signup  with invalid password', (done) => {
    chai.request(app)
      .post('/api/v1/users')
      .send(dummyUser.invalidPassword)
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(400);
        expect(res).to.be.an('object');
        expect(res.body).to.have.keys('status', 'error');
        expect(res.body.error)
          .to.deep
          .equal('Password must be at least 8 characters with at least a number, Upper and lower cases special character');
        expect(res.body.status).to.deep.equal('failed');
        done();
      });
  });
});

describe('POST /api/v1/users', () => {
  it('Should return error if user tries to signup with missing password field', (done) => {
    chai.request(app)
      .post('/api/v1/users')
      .send(dummyUser.missingPassword)
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(400);
        expect(res).to.be.an('object');
        expect(res.body).to.have.keys('status', 'error');
        expect(res.body.error).to.deep.equal('password is required');
        expect(res.body.status).to.deep.equal('failed');
        done();
      });
  });
});

describe('POST /api/v1/users', () => {
  it('Should return error if user tries to signup with invalid confirm password type', (done) => {
    chai.request(app)
      .post('/api/v1/users')
      .send(dummyUser.numConfirmPassword)
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(400);
        expect(res).to.be.an('object');
        expect(res.body).to.have.keys('status', 'error');
        expect(res.body.error).to.deep.equal('Confirm password must be a string');
        expect(res.body.status).to.deep.equal('failed');
        done();
      });
  });
});

describe('POST /api/v1/users', () => {
  it('Should return error if user tries to signup with missing confirm', (done) => {
    chai.request(app)
      .post('/api/v1/users')
      .send(dummyUser.missingConfirm)
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(400);
        expect(res).to.be.an('object');
        expect(res.body).to.have.keys('status', 'error');
        expect(res.body.error).to.deep.equal('Confirm password is required');
        expect(res.body.status).to.deep.equal('failed');
        done();
      });
  });
});

describe('POST /api/v1/users', () => {
  it('Should return error if user tries to signup with when passwords do not match', (done) => {
    chai.request(app)
      .post('/api/v1/users')
      .send(dummyUser.unmatchedPassword)
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(400);
        expect(res).to.be.an('object');
        expect(res.body).to.have.keys('status', 'error');
        expect(res.body.error).to.deep.equal('Passwords must much');
        expect(res.body.status).to.deep.equal('failed');
        done();
      });
  });
});

describe('POST /api/v1/users', () => {
  it('Should successfully register user upon correct validation', (done) => {
    chai.request(app)
      .post('/api/v1/users')
      .send(dummyUser.validUser)
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(201);
        expect(res).to.be.an('object');
        expect(res.body).to.have.keys('message', 'data');
        expect(res.body.message).to.deep.equal('User created. Please, Check your email for a verification link.');
        expect(res.body.data).to.have.keys('token', 'id', 'firstName', 'lastName', 'userName', 'email', 'role');
        done();
      });
  });
});
describe('POST /api/v1/users', () => {
  it('Sould return error if user tries to signup with an existing email', (done) => {
    chai.request(app)
      .post('/api/v1/users')
      .send(dummyUser.existingEmail)
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(409);
        expect(res).to.be.an('object');
        expect(res.body).to.have.keys('error');
        expect(res.body.error).to.deep.equal('Email hareraloston@gmail.com already exists');
        done();
      });
  });
});

describe('POST /api/v1/users', () => {
  it('Sould return error if user tries to signup with an existing userName', (done) => {
    chai.request(app)
      .post('/api/v1/users')
      .send(dummyUser.existingUserName)
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(409);
        expect(res).to.be.an('object');
        expect(res.body).to.have.keys('error');
        expect(res.body.error).to.deep.equal('userName Kadhut already taken');
        done();
      });
  });
});
// Test for user reset password
describe('POST /api/v1/send-email', () => {
  it('Should send email to the user with an existing Email', (done) => {
    chai.request(app)
      .post('/api/v1/send-email')
      .send(dummyUser.emailForSend)
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(200);
        expect(res).to.be.an('object');
        expect(res.body).to.have.keys('message');
        expect(res.body.message).to.deep.equal('Email sent, please check your email');
        done();
      });
  });
});
describe('POST /api/v1/send-email', () => {
  it('Should not send email to the user if Email does no exist', (done) => {
    chai.request(app)
      .post('/api/v1/send-email')
      .send(dummyUser.unexestingEmailForSend)
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(404);
        expect(res).to.be.an('object');
        expect(res.body).to.have.keys('errors');
        expect(res.body.errors).to.deep.equal('User with email: hareraloston1@gmail.com not found..');
        done();
      });
  });
});
describe('POST /api/v1/send-email', () => {
  it('Should not send email to the user if Email is invalid', (done) => {
    chai.request(app)
      .post('/api/v1/send-email')
      .send(dummyUser.invalidEmailForSend)
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(400);
        expect(res).to.be.an('object');
        expect(res.body).to.have.keys('status', 'error');
        expect(res.body.error).to.deep.equal('email must be a valid email');
        expect(res.body.status).to.deep.equal('failed');
        done();
      });
  });
});
describe('POST /api/v1/reset-password/:token', () => {
  it('Should reset password of the user up on valid data', (done) => {
    chai.request(app)
      .post(`/api/v1/reset-password/${userToken}`)
      .send(dummyUser.resetPassword)
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(200);
        expect(res).to.be.an('object');
        expect(res.body).to.have.keys('message');
        expect(res.body.message).to.deep.equal('You have reset your password Successfully!');
        done();
      });
  });
});
describe('POST /api/v1/reset-password/:token', () => {
  it('Should not reset password of the user if token is invalid', (done) => {
    chai.request(app)
      .post('/api/v1/reset-password/invalidtoken')
      .send(dummyUser.resetPassword)
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(403);
        expect(res).to.be.an('object');
        expect(res.body).to.have.keys('status', 'error');
        expect(res.body.error).to.deep.equal('jwt malformed');
        expect(res.body.status).to.deep.equal(403);
        done();
      });
  });
});
describe('POST /api/v1/reset-password/:token', () => {
  it('Should return error if user tries to reset password with invalid password', (done) => {
    chai.request(app)
      .post(`/api/v1/reset-password/${userToken}`)
      .send(dummyUser.invalidResetPassword)
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(400);
        expect(res).to.be.an('object');
        expect(res.body).to.have.keys('status', 'error');
        expect(res.body.error)
          .to.deep
          .equal('Password must be at least 8 characters with at least a number, Upper and lower cases special character');
        expect(res.body.status).to.deep.equal('failed');
        done();
      });
  });
});
describe('POST /api/v1/reset-password/:token', () => {
  it('Should return error if user tries to reset password without password', (done) => {
    chai.request(app)
      .post(`/api/v1/reset-password/${userToken}`)
      .send(dummyUser.resetMissingPassword)
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(400);
        expect(res).to.be.an('object');
        expect(res.body).to.have.keys('status', 'error');
        expect(res.body.error).to.deep.equal('password is required');
        expect(res.body.status).to.deep.equal('failed');
        done();
      });
  });
});
describe('POST /api/v1/reset-password/:token', () => {
  it('Should return error if user tries to reset password password not matching', (done) => {
    chai.request(app)
      .post(`/api/v1/reset-password/${userToken}`)
      .send(dummyUser.resetPasswordUnmatch)
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(400);
        expect(res).to.be.an('object');
        expect(res.body).to.have.keys('status', 'error');
        expect(res.body.error).to.deep.equal('Passwords must much');
        expect(res.body.status).to.deep.equal('failed');
        done();
      });
  });
});
describe('POST /api/v1/reset-password/:token', () => {
  it('Should return error if user tries to reset password without confirmin password', (done) => {
    chai.request(app)
      .post(`/api/v1/reset-password/${userToken}`)
      .send(dummyUser.resetMissingConfirmPassword)
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(400);
        expect(res).to.be.an('object');
        expect(res.body).to.have.keys('status', 'error');
        expect(res.body.error).to.deep.equal('Confirm password is required');
        expect(res.body.status).to.deep.equal('failed');
        done();
      });
  });
});
describe('POST /api/v1/reset-password/:token', () => {
  it('Should return error if user tries to reset password with Invalid confirmin password', (done) => {
    chai.request(app)
      .post(`/api/v1/reset-password/${userToken}`)
      .send(dummyUser.numresetConfirmPassword)
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(400);
        expect(res).to.be.an('object');
        expect(res.body).to.have.keys('status', 'error');
        expect(res.body.error).to.deep.equal('Confirm password must be a string');
        expect(res.body.status).to.deep.equal('failed');
        done();
      });
  });
});
// Login Tests
describe('POST /api/v1/login', () => {
  it('Should return with user information when correct credentials are supplied and account is verified', (done) => {
    chai
      .request(app)
      .post('/api/v1/login')
      .send({
        email: 'jamal@gmail12.com',
        password: 'Jamal1230!',
      })
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(200);
        expect(res).to.be.an('object');
        expect(res.body).to.have.key('message', 'data');
        expect(res.body.data).to.be.an('object');
        expect(res.body.data).to.have.keys('token', 'username', 'email');
        expect(res.body.data).to.have.property('token').to.be.a('string');
        expect(res.body.message).to.deep.equal('Welcome, you are successfully logged in');
        done();
      });
  });
});
describe('POST /api/v1/login', () => {
  it('Should return error message when user introduces undefined field', () => {
    chai
      .request(app)
      .post('/api/v1/login')
      .send({
        email: 'hareraloston@gmail.com',
        password: 'Jamal.123',
        status: 'done'
      })
      .end((err, res) => {
        expect(res).have.status(400);
        expect(res.body).to.have.key('error');
        expect(res.body.error).to.deep.equal('status is not allowed');
      });
  });
  it('Should output error if user provides no email', () => {
    chai
      .request(app)
      .post('/api/v1/login')
      .send({
        email: '',
        password: 'Jamal1230!'
      })
      .end((err, res) => {
        expect(res).have.status(400);
        expect(res.body).to.have.key('error');
        expect(res.body.error).to.deep.equal('email is not allowed to be empty');
      });
  });
  it('Should output error if user provides no password', () => {
    chai
      .request(app)
      .post('/api/v1/login')
      .send({
        email: 'jamal@gmail12.com',
        password: ''
      })
      .end((err, res) => {
        expect(res).have.status(400);
        expect(res.body).to.have.key('error');
        expect(res.body.error).to.deep.equal('password is not allowed to be empty');
      });
  });

  it('Should output error message when password provided is incorrect', () => {
    chai
      .request(app)
      .post('/api/v1/login')
      .send({
        email: 'jamal@gmail12.com',
        password: 'Jamal12301'
      })
      .end((err, res) => {
        expect(res).have.status(401);
        expect(res.body).to.have.key('error');
        expect(res.body.error).to.deep.equal('Incorrect email or password');
      });
  });

  it('Should output error message when email provided is incorrect', () => {
    chai
      .request(app)
      .post('/api/v1/login')
      .send({
        email: 'jamalmoh@gmail12.com',
        password: 'Jamal1230'
      })
      .end((err, res) => {
        expect(res).have.status(401);
        expect(res.body).to.have.key('error');
        expect(res.body.error).to.deep.equal('Incorrect email or password');
      });
  });
  it('Should return error message when user account is not verified', () => {
    chai
      .request(app)
      .post('/api/v1/login')
      .send({
        email: 'hareraloston@gmail.com',
        password: 'Jamal.123',
      })
      .end((err, res) => {
        expect(res).have.status(401);
        expect(res.body).to.have.key('error');
        expect(res.body.error).to.deep.equal('Please verify your account first. Visit your email to verify');
      });
  });
});
