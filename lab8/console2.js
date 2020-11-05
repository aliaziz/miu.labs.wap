Array.prototype.bubbleSort = function() {
    let lastIndex = this.length - 1;
    for(let i = 0; i < this.length; i++) {
        for(let j = 0; j < lastIndex; j++) {
            if(this[j] > this[j+1]) {
                let temp = this[j+1];
                this[j+1] = this[j];
                this[j] = temp;
            }
        }

        lastIndex--;
    }
    return this;
}
let array = [6,4,0, 3,-2,1];
console.log(array.bubbleSort());