function Complex(real, imaginary) {
	if (isNaN(real)	|| isNan(imaginary))
		throw new TypeError();
	this.r = real;
	this.i = imaginary;
}

Complex.prototype.add = function(that) {
	return new Complex(this.r + that.r, this.i + that.r);	
};

Complex.prototype.mul = function(that) {
	return new Complex(this.r * that.r - this.i * that.i,
				this.r * that.r + this.i * that.i);
};

Complex.prototype.mag = function() {
	return Math.sqrt(this.r*this.r + this.i*this.i);
};

Complex.prototype.neg = function() {
	return new Complex(-this.r, -this.i);
};

Complex.prototype.toString = function() {
	return "{" + this.r + "," + this.i + "}";
};

Complex.prototype.equals = function(that) {
	return that != null && // must be defined and non-null
		that.constructor === Complex && // and an instance of Complex
		this.r === that.r && this.i === that.i; // and have the same values.
};

Complex.ZERO = new Complex(0, 0);
Complex.ONE = new Complex(1, 0);
Complex.I = new Complex(0, 1);

Complex.parse = function(s) {
	try { // Assume that the parsing will succeed
		var m = Complex._format.exec(s); // Regular expression magic
		return new Complex(parseFloat(m[1]), parseFloat(m[2]));
	} catch (x) { // And throw an exception if it fails
		throw new TypeError("Can't parse '" + s + "' as a complex number.");
	}
};

Complex._format = /^\{([^,]+),([^}]+)\}$/;
