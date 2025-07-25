// A DNA sequence consists of nucleotides represented by the
// letters ‘A’, ‘C’, ‘G’, and ‘T’ only. For example,
// “ACGAATTCCG” is a valid DNA sequence.

// Given a string, s, that represents a DNA sequence,
// return all the 10-letter-long sequences
// (continuous substrings of exactly 10 characters)
// that appear more than once in s.
// You can return the output in any order.

var findRepeatedDnaSequences = function(s) {
    const seen = new Set()
    const repeated = new Set()
    for (let i = 0; i <= s.length - 10; i ++) {
        const sequence = s.slice(i, i + 10)
        if (seen.has(sequence)) {
            repeated.add(sequence)
        } else {
            seen.add(sequence)
        }
    }
    return Array.from(repeated)
};

// Notes: can be furthered optimized with rolling hash algorithm