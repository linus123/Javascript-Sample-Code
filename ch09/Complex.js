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


