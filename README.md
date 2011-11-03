#SpeculOOs ?

SpeculOOs is just a very simple Javascript Class notation, but ... CoffeeScript compliant ! 

You do not want to learn to coffeescript today, but it's interesting that your codes are compatible with coffeescript, if you finally decide to take the plunge. For example, your coffeescript classes will be able to inherit from your javascript classes

##Use

- declare `speculoos.js` (`see index.html`)
- write a class(es) : 

```javascript

	/* this is javascript */
	var Thing = Class({
		constructor : function Thing (kind) {
			this.kind = kind;
			
			/* private variable with getter and setter */
			var _nickName = '???';
			this.getNickName = function () { return _nickName; }
			this.setNickName = function (nickName) { _nickName = nickName; }
		},
	
		sayHello : function() {
			console.log("Hello !");
		}
	})

	var Human = Class({
		Extends : Thing, /* inheritance */
		constructor : function Human (name) {
			this.name = name;
			/* Call Parent constructor */
			Human.__super__.constructor.call(this, "I AM A HUMAN");
			Human.HumanCounter += 1;
		},

		toString : function() {
			return "Hello " + this.name;
		},
	
		sayHello : function() {
			/* Call Parent method */
			Human.__super__.sayHello.call(this);
			console.log("I'm "+this.name);
		},
	
		/* Static Members */
		$HumanCounter : 0,
		$getHumanCounter : function() { return Human.HumanCounter; }
	});
	
```
###Use with Javascript

```javascript

	var bob = new Human('Bob');
	console.log(bob, bob.toString(), Human.getHumanCounter(), Human.HumanCounter);
	bob.sayHello();

```
###Use with Coffeescript

```coffeescript

	### this is coffeescript ###
	class SuperHeroe extends Human
		constructor:(name)->
			super name

		sayHello:->
			super
			console.log "And i'm a superheroe : #{@getNickName()}"

	superMan = new SuperHeroe 'Clark Kent'
	superMan.setNickName "Super Man"
	
	console.log superMan, superMan.toString(), SuperHeroe.getHumanCounter(), Human.HumanCounter
	superMan.sayHello()

```

... so simple ! No ? ...

##License



SpeculOOs is available under the terms of the [MIT-License](http://en.wikipedia.org/wiki/MIT_License#License_terms).

Copyright 2011, Philippe Charrière