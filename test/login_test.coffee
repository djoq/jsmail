process.env.NODE_ENV = 'test'

#Require modules
fs = require('fs')
chai = require('chai')
should = chai.should()

server = require('../index')
say = require('say.js').dev

# describe 'Logins to imap client', ->
#   imap = server.imap()

  # it 'should return the imap client', (done) ->
  #   imap.should.be.an 'Object'
  #   done()
  #   return

  # it 'should connect the client', (done) ->
  #   server.connect(imap).should.be.an 'Object'
  #   done()
  #   return

describe 'Logins to imap client', ->
  smtp = server.smtp()

  it 'should return the smtp client', (done) ->
    smtp.should.be.an 'Object'
    done()
    return

  it 'should connect to client', (done) ->
  	server.connect(smtp).should.be.an 'Object'
  	done()
  	return

