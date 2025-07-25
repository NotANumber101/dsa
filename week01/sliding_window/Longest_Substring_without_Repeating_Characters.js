export function findLongestSubstring(str) {
    let seen = new Set()
    let start = 0, maxLength = 0
    for (let end = 0; end < str.length; end++) {
        while(seen.has(s[end])) {
            seen.delete(s[start])
            start++
        }
        seen.add(s[end])
        maxLength = Math.max(maxLength, right - left + 1)
    }
    return maxLength;
}
