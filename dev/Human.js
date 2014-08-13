/* ES5 Class */
window.Human = speculoos.Class({
  /* nested class */
  Hand:speculoos.Class({
    constructor : function Hand (which_one) {
      this.whichOne = which_one;
    },
    take : function(something) {
      console.log("Take " + something + " with the " + this.whichOne +" hand");
    }
  }),

  constructor : function Human (name) {
    this.name = name;
    this.leftHand = new this.Hand("left");
    this.rightHand = new this.Hand("right");
    this.nickName = "John Doe";
  },

  setNickName : function (value) {
    this.nickName = value;
  },

  getNickName : function () {
    return this.nickName;
  },

  toString : function() {
    return "Hello " + this.name;
  },

  sayHello : function() {
    console.log("I'm "+this.name);
  }

});

var bob = new Human('Bob');

bob.sayHello();
bob.leftHand.take("a book");
bob.rightHand.take("a glass");