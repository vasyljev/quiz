import { randomSortArray } from './rundom-sort';
import { describe, expect, it } from '@jest/globals';

describe('randomSortArray', () => {
  it('shuffles an array correctly', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const shuffledArray = randomSortArray(originalArray);
    expect(shuffledArray).not.toEqual(originalArray);
  });

  it('preserves the length of the original array', () => {
    const originalArray = ['a', 'b', 'c'];
    const shuffledArray = randomSortArray(originalArray);
    expect(shuffledArray.length).toBe(originalArray.length);
  });

  it('returns a new array, not modifying the original', () => {
    const originalArray = [1, 2, 3];
    const shuffledArray = randomSortArray(originalArray);
    expect(originalArray).toEqual([1, 2, 3]);
  });
});
