//7.6

var o = {
	firstName : "Paul",
	lastName : "Herrera"
};

var keys = Object.keys(o);
var values = [];

for(var i = 0; i < keys.length; i ++) {
	var key = keys[i];
	values[i] = o[key];
}

console.log(values);

for(var i = 0; i < keys.length; i ++) {
	if (!keys[i]) continue;
	var key = keys[i];
	values[i] = o[key];
}

console.log(values);

var data = [1,2,3,4,5];
var sumOfSquares = 0;
data.forEach(function(x) {
	sumOfSquares += x*x;
});

console.log(sumOfSquares);

//7.7

var table = new Array(10);
for(var i = 0; i < table.length; i++) {
	table[i] = new Array(10);
}

for(var row = 0; row < table.length; row++) {
	for(var col = 0; col < table[row].length; col++) {
		table[row][col] = row * col;
	}
}

var product = table[5][7];

console.log(product);

var a = [1, 2, 3];
console.log(a.join());
console.log(a.join(" "));
console.log(a.join(""));
var b = new Array(10);
console.log(b.join('-'));

//7.8.3

var a = new Array("ban", "che", "app");
a.sort();
var s = a.join(", ");
console.log(s);

var a  = [33, 4, 1111, 222];

a.sort();
console.log(a);

a.sort(function(a, b) {
	return a-b;
});
console.log(a);


a.sort(function(a, b) {
	return b-a;
});
console.log(a);

var a = [1, 2, 3];
console.log(a.concat(4, 5));
console.log(a.concat([4, 5]));
console.log(a.concat([4, 5], [6, 7]));
console.log(a.concat(4, 5));
console.log(a.concat(4, [5, [6, 7]]));

//7.8.5
var a = [1, 2, 3, 4, 5];
console.log(a.slice(0, 3));
console.log(a.slice(3));
console.log(a.slice(1, -1));
console.log(a.slice(-3, -2));

console.log("-----");

var a = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(a.splice(4));
console.log(a.splice(1, 2));
console.log(a.splice(1, 1));

console.log("-----");

var a = [1, 2, 3, 4, 5];
console.log(a.splice(2, 0, 'a', 'b'));
console.log(a.splice(2, 2, [1, 2], 3));

var data = [1, 2, 3, 4, 5];
var sum = 0;
data.forEach(function(value) { sum += value; });
console.log(sum);

data.forEach(function(v, i, a) { a[i] = v + 1 });
console.log(data);

//7.9.2
var a = [1, 2, 3];
b = a.map(function(x) { return x*x; } );
console.log(b);

a = [5, 4, 3, 2, 1];
smallvalues = a.filter(function(x) { return x < 3 });
everyother = a.filter(function(x, i) { return i%2 == 0 });

console.log(smallvalues);
console.log(everyother);

var a = [1, 2, 3, 4, 5];
console.log(a.every(function(x) { return x < 10; }));
console.log(a.every(function(x) { return x % 2 == 0; }));
console.log(a.some(function(x) { return x % 2 === 0; }));
console.log(a.some(isNaN));

//7.9.5
var a = [1, 2, 3, 4, 5];
var sum = a.reduce(function(x, y) { return x + y; }, 0);
var product = a.reduce(function(x, y) {	return x * y;}, 1);
var max = a.reduce(function(x, y) { return (x > y) ? x : y; });

console.log(a);
console.log(product);
console.log(max);

//7.10

console.log(Array.isArray([]));
console.log(Array.isArray({}));


