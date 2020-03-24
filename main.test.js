const {
  triple,
  tripleAll,
  getNegativeValue,
  negativeValues,
  makeQuestion,
  questionings,
  getInitials,
  changeToInitials,
  doubleIfEven,
  doubleEven,
  changeToTitleCase,
  titleCaseNames,
  doubleIfOddIndexed,
  doubleEveryOther,
} = require('./main.js')


describe('triple', () => {
  it(`triples the number passed in`, () => {
    expect(triple(3)).toBe(9);
    expect(triple(5)).toBe(15);
    expect(triple(-1)).toBe(-3);
  })
})

describe('tripleAll', () => {
  it(`triples all numbers passed in`, () => {
    const originalNumbers1 = [1, 2, 3, 4];
    const numbers1 = [1, 2, 3, 4];
    const originalNumbers2 = [-5, 101, 0];
    const numbers2 = [-5, 101, 0];
    expect(tripleAll(numbers1)).toEqual([3, 6, 9, 12]);
    expect(tripleAll(numbers2)).toEqual([-15, 303, 0]);
    expect(numbers1).toEqual(originalNumbers1);
    expect(numbers2).toEqual(originalNumbers2);
  })

  it(`doesn't modify the original array`, () => {
    const originalNumbers1 = [1, 2, 3, 4];
    const numbers1 = [1, 2, 3, 4];
    const originalNumbers2 = [-5, 101, 0, 32.5];
    const numbers2 = [-5, 101, 0, 32.5];
    tripleAll(numbers1)
    tripleAll(numbers2)
    expect(numbers1).toEqual(originalNumbers1);
    expect(numbers2).toEqual(originalNumbers2);
  })
})

describe('getNegativeValue', () => {
  it(`returns negative values unchanged`, () => {
    expect(getNegativeValue(-30)).toBe(-30)
    expect(getNegativeValue(-1)).toBe(-1)
  })

  it(`returns negative versions of positive values`, () => {
    expect(getNegativeValue(1)).toBe(-1)
    expect(getNegativeValue(13)).toBe(-13)
  })

  it(`handles zero`, () => {
    expect(getNegativeValue(0)).toBe(0)
  })
})

describe('negativeValues', () => {
  it(`returns numbers unchanged if they're negative`, () => {
    expect(negativeValues([-1, -3, -1000])).toEqual([-1, -3, -1000]);
    expect(negativeValues([-1, -5, -100])).toEqual([-1, -5, -100]);
  })
  
  it(`returns negative versions of positive numbers`, () => {
    expect(negativeValues([-1, -3, 1000])).toEqual([-1, -3, -1000]);
    expect(negativeValues([-1, -5, -100])).toEqual([-1, -5, -100]);
  })

  it(`can handle zeroes`, () => {
    expect(negativeValues([0, 0, 0])).toEqual([0, 0, 0]);
    expect(negativeValues([0])).toEqual([0]);
  })

  it(`doesn't modify the original array`, () => {
    const originalNumbers = [-1, -3, 1000];
    const numbers = [-1, -3, 1000];
    negativeValues(numbers)
    expect(numbers).toEqual(originalNumbers);
  })
})

describe('makeQuestion', () => {
  it(`adds a question mark to the end of its string`, () => {
    expect(makeQuestion('hello')).toBe('hello?');
    expect(makeQuestion('wat')).toBe('wat?');
  })
})

describe('questionings', () => {
  it(`adds an exclamation point to the end of each string`, () => {
    expect(questionings(['hello', 'there', 'you absolute fiend'])).toEqual(['hello?', 'there?', 'you absolute fiend?']);
    expect(questionings(['hey', 'you'])).toEqual(['hey?', 'you?']);
  })

  it(`doesn't modify the original array`, () => {
    const originalGreetings = ['hello', 'there', 'you absolute fiend'];
    const greetings = ['hello', 'there', 'you absolute fiend'];
    questionings(greetings)
    expect(greetings).toEqual(originalGreetings);
  })
})

describe('getInitials', () => {
  it(`will return the first letter of each word in the given two word string`, () => {
    expect(getInitials('hey you')).toBe('hy');
    expect(getInitials('yo man')).toBe('ym');
  })
})

describe('changeToInitials', () => {
  it(`will return the first letters from each word`, () => {
    expect(changeToInitials(['Colin Jaffe', 'Mesuara Kaleziq'])).toEqual(['CJ', 'MK'])
    expect(changeToInitials(['Larry Bird', 'Robert Parrish'])).toEqual(['LB', 'RP'])
  })

  it(`doesn't modify the original array`, () => {
    const originalNumbers = [-1, -3, 1000];
    const numbers = [-1, -3, 1000];
    negativeValues(numbers)
    expect(numbers).toEqual(originalNumbers);
  })
})

describe('doubleIfEven', () => {
  it(`doubles the given number if it's even`, () => {
    expect(doubleIfEven(2)).toBe(4);
    expect(doubleIfEven(6)).toBe(12);
  })

  it(`returns odd numbers unchanged`, () => {
    expect(doubleIfEven(5)).toBe(5);
    expect(doubleIfEven(63)).toBe(63);
  })
})

describe('doubleEven', () => {
  it(`doubles all even numbers passed in`, () => {
    expect(doubleEven([1, 2, 3, 4, 101, 0, 5])).toEqual([1, 4, 3, 8, 101, 0, 5]);
  })
  
  it(`can handle negative numbers`, () => {
    expect(doubleEven([-5, -1, -100, -2])).toEqual([-5, -1, -200, -4]);
  })
})

describe('titleCaseNames', () => {
  it(`uppercases the first letter of each name (as a string) in the given array`, () => {
    expect(titleCaseNames(['colin', 'mesuara', 'genghis', 'pak', 'ginny', 'michael', 'tenzin'])).toEqual(['Colin', 'Mesuara', 'Genghis', 'Pak', 'Ginny', 'Michael', 'Tenzin'])
  })

  it(`lowercases the other letters of each name`, () => {
    expect(titleCaseNames(['cOlin', 'geNghis', 'mesUara', 'ginny', 'michael', 'pak', 'tenzin'])).toEqual(['Colin', 'Genghis', 'Mesuara', 'Ginny', 'Michael', 'Pak', 'Tenzin'])
  })
})

describe('doubleEveryOther', () => {
  it(`doubles every other number`, () => {
    const numbers1 = [2, 3, 4, 5, 6];
    const numbers2 = [20, 36, 400, 5, 6];
    expect(doubleEveryOther(numbers1)).toEqual([2, 6, 4, 10, 6]);
    expect(doubleEveryOther(numbers2)).toEqual([20, 72, 400, 10, 6]);
  })

  it(`doesn't modify the original array`, () => {
    const originalNumbers = [-1, -3, 1000];
    const numbers = [-1, -3, 1000];
    doubleEveryOther(numbers)
    expect(numbers).toEqual(originalNumbers);
  })
})
