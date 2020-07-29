var hammingWeight = function (n) {
    let result = 0;
    console.log(n);

    // let temp = ("" + n).match(/1/g);
    // return temp ? temp.length : 0;
    for (let i = 0; i < 32; i++) {
        console.log(n & 1);
        if (n & 1) {
            result++;
        }
        n >>= 1;
    }
    return result;
};

var input = 11111111111111111111111111111111;
var output = hammingWeight(input);

console.log(output);
