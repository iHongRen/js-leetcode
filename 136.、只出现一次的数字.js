/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let ret = 0
    nums.forEach(e => {
        ret ^= e
    })
    return ret
}
