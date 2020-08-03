var number = 1534236469;

console.log(reverse(number));

function reverse(x: number): number {
    x = parseInt(x.toString().split("").reverse().join("")) * Math.sign(x);

    if (x > 2147483647 || x < -2147483648) 
        return 0;
    else 
        return x
}
