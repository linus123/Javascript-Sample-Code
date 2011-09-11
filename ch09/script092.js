function defineClass(constructor, methods, statics) {
	if (methods) extend(constructor.prototype, methods);
	if (statics) extend(constructor, statics);
	return constructor;
}

var SimpleRange = defineClass(
	function(f,t) {
		this.f = f
		this.t = t;
	},
	{
		includes: function(x) {
				return this.f <= x && x <= this.t;
			  },
    		upto: function(t) {
				return new SimpleRange(0, t);
		      }
	}
);

var sr = new SimpleRange(10, 20);
console.log(rs.includes(15));
console.log(rs.includes(100));
