/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  let hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];

    if (hashMap[currentNum] === undefined) {
      hashMap[target - currentNum] = i;
    } else {
      return [hashMap[currentNum], i];
    }
  }
};

module.exports = twoSum;
