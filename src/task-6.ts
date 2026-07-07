// Task 6: Generic getFirstElement function
export function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

// Explicit generic calls
const firstNumber = getFirstElement<number>([1, 2, 3]);
const firstString = getFirstElement<string>(['a', 'b', 'c']);
const firstBoolean = getFirstElement<boolean>([true, false, true]);

console.log(firstNumber, firstString, firstBoolean);
