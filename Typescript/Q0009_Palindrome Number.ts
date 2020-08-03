var input = 10;
var output = isPalindrome(input);
console.log(output);

function isPalindrome(x: number): boolean {
    if (x < 0 || x !== parseInt(x.toString().split("").reverse().join("")))
        return false;
    else return true;
}
