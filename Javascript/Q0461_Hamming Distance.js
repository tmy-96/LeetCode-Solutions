//Find the number of different bit between 2 input
var hammingDistance = function (x, y) {
    let result = 0;
    for (let i = 0; i < 32; i++) {
        if ((x & 1) != (y & 1)) result++;
        y >>= 1;
        x >>= 1;
    }
    return result;
};

var input = {
    x: 5,
    y: 8,
};

var output = hammingDistance(input.x, input.y);

console.log(output);
