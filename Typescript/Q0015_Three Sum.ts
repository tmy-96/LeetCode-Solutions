let nums = [-1, 0, 1, 2, -1, -4];

console.log(threeSum(nums));

function threeSum(nums: number[]): number[][] {
    let result: number[][] = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    result.push([nums[i], nums[j], nums[k]]);
                }
            }
        }
    }

    return removeDuplicate(result);
}

function removeDuplicate(array: number[][]): number[][] {
    //TODO
    return [];
}
