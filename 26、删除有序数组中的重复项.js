var removeDuplicates = function (nums) {
    let len = nums.length
    if (len == 0) return 0

    let index = 0
    for (let i = 0; i < len; i++) {
        if (nums[i] !== nums[index]) {
            nums[++index] = nums[i]
        }
    }
    return index + 1
}
