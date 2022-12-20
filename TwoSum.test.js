const twoSum = require("./TwoSum");

test("[1,2,3,4,5] kiyala array ekak pass karoth target = 9  unoth answer eka = [3 ,4]  ", () => {
  expect(twoSum([1, 2, 3, 4, 5], 9)).toStrictEqual([3, 4]);
});
