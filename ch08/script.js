var o = {
	firstName: "Paul",
	lastName: "Herrera:",
	middle: "Mike"
};

var p = {
	address1: "123 Sunny Drive",
	address2: "",
	city: "Austin",
	state: "TX"
};

var strict = (function() { return !this }());

console.log(strict);

var obj = {
	m: function()
	{	
		var self = this;
		console.log(this === obj);
		fun();

		function fun() {
			console.log(this === obj);
			console.log(self === obj);
		}
	}
};

obj.m();

function getPropertyNames (o, a) {
	if (a === undefined) a = [];
	for(var property in o) a.push(property);
	return a;
}

var a = getPropertyNames(o);
console.log(a);

var b = getPropertyNames(p, a);
console.log(b);

function foobar (x) {
	console.log(x);
	arguments[0] = null;
	console.log(x);
}

foobar(10);

var factorial = function  (x) {
	if (x <= 1) return 1;
	return x * arguments.callee(x - 1);
}

console.log(factorial(10));

function add(x, y) { return x + y; }
function subtract(x, y) { return x - y; }
function multiply(x, y) { return x * y; }
function divide(x, y) { return x / y; }

function operate (operator, operand1, operand2) {
	return operator(operand1, operand2);
}

var i = operate(add, operate(add, 2, 3), operate(multiply, 4, 5));
console.log(i);

var operators = {
	add : function(x, y) { return x + y; },
	subtract : function(x, y) { return x - y; },
	multiply : function(x, y) { return x * y; },
	divide : function(x, y) { return x / y; },
	pow: Math.pow
};

function operate2 (operation, operand1, operand2) {
	if (typeof operators[operation] === "function")
		return operators[operation](operand1, operand2);
	else throw "unknown operator";
}

var j = operate2("add", "hello", operate2("add", " ", "world"));
console.log(j);

var k = operate2("pow", 10, 2);
console.log(k);

var scope = "global scope";

function checkscope () {
	var scope = "local scope";
	function f() { return scope; }
	return f();
}

console.log(checkscope());

var uniqueInteger = (function() {
	var counter = 0;
	return function() { return counter++; }
 }());

console.log(uniqueInteger());
console.log(uniqueInteger());

function counter () {
	var n = 0;
	return {
		count: function() { return n++; },
		reset: function() { n = 0; }
	};
}

var c = counter();
var d = counter();

console.log("----");

console.log(c.count());
console.log(d.count());
console.log(c.reset());
console.log(c.count());
console.log(d.count());

function addPrivateProperty(o, name, predicate) {
	var value;

	o["get" + name] = function() { return value; }

	o["set" + name] = function(v) {
		if (predicate && !predicate(v))
			throw Error("set" + name + ": invalid value " + v);
		else
			value = v;
	};
}

var o = {};

addPrivateProperty(o, "Name", function(x) { return typeof x == "string"; });

o.setName("Frank");
console.log(o.getName());
//o.setName(o);  Causes an error

function check (args) {
	var actual = args.length;
	var expected = args.callee.length;
	if (actual !== expected)
		throw Error("Expected " + expected + " args; got " + actual);
}

function foobar19 (x, y, z) {
	check(arguments);
	return x + y + z;
}

//console.log(foobar19(10, 11, 12));

function trace (o, m) {
	var original = o[m];
	o[m] = function()
	{
		console.log(new Date(), "Entering");
		var result = original.apply(this, arguments);
		console.log(new Date(), "Exiting:", m);
		return result;
	};
}

function f (y) { return this.x + y; }
var o = { x: 1 };
var g = f.bind(o);
console.log(g(2));
