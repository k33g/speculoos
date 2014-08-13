/* ES6 Class */

class SuperHero extends Human {
  constructor(name, nickName) {
    this.nickName = nickName;
    super(name);
  }

  sayHello() {
    super.sayHello();
    console.log(`I am ${this.nickName}`);
  }

}
var peter = new SuperHero("Peter Parker", "SpiderMan");
peter.sayHello();