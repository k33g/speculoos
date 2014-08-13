var speculoos = require(".././speculoos.js");

var Thing = speculoos.Class({
	constructor : function Thing (kind) {
		this.kind = kind;

		/* private variable with getter and setter */
		var _nickName = '???';
		this.getNickName = function () { return _nickName; }
		this.setNickName = function (nickName) { _nickName = nickName; }

		console.log(kind);

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
		Human.super.constructor.call(this, this.constructor.name);

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

var bob = new Human('Bob');
console.log(bob, bob.toString(), Human.getHumanCounter(), Human.HumanCounter);
bob.sayHello();