intro

Depending on the problem -- the sliding window can be fixed size or dynamic.
-use fixed when windwow size is given or constant
-window size can grow or shrink based on conditions


template 
FUNCTION slidingWindow(arr, k, processWindow):
  # Initialize the window result (sum, product, count, etc.)
  windowResult = INITIAL_VALUE
  
  # Compute the initial window's result
  FOR i FROM 0 TO k - 1:
    UPDATE windowResult WITH arr[i]

  # Process the first window
  processWindow(windowResult)

  # Slide the window across the array
  FOR i FROM k TO length of arr - 1:
    UPDATE windowResult BY ADDING arr[i]  # Add a new element to the window
    UPDATE windowResult BY REMOVING arr[i - k]  # Remove outgoing element
    processWindow(windowResult)  # Operation on the updated window