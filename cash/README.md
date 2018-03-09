[![Language](https://img.shields.io/badge/Node-9.0-blue.svg?style=plastic&colorB=68B7EB)]()

`cash` is a tool that helps converting currencies.
Whether you're a functional purist, dislike a particular API, or simply just want to convert from a devie to another one, you might enjoy using this library.

> ***<sub>note</sub>*** <br/>
> `Cash` currently supports lastest **node**. 

**Table of Contents**

- [Usage Overview](#usage-overview)
- [Commands](#commands)
- [Installation](#installation)
- [Licence](#licence)


***
## [Usage Overview](#usage-overview)

### **Currency list**
The list of avaible currencies is avaible on [askep.us](http://akep.us/currencies)


### **Currency equivalent**

If you wants to convert an amount in one currency to another one:
````
$ node bin/index.js <amount> <departure_currency> <destination_destination>
````

***

If you wants the equivalent from one currency to multiples ones:
````
$ node bin/index.js <amount> <depature currency> <destination_currency_1> <destination_currency_2> <destination_currency_3>
````

***
## [Commands](#commands)

Some commands are avaible with the tool.

***
### **Default currencies**

If you wants to change the default currencies:

````
--save <default_currency_1> <default_currency_2>
````
OR
````
-s <default_currency_1> <default_currency_2>
````

***
### **Help message**

If you wants to have the display message:

````
$ node bin/index.js --help
````
OR
````
$ node bin/index.js -h
````

***
### **Version**

If you wants to have the version:

````
$ node bin/index.js --version
````
OR
````
$ node bin/index.js -v
````

***
## [Installation](#installation)

### **NPM**

On the `cash` folder:

```npm
npm install
```
***
## [License](#license)

Closures is provided under the [MIT License](https://github.com/vhesener/Closures/blob/master/LICENSE).

```text
The MIT License (MIT)
```
