/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    let stack = []
    const len = s.length
    for (let i = 0; i < len; i++) {
        const stackLength = stack.length
        if (stackLength > 0 && map[stack[stackLength - 1]] === s[i]) {
            stack.pop()
        } else {
            stack.push(s[i])
        }
    }
    return stack.length === 0
}

console.log(isValid('()[]({})'))
