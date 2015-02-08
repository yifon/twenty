var _ = require("lodash"),
  path = require('path')

module.exports = {
  expand : function( module ){
    var root = this
    if( module.statics ){
      _.forEach( module.statics, function( filePath, prefix){
        ZERO.mlog("statics", "expand:", prefix, filePath)
        APP.use( prefix, APP.express.static( path.join(process.cwd(),"modules",module.name, filePath) ))
      })
    }
  }
}