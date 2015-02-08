# zero-rest #

Automatically generating REST api for model which has attribute `rest`.

## Usage ##

1. Add dependency to your module package.json file like:

```
{
	"name" : "YOUR_MODULE_NAME",
	"zero" : {
		"dependencies" : {
			"rest" : "^0.0.1"
		}
	}
}
```

2. mark your model like:

```
module.models = [{
    identity : 'post',
    rest : true
},{
    identity : 'user',
    rest : ['find','findOne']
}]
```

With `rest` set to true as the `post` model, API of `GET /post`, `GET /post/:id`, `POST /post`, `PUT /post/:id` and `DELETE /post/:id` will be generated.
With `rest` set to a array as `user` model, rest will only generate certain APIs. Below is a map of which API will be generated.

```
find : GET /model
findOne : GET /model/:id
create : POST /model
put : UPDATE /model/:id
destroy : DELETE /model/:id
```
