function findTargetSum(nums, target) {
  let numsSet = new Set(nums);
  for (let num of nums) {
    let complement = target - num;
    console.log({complement, target, num})
    if (numsSet.has(complement)) {
      return [num, complement];
    }
  }
  return [];
}

res= findTargetSum([3,4,21,4,90,4,2,3,3,3,3,1,1,1, 40, 7, 54, 5], 57)

console.log(res)
