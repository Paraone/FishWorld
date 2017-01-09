## Install Golang !!
https://golang.org/doc/install
Packages: https://golang.org/pkg/
http://www.alexedwards.net/blog/serving-static-sites-with-go

##Why Golang?
Golang is a good fit for anyone due to its simplicity, speed, and high performance. It is also
usable across multiple platforms, has multiple built-in language features. As well as an 
efficient garbage collector. It is used by many big companies such as Google, Dropbox, and 
Soundcloud. Golang has the speed of a compiled laguage but the feel of 
an interpreted language, making writting code fast and allowing for rapid feedback.
There are not classes or inheritance in Go but they do have 
structs which can have methods to them. You can use arrays, if statements, loops, and switch.
In order for golang to work you need packages and imports. You could use 
multiple imports.
```
package main 
import (
    "net/http"
    "log"
    "fmt"
)
func main () {
  fmt.Printf("Hello World")
}
```
##Packages
    * Declare package at the top of every source file
    * Execut­ables should be in package main
    * Upper case identifier: exported (makes it visible from other packages)
    * Lower case identifier: private (not visible to other packages)
## Golang syntax examples
### Variables
Declaring a variable
```var varname vartype
```
Declaring a variable with a value
```var varname vartype = value
```
### Functions
Simple functions
```func functionName() {
    
}
```
Functions with Parameters
```func functionName(param1 string, param2 int) {
    
}
```
## Built-in  Types
* bool (boolean)
* string
* int (8, 16, 32, 64)
* float (32, 64)
## Team Jared Members
Dominique Alexander
Miriam Hernandez
Michael Rivera
Marcos Wade

This is an example of an api call using Golang
```
package main

import (
	"fmt"
	"net/http"
	"io/ioutil"
)

func main() {

//api url
url := "https://www.googleapis.com/youtube/v3/search?part=snippet&key=APIKEY_HERE"

//sending get request
req, _ := http.NewRequest("GET", url, nil)

//getting the response
res, _ := http.DefaultClient.Do(req)

//closing the response body
defer res.Body.Close()
body, _ := ioutil.ReadAll(res.Body) //reading the response

fmt.Println(res)
fmt.Println(string(body))

}
```
