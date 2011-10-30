/* by @k33g_org */
(function() {
	window.Class = (function() {
		function Class(definition) {
			/* from CoffeeScript */
			var __hasProp = Object.prototype.hasOwnProperty
			, m, F;
			this.Extends = function(child, parent) {
				for (m in parent) {
					if (__hasProp.call(parent, m)) child[m] = parent[m];
				}
				function ctor() { this.constructor = child; }
				ctor.prototype = parent.prototype;
			  	child.prototype = new ctor;
			  	child.__super__ = parent.prototype;
				return child;
			}
			if(definition.constructor) {
				F = definition.constructor;
			} else { F = {}; }
			/* inheritance */
			if(definition.Extends) {
				this.Extends(F, definition.Extends)
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
}).call(this);
