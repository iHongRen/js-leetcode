/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false

    let res = 0
    while (x > res) {
        res = res * 10 + (x % 10)
        x = Math.floor(x / 10)
    }
    return x === res || x === Math.floor(res / 10)
}
