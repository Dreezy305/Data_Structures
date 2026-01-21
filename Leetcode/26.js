function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  let pointer = 1;

  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[j - 1]) {
      nums[pointer] = nums[j];
      pointer++;
    }
  }

  return pointer;
}
