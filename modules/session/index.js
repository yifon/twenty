var session = require('cookie-session')

module.exports = {
  sessionHandler : session({
    secret: 'zero meant to be rise from the bottom',
    keys: ['twenty', 'eleven']
  }),
  init : function(){
    APP.use( this.sessionHandler)
  }
}