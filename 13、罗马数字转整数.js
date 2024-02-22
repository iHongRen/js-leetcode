/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const nums = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let ret = 0
    const len = s.length
    for (let i = 0; i < len; i++) {
        const cur = nums[s[i]]
        if (i + 1 < len && cur < nums[s[i + 1]]) {
            ret -= cur
        } else {
            ret += cur
        }
    }
    return ret
}

console.log(romanToInt('XXVII'))
console.log(romanToInt('LVIII'))
console.log(romanToInt('MCMXCIV'))
