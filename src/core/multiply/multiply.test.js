import multiply from './multiply.js';

test('multiply 2 * 2 to equal 4', () => {
  expect(multiply(2, 2)).toBe("4");
});

test('multiply 2 huge numbers to be correct', () => {
  const NUMBER_1 = "12213345674890";
  const NUMBER_2 = "564564574982348";

  expect(multiply(NUMBER_1, NUMBER_2)).toBe("6895222310056771043896841720");
});
