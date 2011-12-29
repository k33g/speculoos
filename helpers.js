
String.prototype.tpl = function(data) {
    var that = this;
    for(var m in data) {
        if(data.hasOwnProperty(m)){
            that = that.replace(new RegExp('#{'+ m +'}','g'), data[m]);
            that = that.replace(new RegExp('#%7B'+ m +'%7D','g'), data[m]); /*firefox*/
        }
    }
    return that ;
}

Object.prototype.toString = function() {
    return JSON.stringify(this);
}
