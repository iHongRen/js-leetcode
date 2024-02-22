/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const obj = {}

    for (let i = 0; i < nums.length; i++) {
        const item = nums[i]
        const index = obj[target - item]
        if (index >= 0) {
            return [i, index]
        }
        obj[item] = i
    }
    return []
}

console.log(twoSum([2, 7, 11, 15], 9))
