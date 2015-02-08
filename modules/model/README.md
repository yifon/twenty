# zero-model #

This module use [waterline](https://github.com/balderdashy/waterline) to create database connection for relier module.

## Usage ##

1. Add dependency to your module package.json file like:

```
{
	"name" : "YOUR_MODULE_NAME",
	"zero" : {
		"dependencies" : {
			"model" : "^0.0.1"
		}
	}
}
```

2. Declare `models` in module.exports like:

```
module.exports = {
	models : [{
		identity : "user",
		attributes : {
			name : "string",
			age : "int"
		}
	}]
}
```

See more details about model definition in [waterline doc](https://github.com/balderdashy/waterline-doc).

3. Model module listen events of `create`, `update`, `destroy`, `find` and `findOne` for every defined model. You can use it as below:

```
bus.fire('user.findOne',{id:1}).then(function( findResult ){
	// Because there may be other listeners on 'user.findOne', so we have to retrieve result with key "model.findOne.user"
	var foundUser = findResult['model.findOne.user']
})
```

If you want to use waterline's native method, you can use it through your module's magic attribute `dep` like:

```
module.exports = {
	someAction : function(){
		this.dep.model.findOne('user',{id:1}).then(function(user){
			//notice the difference from using `bus.fire`
			var foundUser = user
		})
	}
}
```


