const user = {
    name: "MEETI",
    age: 43
}

const calculator = {
    value: 0,
    // name : "MEETI",
    add(n) {
        this.value += n;
        // this.name += "JHA"
        return this;
    },
    substract(n) {
        this.value -= n;
        return this;
    }

}

console.log(calculator.add(5).substract(6));
// { value: 0, add: [Function: add], substract: [Function: substract] }