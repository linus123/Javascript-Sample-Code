function Range(from, to) {
	this.from = from;
	this.to = to;
}

Range.prototype = {
	constructor: Range,
	includes: function(x) {
			  return this.from <= x && x <= this.to;
		  },
	foreach: function(f) {
			 for(var x = Math.ceil(this.from); x <= this.to; x++) f(x);
		 },
	toString: function() {
			  return "(" + this.from + "..." + this.to + ")";
		  }
};

var r = new Range(1, 3);
r.includes(2);
console.log(r);
console.log(r instanceof Range);
