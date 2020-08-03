let nums = [2, 7, 11, 15];
let target = 9;

console.log(twoSumHash(nums, target));

//Brute Force
//Time: O(n^2)
//Space: O(1)
function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        let pair = target - nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] === pair) {
                return [i, j];
            }
        }
    }

    return [];
}

// Hash Table
// Time : O(n)
// Space : O(n)
function twoSumHash(nums: number[], target: number): number[] {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let pair: number = target - nums[i];

        if (map.has(pair)) {
            return [map.get(pair), i];
        }
        
        map.set(nums[i], i);
    }

    return [];
}
