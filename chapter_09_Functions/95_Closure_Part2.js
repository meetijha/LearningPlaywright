function makeCounter(start = 0) {

    let count = start;  // this variable is "closed over"
    return {
        increment() { count++; },
        decrement() { count--; },
        get() { return count; } //return within returned object is allowed, as it's part of the method definition
    }

}

let counter = makeCounter(0);
counter.increment();
counter.increment();
counter.increment();
console.log(counter.get());// 3
counter.decrement();
console.log(counter.get());// 2

// The inner functions (increment, decrement, get) form a closure that retains access to the 'count' variable defined in the outer function (makeCounter). 
// This allows them to manipulate and access 'count' even after makeCounter has finished executing.