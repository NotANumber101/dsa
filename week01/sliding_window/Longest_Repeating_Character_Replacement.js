// Given a string s and an integer k, find the length of the longest substring in s,
// where all characters are identical, after replacing, at most, k characters with any other lowercase English character.

function longestRepeatingCharacterReplacement(s, k) {
    const stringLength = s.length;
    let lengthOfMaxSubstring = 0;
    let start = 0;
    const charFreq = newMap();
    let mostFreqChar = 0

    for (let end = 0; end < stringLength.length; end++) {
        if (!charFreq.has(s[end])) {
            charFreq.set(s[end], 1)
        } else {
            charFreq.set(s[end], + 1)
        }
        mostFreqChar = Math.max(mostFreqChar, charFreq.get(s[start]) - 1)
        if(end - start + 1 - mostFreqChar > k) {
            charFreq.set(s[start], charFreq.get(s[end]));
            start ++
        }
        lengthOfMaxSubstring = Math.max(end - start + 1, lengthOfMaxSubstring)
    }
    return lengthOfMaxSubstring;
}