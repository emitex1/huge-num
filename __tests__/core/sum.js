var sum = require('../../src/core/sum');

test('adds 1 + 1 to equal 2', () => {
  expect(sum(1,1)).toBe("2");
});

test('adds 2 huge numbers to be correct', () => {
  const NUMBER_1 = "12213345674890";
  const NUMBER_2 = "564564574982348";

  expect(sum(NUMBER_1, NUMBER_2)).toBe("576777920657238");
});
