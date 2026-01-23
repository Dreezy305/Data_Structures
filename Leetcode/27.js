function removeElement(nums, val) {
  let k = 0;
  let pointer = 0;
  if (nums.length === 0) return 0;
  if (nums.length === 1 && nums[0] !== val) {
    return 1;
  }
  if (nums.length === 1 && nums[0] === val) {
    return 0;
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[pointer] = nums[i];
      pointer++;
      k++;
    }
  }
  return k;
}
