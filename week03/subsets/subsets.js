// Given an array of integers, nums, find all possible subsets of nums, including the empty set.

// Note: The solution set must not contain duplicate subsets. You can return the solution in any order.

function findAllSubsets(nums) {

  // Replace this placeholder return statement with your code
  return [[]]
}





// iterative 

var subsets = function(nums) {
    let res = [[]], appendarr= []
    
    for(let num of nums){
        appendarr = []
        for(let entry of res){
            appendarr.push([...entry, num])
        }
        
        res.push(...appendarr)
    }
    
    return res
    
};


// recursive

var subsets = function(nums) {
	let res=[]                    // the final arr, which we will display
	let auxArr = [], i=0             // global vars
    
    function recur(nums,i,auxArr){
        if(i==nums.length) { res.push(auxArr); return } //operation of recursion will be upto i=n-1
													 // when it will hit, i==n, it will store the computed arr, in the final arr, and break(return)
        
		// take it
        recur(nums, i+1, [...auxArr, nums[i] ] ) //or, we can use 'aux.concat(nums[i])'
		
		// dont take
        recur(nums, i+1, auxArr)
    
    }
    
    recur(nums,i,auxArr) // passing the global variable declared already
    return res        // rerturn the final 2d arr
    
    
};