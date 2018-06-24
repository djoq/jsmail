var chai, fs, say, server, should;

process.env.NODE_ENV = 'test';

fs = require('fs');

chai = require('chai');

should = chai.should();

server = require('../index');

say = require('say.js').dev;

describe('Logins to imap client', function() {
  var smtp;
  smtp = server.smtp;
  imap = server.imap;

//  it('should return the smtp client', function(done) {
//    smtp.should.be.an('Object');
//    done();
//  });

  it('should connect to client', function(done) {
    server.connect(smtp).should.be.an('Object');
    done();
  });
  
});
