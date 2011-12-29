window.Human = Class({
    constructor : function Human(first, last) {
        this.firstName = first;
        this.lastName = last;
    },

    toString : function() {
        return "Hello, I'm #{firstName} #{lastName}".tpl(this);
    },

    hello:function() {
        console.log(this.toString());
    }
});

var bob = new Human("Bob","Morane");
bob.hello();