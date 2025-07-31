/**
 * Arrays and Hashing - tier 1
 * 
 * 
 * Two Sum
 * Contains Duplicates
 * Best Time to Buy and Sell Stock
 * Valid Anagram
 * Product Of Array Except Self
 * 
 * 
 */

// 1. Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

const twoSum = (nums, target) => {
    const visitedNums = new Map();
    // iterate nums
    for (let i = 0; i < nums.length; i++) {
        let currentNum = nums[i]
        let difference = target - currentNum
        if (visitedNums.has(difference)) {
            return [visitedNums.get(difference), i]
        } else {
            visitedNums.set(currentNum, i)
        }
    }
    return []
}
// console.log(twoSum([1,2,3], 4)) // expect [0, 2]


// 2. Contains Duplicates 
// Given an integer array nums, return true if any value appears at least
// twice in the array, and return false if every element is distinct.

const containsDuplicates = (nums) => {
    const visitedNums = new Map()
    for (let i = 0; i < nums.length; i++) {
        const currentNumber = nums[i]
        if (visitedNums.has(currentNumber)) {
            return true
        } else {
            visitedNums.set(currentNumber, true)
        }
    }
    return false
}
console.log(containsDuplicates([1, 1, 2, 3]))

// 3. Best Time to Buy and Sell Stocks
// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0
const maxProfit = (prices) => {
    let buyDay = 0
    let sellDay = 1
    let maxProfit = 0

    while (sellDay < prices.length) {
        if (prices[sellDay] > prices[buyDay]) {
            let profit = prices[sellDay] - prices[buyDay]
            maxProfit = Math.max(maxProfit, profit)
        } else {
            buyDay = sellDay
        }
        sellDay++
    }
    return maxProfit
};

// 4. Valid Anagram
//  Given two strings s and t, return true if t is an anagram of s, and false otherwise.


// 5. Product of Array Except Self
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.
