# zero-file #

This module allow you to upload file through model create api. Notice you need install model module first.

## Usage ##

1. Add dependency to your module package.json file like:

```
{
	"name" : "YOUR_MODULE_NAME",
	"zero" : {
		"dependencies" : {
			"file" : "^0.0.1"
		}
	}
}
```

2. Declare `isFile` in module.exports like:

```
module.exports = {
	models : [{
       'identity' : 'avatar',
       isFile : true
    }]
}
```

