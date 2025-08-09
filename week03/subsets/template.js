// FUNCTION findSubsets(arr):
//   subsets = [[]]  # Initialize with an empty subset

//   FOR each num IN arr:
//     newSubsets = []
    
//     # Generate new subsets by adding the current element
//     FOR each subset IN subsets:
//       newSubsets.append(subset + [num])
    
//     subsets.extend(newSubsets)  # Add new subsets to the result

//   RETURN subsets