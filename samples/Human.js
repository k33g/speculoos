var Human = Class({
    constructor : function Human(first, last) {
        this.firstName = first;
        this.lastName = last;
    },
    hello:function() {
        console.log("Hello, I'am " + this.firstName + " " + this.lastName);
    }
});