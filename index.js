/*jshint asi:true*/
var resumer = require('resumer')
var crypto = require('crypto')

function Encryptor(cipher, key) {
  this.key = key
  this.cipher = cipher
}

Encryptor.prototype.encrypt = function(value, cb) {
  var cipher = crypto.createCipher(this.cipher, this.key),
      _this = this

  this.buffers = []

  var stream = resumer().queue(value).end().pipe(cipher)

  stream.on('data', function(buffer) {
    _this.buffers.push(buffer)
  })

  stream.on('end', function() {
    cb(Buffer.concat(_this.buffers))
  })
}

Encryptor.prototype.decrypt = function(value, cb) {
  var cipher = crypto.createDecipher(this.cipher, this.key),
      _this = this

  this.buffers = []

  var stream = resumer().queue(value).end().pipe(cipher)

  stream.on('data', function(buffer) {
    _this.buffers.push(buffer)
  })

  stream.on('end', function() {
    cb(Buffer.concat(_this.buffers))
  })
}

module.exports = Encryptor
