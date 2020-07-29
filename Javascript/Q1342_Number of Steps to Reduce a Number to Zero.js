var numberOfSteps = function (num) {
    var steps = 0;
    while (num > 0) {
        num = num % 2 === 0 ? num / 2 : num - 1;
        steps++;
    }
    return steps;
};

var input = 14;
var output = numberOfSteps(input);

console.log(output);
