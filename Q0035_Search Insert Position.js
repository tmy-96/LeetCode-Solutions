//Solution 1
var searchInsert = function (nums, target) {
    let index = 0;

    while (target > nums[index]) {
        console.log(index);
        index++;
    }
    return index;
};

//Solution 2
var searchInsert2 = function (nums, target) {
        if (nums.length == 0) {
            return 0;
        } else if (nums.length == 1) {
            if (target > nums[0]) return 1;
            else return 0;
        } else {
            for (let i = 0; i < nums.length; i++) {
                if (i > 0) {
                    if (nums[i] == target) return i;
                    else if (nums[i] > target && nums[i - 1] < target) return i;
                    else if (target > nums[nums.length - 1]) return nums.length;
                } else {
                    if (target < nums[0] || target == nums[0]) return 0;
                }
            }
        }
};

var input = {
    nums: [1,2,3],
    target: 1,
};

var output = searchInsert2(input.nums, input.target);
console.log(output);
