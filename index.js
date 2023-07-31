/**
 * @param {string} str
 * @return {string}
 */
// function returns string without spaces from the beginning and from the end, and in upper letter register
const transformString = (str) => {
  const trimmedString = str.trim();
  const transformedString = trimmedString.toUpperCase();
  return transformedString;
};

/**
 * @param {number[]} array
 * @return {number}
 */
// function should return max number from array
const findMaxNumber = (array) => {
  if (array.length === 0) {
    return undefined;
  }
  const maxNumber = Math.max(...array);
  return maxNumber;
};

/**
 * @param {string} str
 * @return {number[]}
 */
// function returns array of length of every word in string
const getStringWordsLength = (str) => {
  const words = str.split(" ");
  const wordLengths = [];
  for (const word of words) {
    wordLengths.push(word.length);
  }
  return wordLengths;
};

/**
 * @param {number[]} numArray
 * @param {number} degree
 * @return {number[]}
 */
// function returns array of numbers as result of initial number and degree
const getTransformedNumbers = (numArray, degree) => {
  const transformedArray = numArray.map((number) => {
    return Math.pow(number, degree);
  });

  return transformedArray;
};

/**
 * @param {string} text
 * @return {string}
 */
// function returns text with all first letters at the beginning of sentence capitalized
const getTransformedText = (text) => {
  const transformedText = text.replace(/(^\w|\.\s+\w)/g, (match) =>
    match.toUpperCase()
  );

  return transformedText;
};

/**
 * @param {any[]} array
 * @return {number[]}
 */
// function filters array and return only array of positive integers
const getPositiveIntegers = (array) => {
  const positiveIntegers = array.filter(
    (item) => Number.isInteger(item) && item > 0
  );

  return positiveIntegers;
};

/**
 * @param {any[]} array
 * @param {any} value
 * @return {number}
 */
// functions return index of element in array
const getElementIndex = (array, value) => {
  const index = array.indexOf(value);

  return index;
};

/**
 * @param {any[]} array
 * @param {any} value
 * @return {any | null}
 */
// function returns item from array or undefined if item is not found
const getItem = (array, value) => {
  const item = array.find((item) => item === value);

  return item !== undefined ? item : null;
};

/**
 * @param {string[]} array
 * @param {string} word
 * @return {boolean}
 */
// function returns true if word is in every string in array and false if is not
const isWordInEveryArrayString = (array, word) => {
  const containsWord = array.every((str) => str.includes(word));
  return containsWord;
};

/**
 * @param {number[]} array
 * @return {boolean}
 */
// function returns true if any number in array is negative
const isNegativeNumbersInArray = (array) => {
  const hasNegativeNumbers = array.some((number) => number < 0);

  return hasNegativeNumbers;
};

/**
 * @param {number[]} array
 * @param {number} startPosition
 * @param {number} endPosition
 * @return {any[]}
 */
// function returns part of array from start to end (including end) positions
const returnArrayPart = (array, startPosition, endPosition) => {
  const arrayPart = array.slice(startPosition, endPosition + 1);

  return arrayPart;
};

module.exports = {
  transformString,
  findMaxNumber,
  getStringWordsLength,
  getTransformedNumbers,
  getTransformedText,
  getPositiveIntegers,
  getElementIndex,
  getItem,
  isWordInEveryArrayString,
  isNegativeNumbersInArray,
  returnArrayPart,
};
