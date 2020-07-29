var removeElement = function (nums, val) {
    nums = nums.filter((num) => {
        return num != val;
    });
    return nums.length;
};

var input = [3, 2, 2, 3];
var val = 3;
var output = removeElement(nums, val);

console.log(nums);
