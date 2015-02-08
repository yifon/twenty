# zero-respond #

This module handles responding of request when you are using `bus` in your request handler.

## Usage ##

1. Add dependency to your module package.json file like:

```
{
	"name" : "YOUR_MODULE_NAME",
	"zero" : {
		"dependencies" : {
			"respond" : "^0.0.1"
		}
	}
}
```

2. Set bus data named `respond` in your request' bus.
Respond module adds a router handler which will always be called at last of every request,
and read from data of bus to decide what to respond. Codes for more detail :

```
module.exports = {
    route : {
        "GET /anyRoute" : function( req, res){
            //bus.fcall() fires two event automatically, one before and one after your main business logic
            //In this case, it fires `someEvent.before` and `someEvent.after`
            req.bus.fcall("someEvent", arg1, arg2, function(){
                //deal what you want to do

                //respond module handlers 3 type of output, `data`, `file` and `page`. Which to output depend on your bus data.

                //1.Output data as json.
                req.bus.data("respond.data",{"key":"value})

                //2.Render page with data, and output html as result.
                req.bus.data("respond.data", DATA_FOR_PAGE_RENDERING)
                req.bus.data("respond.page", TEMPLATE_LOCATION)

                //3. Send file to client
                req.bus.data("respond.fire", FILE_LOCATION)
            })
        }
    }
}
```

We strongly suggest you to use respond module to handle respond for you rather then using `res` in you request handler,
because in this way other modules can modify or inject data to output easily.
Plus, all data modification can be traced and nicely shown by dev tool.
