# zero-security #

This module secure relier's model with varied strategies.

## Usage ##

1. Add dependency to your module package.json file like:

```
{
	"name" : "YOUR_MODULE_NAME",
	"zero" : {
		"dependencies" : {
			"security" : "^0.0.1"
		}
	}
}
```

2. make your model as:

```
module.models = [{
    identity : 'post',
    attributes : {
    	content : 'string'
    },
    security : {
        "content" : ['xss']
	}
},{
    identity : 'user',
    attributes : {
    	password : 'string'
    },
    security : {
		"password" : ['password']
	}
}]
```

3. Current supported secure strategies: `xss`, `encryptPermanent`, `password`.

