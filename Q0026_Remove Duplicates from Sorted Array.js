var removeDuplicates = function (nums) {
    let i = 1;

    while (i < nums.length) {
        if (nums[i] == nums[i - 1]) {
            nums.splice(i, 1);
        } else {
            i++;
        }
    }

    return nums.length;
};

var input = [1, 1, 2, 2, 2, 3];
var output = removeDuplicates(input);
console.log(output);
