
String.prototype.filter = function(array) {
    let split = this.split(' ');
    let string = split.filter(elem => array.indexOf(elem) < 0);
    return string.join(" ");
}

console.log("This house is not nice!".filter(['not']));