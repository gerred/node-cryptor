# node-cryptor

![https://api.travis-ci.org/gerred/node-cryptor.png](https://api.travis-ci.org/gerred/node-cryptor.png)

This module wraps the streams API for the crypto library into an object that handles buffers.

### Usage

``` 
  var Cryptor = require('node-cryptor')
  var cryptor = new Cryptor(cipher, key)
  
  cryptor.encrypt('hello!', function(cryptedBuffer) {
    console.log(cryptedBuffer.toString('base64')) // some encrypted base64
    
    cryptor.decrypt(cryptedBuffer, function(decryptedBuffer) {
      console.log(decryptedBuffer.toString('utf8')) // hello!
    })
  })
```

### License
MIT
