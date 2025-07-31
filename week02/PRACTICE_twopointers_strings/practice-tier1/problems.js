/**
 * Two Pointers And Strings - Tier 1
 * 
 * Valid Palindrome
 * Reverse String
 * Merge Sorted Array
 * Longest Substring Without Repeating Characters
 * Valid palindrome II
 * 
 * 
 */

// 1. Valid Palindrome
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

// 2. Reverse String
// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.
var reverseString = function(s) {
    let left = 0, right = s.length-1
    while(left<right) {
        const temp = s[left]
        s[left] = s[right]
        s[right] = temp
        right --
        left ++
    }
};

// 3. Merge Sorted Array

// 4. Longest Substring Without Repeating Characters

// 5. Valid palindrome II