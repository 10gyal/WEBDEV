console.log("Problem 1");
function isEven(x) {
	if(x % 2 !== 0) {
		return "FALSE!"
	}
	if(x % 2 == 0) {
		return "TRUE!"
	}
}

console.log("Problem 2");
function factorial(n) {
	var x = 1;
	for (var i = 2; i <= n; i++) {
		x *= i;
	}
	return x;

}
console.log("Problem 3")
function kebabToSnake(str) {
	var newStr = str.replace(/-/g, "_");
	return newStr; 
}