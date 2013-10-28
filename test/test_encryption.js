/*jshint asi:true*/

var expect = require('chai').expect
var Encryptor = require('../index')

describe('Encryptor', function() {
  beforeEach(function() {
    this.encryptor = new Encryptor('aes256', 'test key')
  })

  describe('#encrypt', function() {
    it('should return a buffer given a valid string', function(done) {
      this.encryptor.encrypt('here is a test string', function(buffer) {
        expect(Buffer.isBuffer(buffer)).to.be.true
        expect(buffer.toString('base64')).to.equal('H+/eXc5pdRF99FfHozdV7YCy9oK4JtU3Z02UrPIwPHw=')

        done()
      })
    })
  })

  describe('#decrypt', function() {
    it('should return a buffer given a valid encrypted string', function(done) {
      var buffer = new Buffer('H+/eXc5pdRF99FfHozdV7YCy9oK4JtU3Z02UrPIwPHw=', 'base64')
      this.encryptor.decrypt(buffer, function(result) {
        expect(Buffer.isBuffer(result)).to.be.true
        expect(result.toString('utf8')).to.equal('here is a test string')

        done()
      })
    })
  })
})

