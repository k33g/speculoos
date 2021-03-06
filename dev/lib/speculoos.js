/* by @k33g_org */

var root = this;

if (typeof exports === 'undefined') {
    root.speculoos = root.speculoos || {};
}

(function(speculoos) {

	var Class = (function() {
		function Class(definition) {
			/* from CoffeeScript */
			var __hasProp = Object.prototype.hasOwnProperty
			, m, F;

			this["extends"] = function(child, parent) {
				for (m in parent) {
					if (__hasProp.call(parent, m)) child[m] = parent[m];
				}
				function ctor() { this.constructor = child; }
				ctor.prototype = parent.prototype;
			  	child.prototype = new ctor;
			  	child.__super__ = child["super"] = parent.prototype;
				return child;
			}

            if(definition.constructor.name === "Object") {
                F = function(){};
            } else {
                F = definition.constructor;
            }


			/* inheritance */
			if(definition["extends"]) {
				this["extends"](F, definition["extends"])
			}
			for(m in definition) {
				if(m != 'constructor' && m != 'extends') {
					if(m[0] != '$') {
						F.prototype[m] = definition[m];
					} else { /* static members */
						F[m.split('$')[1]] = definition[m];
					}
				}
			}

			return F;
		}
		return Class;
	})();

    speculoos.Class = Class;

})(root.speculoos || exports);

