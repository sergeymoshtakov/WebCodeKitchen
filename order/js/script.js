const preOrder = (accumulator, currentValue) => {
    return [currentValue, ...accumulator];
};

const test = x => document.writeln(x);

test([1,2,3].reduce(preOrder, []));