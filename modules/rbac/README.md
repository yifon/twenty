# zero-rbac #

This module implement role based access control.

## Usage ##

1. Add dependency to your module package.json file like:

```
{
	"name" : "YOUR_MODULE_NAME",
	"zero" : {
		"dependencies" : {
			"rbac" : "^0.0.1"
		}
	}
}
```

2. Declare `acl` in module.exports like:

```
module.exports = {
	acl : {
		roles : {
			"loggedIn" : function(req){
				if( req.session.user.id ) return true
			}
		},
		routes : {
			"GET /admin" : [{
				role : "loggedIn",
				redirect : "/login"
			}]
		}
    }
}
```

Rbac module will apply roles in you definition to every request, If you want to grant a permanent role to a user, you can simply store it in database's user collection.
If you don't require redirecting after access failed, you can simply use:

```
module.exports = {
	acl : {
		roles : {
			"loggedIn" : function(req){
				if( req.session.user.id ) return true
			}
		},
		routes : {
			"GET /admin" : ['loggedIn']
		}
    }
}
```