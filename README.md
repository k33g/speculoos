#SpeculOOs ?

SpeculOOs is just a very simple Javascript Class notation, but ... CoffeeScript compliant ! (browser and nodejs)

You do not want to learn to coffeescript today, but it's interesting that your codes are compatible with coffeescript, if you finally decide to take the plunge. For example, your coffeescript classes will be able to inherit from your javascript classes

##Install

type `bower install k33g/speculoos#master`

##Use

- declare `speculoos.js`, if browser : `<script src="speculoos.js"></script>`, if nodejs : `var speculoos = require("./speculoos.js");`
- write a class(es) : 

```javascript
/* this is javascript */
var Thing = speculoos.Class({
    constructor : function Thing (kind) { /* you have to name the constructor */
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

var Human = speculoos.Class({
    extends : Thing, /* inheritance */
    constructor : function Human (name) {
        this.name = name;
        /* Call Parent constructor */
        Human.super.constructor.call(this, "I AM A HUMAN");
        Human.HumanCounter += 1;
    },

    toString : function() {
        return "Hello " + this.name;
    },

    sayHello : function() {
        /* Call Parent method */
        Human.super.sayHello.call(this);
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

##Prepare Future

###Use with Coffeescript

```coffeescript
### this is coffeescript ###
class SuperHero extends Human
    constructor:(name)->
        super name

    sayHello:->
        super
        console.log "And i'm a superhero : #{@getNickName()}"

superMan = new SuperHero 'Clark Kent'
superMan.setNickName "Super Man"

console.log superMan, superMan.toString(), SuperHero.getHumanCounter(), Human.HumanCounter
superMan.sayHello()
```

###Use with TypeScript

```typescript
class SuperHero extends Human {
    constructor(name: string, nickName: string) {
        this.nickName = nickName;
        super(name);
    }
    
    sayHello() {
        super.sayHello();
        console.log("I am "+this.nickName)
    }

}
var peter = new SuperHero("Peter Parker", "SpiderMan");
peter.sayHello();
```

###Use with ECMAScript 6

```javascript
class SuperHero extends Human {
  constructor(name, nickName) {
    super(name);
    this.setNickName(nickName);
  }

  sayHello() {
    super.sayHello();
    console.log(`I am ${this.nickName}`);
  }

}
var peter = new SuperHero("Peter Parker", "SpiderMan");

peter.sayHello();
```


... so simple ! No ? ...

##License

SpeculOOs is available under the terms of the [MIT-License](http://en.wikipedia.org/wiki/MIT_License#License_terms).

Copyright 2014-2015, Philippe Charrière
