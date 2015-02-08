# zero-configure #

This module allow you use a config.json file to overwrite module's config which declared the dependency of this module.

## Usage ##

1. Add dependency to your module package.json file like:

```
{
	"name" : "YOUR_MODULE_NAME",
	"zero" : {
		"dependencies" : {
			"configure" : "^0.0.1"
		}
	}
}
```

2. Declare `config` in module.exports like:

```
module.exports = {
	config : {
       'allowSomething' : true
    }
}
```

If you have a global config file in root of application, and it looks like:

```
{
	"THIS_MODULE_NAME" : {
		'allowSomething' : false
	}
}
```

Then it will overwrite the config's `allowSomething` in this module.


